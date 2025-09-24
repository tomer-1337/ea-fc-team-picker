import React, { useEffect, useMemo, useState } from 'react'
import StarPicker from './components/StarPicker.jsx'
import Presets from './components/Presets.jsx'
import CountryFilterModal from './components/CountryFilterModal.jsx'
import TeamCard from './components/TeamCard.jsx'
import { TEAMS, PRESET_DEFINITIONS } from './data/teams.js'

const app = { minHeight: '100%', color: '#FFFFFF', background: '#121212', padding: 16 }
const title = { textAlign: 'center', fontWeight: 900, fontSize: 22, margin: '2px 0 14px' }
const section = { background: 'transparent', borderRadius: 16, padding: 8 }
const generateBtn = (enabled) => ({
  width: '100%', padding: '14px 16px', borderRadius: 14, background: enabled ? '#1E1E1E' : '#171717', color: '#FFFFFF', border: '1px solid #2e2e2e', cursor: enabled ? 'pointer' : 'not-allowed', fontSize: 16, fontWeight: 700, transition: 'transform 120ms ease, background 120ms ease',
})
const countText = { color: '#AAAAAA', textAlign: 'center', fontSize: 12, marginTop: 6 }
const errorWrap = { position: 'relative', height: 18, marginTop: 4 }
const errorText = { position: 'absolute', left: 0, right: 0, top: 0, textAlign: 'center', color: '#FF4D4F', fontSize: 12 }
const cardsWrap = { display: 'flex', gap: 12, marginTop: 14, flexWrap: 'nowrap' }
const cardCol = { flex: '1 1 50%', minWidth: 0 }

const storageKey = 'ea-fc-settings-v1'

function usePersistentState(defaults) {
  const [state, setState] = useState(() => {
    try {
      const raw = localStorage.getItem(storageKey)
      if (!raw) return defaults
      const parsed = JSON.parse(raw)
      return { ...defaults, ...parsed }
    } catch {
      return defaults
    }
  })
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state))
  }, [state])
  return [state, setState]
}

function filterTeams(teams, { minStars, maxStars, presetKey, countries }) {
  const preset = PRESET_DEFINITIONS[presetKey] || PRESET_DEFINITIONS.ALL
  return teams.filter((t) =>
    t.stars >= minStars && t.stars <= maxStars && preset.predicate(t) && (countries.length === 0 || countries.includes(t.country.code))
  )
}

function randomTwo(arr) {
  if (arr.length < 2) return []
  const i = Math.floor(Math.random() * arr.length)
  let j = Math.floor(Math.random() * (arr.length - 1))
  if (j >= i) j += 1
  return [arr[i], arr[j]]
}

const historyRowStyle = { display: 'flex', alignItems: 'center', gap: 8, padding: '6px 8px', borderRadius: 8, background: '#1A1A1A', marginBottom: 6, fontSize: 12, color: '#FFFFFF' }
const tinyLogo = { width: 16, height: 16, objectFit: 'contain' }
const dim = { color: '#AAAAAA' }
const GENERIC_LOGO_HISTORY = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'

function HistoryRow({ left, right }) {
  return (
    <div style={historyRowStyle}>
      <img src={left.logo} alt={left.name} style={tinyLogo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO_HISTORY }} />
      <span>{left.name}</span>
      <span style={dim}>vs</span>
      <span>{right.name}</span>
      <img src={right.logo} alt={right.name} style={tinyLogo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO_HISTORY }} />
    </div>
  )
}

export default function App() {
  const [state, setState] = usePersistentState({
    minStars: 0.5,
    maxStars: 5,
    presetKey: 'ALL',
    countries: [],
  })
  const [modalOpen, setModalOpen] = useState(false)
  const [match, setMatch] = useState([])
  const [history, setHistory] = useState([])
  const [pulse, setPulse] = useState(false)
  const [animKey, setAnimKey] = useState(0)
  const [filtersError, setFiltersError] = useState(false)

  const countries = useMemo(() => {
    const map = new Map()
    TEAMS.forEach((t) => map.set(t.country.code, t.country))
    return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name))
  }, [])

  const filtered = useMemo(() => filterTeams(TEAMS, state), [state])

  const canGenerate = filtered.length >= 2

  function handleGenerate() {
    if (!canGenerate) {
      setFiltersError(true)
      return
    }
    setPulse(true)
    setTimeout(() => setPulse(false), 180)
    const [a, b] = randomTwo(filtered)
    setHistory((h) => (match.length === 2 ? [{ left: match[0], right: match[1] }, ...h].slice(0, 50) : h))
    setMatch([{ ...a }, { ...b }])
    setAnimKey((k) => k + 1)
  }

  // Clear error whenever filters change
  useEffect(() => {
    setFiltersError(false)
  }, [state.minStars, state.maxStars, state.presetKey, state.countries])

  function updateSetting(patch) {
    setState((s) => ({ ...s, ...patch }))
  }

  function handleModalSave(action) {
    if (action?.toggle) {
      setState((s) => ({
        ...s,
        countries: s.countries.includes(action.toggle)
          ? s.countries.filter((c) => c !== action.toggle)
          : [...s.countries, action.toggle],
      }))
    }
  }

  function clearCountries() {
    setState((s) => ({ ...s, countries: [] }))
  }

  return (
    <div style={app}>
      <style>
        {`
          @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes pulse { 0% { transform: scale(1) } 50% { transform: scale(0.98) } 100% { transform: scale(1) } }
        `}
      </style>

      <header style={{ marginBottom: 12 }}>
        <h1 style={title}>EA FC 26 Random Matchup</h1>
      </header>

      <section style={section}>
        <StarPicker label="Min stars" value={state.minStars} onChange={(v) => updateSetting({ minStars: v, maxStars: Math.max(v, state.maxStars) })} />
        <div style={{ height: 8 }} />
        <StarPicker label="Max stars" value={state.maxStars} onChange={(v) => updateSetting({ maxStars: v, minStars: Math.min(state.minStars, v) })} />
      </section>

      <section style={{ ...section, marginTop: 8 }}>
        <Presets
          presets={PRESET_DEFINITIONS}
          current={state.presetKey}
          onChange={(key) => updateSetting({ presetKey: key })}
          onOpenFilters={() => setModalOpen(true)}
          filtersActive={state.countries.length > 0}
        />
      </section>

      <section style={{ ...section, marginTop: 8 }}>
        <button
          style={{ ...generateBtn(canGenerate), animation: pulse ? 'pulse 180ms ease' : 'none' }}
          disabled={!canGenerate}
          onClick={handleGenerate}
          onMouseEnter={(e) => { if (canGenerate) e.currentTarget.style.background = '#2a2a2a' }}
          onMouseLeave={(e) => { if (canGenerate) e.currentTarget.style.background = '#1E1E1E' }}
        >
          Generate Matchup
        </button>
        <div style={countText}>{filtered.length} teams available</div>
        <div style={errorWrap} aria-live="polite">
          {filtersError && (
            <div style={errorText}>Not enough teams. Adjust filters to have at least two teams.</div>
          )}
        </div>
      </section>

      <section style={{ ...section, marginTop: 8 }}>
        <div className="cards" style={cardsWrap}>
          <div className="col" style={cardCol}>
            <div key={`a-${animKey}`}>
              <TeamCard team={match[0]} animateKey={0} />
            </div>
          </div>
          <div className="col" style={cardCol}>
            <div key={`b-${animKey}`}>
              <TeamCard team={match[1]} animateKey={1} />
            </div>
          </div>
        </div>
      </section>

      {history.length > 0 && (
        <section style={{ ...section, marginTop: 8 }}>
          <div style={{ fontWeight: 800, marginBottom: 20 }}>Matchup History</div>
          <div style={{ maxHeight: 120, overflowY: 'auto', paddingRight: 4 }}>
            {history.map((m, idx) => (
              <HistoryRow key={idx} left={m.left} right={m.right} />)
            )}
          </div>
        </section>
      )}

      <CountryFilterModal
        open={modalOpen}
        countries={countries}
        selected={state.countries}
        onClose={() => setModalOpen(false)}
        onSave={handleModalSave}
        onClear={clearCountries}
      />
    </div>
  )
}
