import React, {useEffect, useMemo, useState} from 'react'
import CountryFilterModal from './components/CountryFilterModal.jsx'
import {TEAMS, PRESET_DEFINITIONS} from './data/teams.js'
import styles from './App.module.css'
import Header from './components/Header.jsx'
import FiltersPanel from './components/FiltersPanel.jsx'
import GenerateButton from './components/GenerateButton.jsx'
import MatchupDisplay from './components/MatchupDisplay.jsx'
import HistoryRow from './components/HistoryRow.jsx'

const storageKey = 'ea-fc-settings-v1'

function usePersistentState(defaults) {
    const [state, setState] = useState(() => {
        try {
            const raw = localStorage.getItem(storageKey)
            if (!raw) return defaults
            const parsed = JSON.parse(raw)
            return {...defaults, ...parsed}
        } catch {
            return defaults
        }
    })
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state))
    }, [state])
    return [state, setState]
}

function filterTeams(teams, {minStars, maxStars, presetKey, countries}) {
    const preset = PRESET_DEFINITIONS[presetKey] || PRESET_DEFINITIONS.ALL
    return teams.filter((t) =>
        t.stars >= minStars && t.stars <= maxStars && preset.predicate(t) && (countries.length === 0 || countries.includes(t.country.code))
    )
}

function randomTwo(arr) {
    if (arr.length < 2) return []
    const i = Math.floor(Math.random() * arr.length)
    let j
    do {
        j = Math.floor(Math.random() * arr.length)
    } while (j === i)
    return [arr[i], arr[j]]
}


export default function App() {
    const [state, setState] = usePersistentState({
        minStars: 0.5,
        maxStars: 5,
        presetKey: 'ALL',
        countries: [],
        history: []
    })
    const [modalOpen, setModalOpen] = useState(false)
    const [match, setMatch] = useState([])
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
        setState((s) => ({
            ...s,
            history:
                match.length === 2
                    ? [{ left: match[0], right: match[1] }, ...s.history].slice(0, 50)
                    : s.history,
        }))
        setMatch([{...a}, {...b}])
        setAnimKey((k) => k + 1)
    }

    // Clear error whenever filters change
    useEffect(() => {
        setFiltersError(false)
    }, [state.minStars, state.maxStars, state.presetKey, state.countries])

    function updateSetting(patch) {
        setState((s) => ({...s, ...patch}))
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
        setState((s) => ({...s, countries: []}))
    }

    return (
        <div className={styles.app}>
            <Header/>

            <section className={styles.section}>
                <FiltersPanel
                    minStars={state.minStars}
                    maxStars={state.maxStars}
                    onChangeMin={(v) => updateSetting({minStars: v, maxStars: Math.max(v, state.maxStars)})}
                    onChangeMax={(v) => updateSetting({maxStars: v, minStars: Math.min(state.minStars, v)})}
                    presetKey={state.presetKey}
                    onPresetChange={(key) => updateSetting({presetKey: key})}
                    onOpenFilters={() => setModalOpen(true)}
                    filtersActive={state.countries.length > 0}
                    presets={PRESET_DEFINITIONS}
                />
            </section>

            <section className={`${styles.section} ${styles.mt8}`}>
                <GenerateButton
                    canGenerate={canGenerate}
                    onClick={handleGenerate}
                    pulse={pulse}
                    count={filtered.length}
                    showError={filtersError}
                />
            </section>

            <section className={`${styles.section} ${styles.mt8}`}>
                <MatchupDisplay teamA={match[0]} teamB={match[1]} animKey={animKey}/>
            </section>

            <section className={`${styles.section} ${styles.mt15}`}>
                <div className={styles.historyHeader}>
                    <div className={styles.historySectionTitle}>Matchup History</div>
                    <button className={styles.clearBtn} onClick={() => setState((s) => ({ ...s, history: [] }))}>Clear</button>
                </div>
                <div className={styles.historyScroll}>
                    {state.history.map((m, idx) => (
                        <HistoryRow key={idx} left={m.left} right={m.right}/>)
                    )}
                </div>
            </section>

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
