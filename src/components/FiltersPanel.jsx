import React from 'react'
import StarPicker from './StarPicker.jsx'
import Presets from './Presets.jsx'
import styles from './FiltersPanel.module.css'

export default function FiltersPanel({
  minStars,
  maxStars,
  onChangeMin,
  onChangeMax,
  presetKey,
  onPresetChange,
  onOpenFilters,
  filtersActive,
  presets,
}) {
  return (
    <div className={styles.panel}>
      <StarPicker label="Min stars" value={minStars} onChange={onChangeMin} />
      <div className={styles.spacer8} />
      <StarPicker label="Max stars" value={maxStars} onChange={onChangeMax} />
      <div className={styles.spacer15} />
      <Presets
        presets={presets}
        current={presetKey}
        onChange={onPresetChange}
        onOpenFilters={onOpenFilters}
        filtersActive={filtersActive}
      />
    </div>
  )
}
