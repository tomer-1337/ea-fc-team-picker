import React from 'react'
import styles from './GenerateButton.module.css'

export default function GenerateButton({ canGenerate, onClick, pulse, count, showError }) {
  return (
    <div className={styles.wrap}>
      <button
        className={`${styles.generateBtn} ${!canGenerate ? styles.generateBtnDisabled : ''} ${pulse ? styles.pulse : ''}`}
        disabled={!canGenerate}
        onClick={onClick}
      >
        Generate Matchup
      </button>
      <div className={styles.countText}>{count} teams available</div>
      <div className={styles.errorWrap} aria-live="polite">
        {showError && (
          <div className={styles.errorText}>Not enough teams. Adjust filters to have at least two teams.</div>
        )}
      </div>
    </div>
  )
}
