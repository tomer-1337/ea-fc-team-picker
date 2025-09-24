import React from 'react'
import styles from './StarPicker.module.css'

function Star({index, value, onChange}) {
    const fullThreshold = index + 1
    const halfThreshold = index + 0.5
    const percent = value >= fullThreshold ? 100 : value >= halfThreshold ? 50 : 0

    function handleClick(e) {
        const rect = e.currentTarget.getBoundingClientRect()
        const clientX = e.clientX ?? (e.touches?.[0]?.clientX ?? 0)
        const isLeft = clientX - rect.left < rect.width / 2
        const newVal = index + (isLeft ? 0.5 : 1)
        onChange(newVal)
    }

    return (
        <div
            role="button"
            aria-label={`set ${(index + 1)} star${value === index + 0.5 ? ' (half)' : ''}`}
            className={styles.starBox}
            onClick={handleClick}
            onTouchStart={handleClick}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
            {percent === 100 ? (
                <span className={styles.fillFull}>★</span>
            ) : percent === 0 ? (
                <span className={styles.base}>★</span>
            ) : (
                <>
                    <span className={styles.base}>★</span>
                    <span className={percent === 50 ? styles.fillHalf : styles.fillFull}>★</span>
                </>
            )}
        </div>
    )
}

export default function StarPicker({label, value, onChange}) {
    const stars = [0, 1, 2, 3, 4]
    return (
        <div className={styles.row}>
            <div className={styles.label}>{label}</div>
            <div className={styles.stars}>
                {stars.map((i) => (
                    <Star key={i} index={i} value={value} onChange={onChange}/>
                ))}
            </div>
        </div>
    )
}
