import React from 'react'
import styles from './HistoryRow.module.css'

const GENERIC_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'

export default function HistoryRow({left, right}) {
    return (
        <div className={styles.historyRow}>
            <img src={left.logo} alt={left.name} className={styles.tinyLogo} onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = GENERIC_LOGO
            }}/>
            <span>{left.name}</span>
            <span className={styles.dim}>vs</span>
            <span>{right.name}</span>
            <img src={right.logo} alt={right.name} className={styles.tinyLogo} onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = GENERIC_LOGO
            }}/>
        </div>
    )
}
