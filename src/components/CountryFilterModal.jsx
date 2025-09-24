import React from 'react'
import styles from './CountryFilterModal.module.css'

export default function CountryFilterModal({ open, countries, selected, onClose, onSave, onClear }) {
  if (!open) return null
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.sheet} onClick={(e) => e.stopPropagation()}>
        <div className={styles.title}>Country Filters</div>
        <div className={styles.grid}>
          {countries.map((c) => (
            <label key={c.code} className={styles.row}>
              <input
                type="checkbox"
                checked={selected.includes(c.code)}
                onChange={() => onSave({ toggle: c.code })}
              />
              <span>{c.flag}</span>
              <span className={styles.countryName}>{c.name}</span>
            </label>
          ))}
        </div>
        <div className={styles.actions}>
          <button className={styles.btn} onClick={onClear}>Reset</button>
          <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  )
}
