import React, { useEffect, useState } from 'react'
import styles from './CountryFilterModal.module.css'

export default function CountryFilterModal({open, countries, selected, onClose, onSave, onClear}) {
    const [visible, setVisible] = useState(open)

    useEffect(() => {
        if (open) {
            setVisible(true)
        } else {
            // wait for animation to finish before unmounting
            const timeout = setTimeout(() => setVisible(false), 300) // match CSS duration
            return () => clearTimeout(timeout)
        }
    }, [open])

    if (!visible) return null
    
    return (
        <div className={`${styles.overlay} ${open ? styles.overlayOpen : styles.overlayClose}`} onClick={onClose}>
            <div className={`${styles.sheet} ${open ? styles.sheetOpen : styles.sheetClose}`} onClick={(e) => e.stopPropagation()}>
                <div className={styles.title}>Country Filters</div>
                <div className={styles.grid}>
                    {countries.map((c) => (
                        <label key={c.id} className={styles.row}>
                            <input
                                type="checkbox"
                                checked={selected.includes(c.id)}
                                onChange={() => onSave({toggle: c.id})}
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
