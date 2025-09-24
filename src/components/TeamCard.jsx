import React from 'react'
import styles from './TeamCard.module.css'

const GENERIC_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'

function Stars({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div className={styles.starsRow}>
      {Array.from({ length: 5 }).map((_, i) => {
        const percent = i < full ? 100 : i === full && half ? 50 : 0
        return (
          <span key={i} aria-hidden className={styles.starBox}>
            {percent === 100 ? (
              <span className={`${styles.layer} ${styles.fillFull}`}>★</span>
            ) : percent === 0 ? (
              <span className={`${styles.layer} ${styles.base}`}>★</span>
            ) : (
              <>
                <span className={`${styles.layer} ${styles.base}`}>★</span>
                <span className={`${styles.layer} ${percent === 50 ? styles.fillHalf : styles.fillFull}`}>★</span>
              </>
            )}
          </span>
        )
      })}
    </div>
  )
}

export default function TeamCard({ team, animateKey = 0 }) {
  if (!team) return null
  const divisionText = team.type === 'country' ? 'International' : (team.division || '')
  return (
    <div className={`${styles.card} ${animateKey ? styles.delay1 : styles.delay0}`}>
      <img src={team.logo} alt={`${team.name} logo`} className={styles.logo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO }} />
      <div className={styles.name}>{team.name}</div>
      <Stars value={team.stars} />
      <div className={styles.meta}>
        <span className={styles.flag}>{team.country.flag}</span>
        {team.country.name}
      </div>
      <div className={styles.meta}>{divisionText}</div>
    </div>
  )
}
