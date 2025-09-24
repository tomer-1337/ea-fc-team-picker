import React, { useEffect, useMemo, useState } from 'react'
import StarPicker from './components/StarPicker.jsx'
import Presets from './components/Presets.jsx'
import CountryFilterModal from './components/CountryFilterModal.jsx'
import TeamCard from './components/TeamCard.jsx'
import { TEAMS, PRESET_DEFINITIONS } from './data/teams.js'
import styles from './App.module.css'

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

const GENERIC_LOGO_HISTORY = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'

function HistoryRow({ left, right }) {
  return (
    <div className={styles.historyRow}>
      <img src={left.logo} alt={left.name} className={styles.tinyLogo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO_HISTORY }} />
      <span>{left.name}</span>
      <span className={styles.dim}>vs</span>
      <span>{right.name}</span>
      <img src={right.logo} alt={right.name} className={styles.tinyLogo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO_HISTORY }} />
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
    <div className={styles.app}>
      <header className={styles.header}>
        <h1 className={styles.title}>EA FC 26 Random Matchup</h1>
      </header>

      <section className={styles.section}>
        <StarPicker label="Min stars" value={state.minStars} onChange={(v) => updateSetting({ minStars: v, maxStars: Math.max(v, state.maxStars) })} />
        <div className={styles.spacer8} />
        <StarPicker label="Max stars" value={state.maxStars} onChange={(v) => updateSetting({ maxStars: v, minStars: Math.min(state.minStars, v) })} />
      </section>

      <section className={`${styles.section} ${styles.mt8}`}>
        <Presets
          presets={PRESET_DEFINITIONS}
          current={state.presetKey}
          onChange={(key) => updateSetting({ presetKey: key })}
          onOpenFilters={() => setModalOpen(true)}
          filtersActive={state.countries.length > 0}
        />
      </section>

      <section className={`${styles.section} ${styles.mt8}`}>
        <button
          className={`${styles.generateBtn} ${!canGenerate ? styles.generateBtnDisabled : ''} ${pulse ? styles.pulse : ''}`}
          disabled={!canGenerate}
          onClick={handleGenerate}
        >
          Generate Matchup
        </button>
        <div className={styles.countText}>{filtered.length} teams available</div>
        <div className={styles.errorWrap} aria-live="polite">
          {filtersError && (
            <div className={styles.errorText}>Not enough teams. Adjust filters to have at least two teams.</div>
          )}
        </div>
      </section>

      <section className={`${styles.section} ${styles.mt8}`}>
        <div className={styles.cardsWrap}>
          <div className={styles.cardCol}>
            <div key={`a-${animKey}`}>
              <TeamCard team={match[0]} animateKey={0} />
            </div>
          </div>
          <div className={styles.cardCol}>
            <div key={`b-${animKey}`}>
              <TeamCard team={match[1]} animateKey={1} />
            </div>
          </div>
        </div>
      </section>

      {history.length > 0 && (
        <section className={`${styles.section} ${styles.mt8}`}>
          <div className={styles.historySectionTitle}>Matchup History</div>
          <div className={styles.historyScroll}>
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
