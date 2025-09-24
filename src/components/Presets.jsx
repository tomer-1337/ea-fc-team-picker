import React from 'react'
import styles from './Presets.module.css'

export default function Presets({presets, current, onChange, onOpenFilters, filtersActive = false}) {
    return (
        <div className={styles.row}>
            {Object.keys(presets).map((key) => (
                <button
                    key={key}
                    className={`${styles.btn} ${current === key ? styles.active : ''}`}
                    onClick={() => onChange(key)}
                >
                    {presets[key].label}
                </button>
            ))}
            <button
                aria-label="Open filters"
                title="Filters"
                className={`${styles.btn} ${filtersActive ? styles.active : ''}`}
                onClick={onOpenFilters}
            >
                ⚙️
            </button>
        </div>
    )
}
