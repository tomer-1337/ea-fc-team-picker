import React from 'react'

const rowStyle = {
  display: 'flex',
  gap: 8,
  flexWrap: 'wrap',
}

const btn = (active) => ({
  padding: '10px 14px',
  borderRadius: 999,
  background: active ? '#2a2a2a' : '#1E1E1E',
  color: '#FFFFFF',
  // Keep border width constant to prevent layout shift
  border: active ? '2px solid #FFD700' : '2px solid transparent',
  boxShadow: active ? '0 0 0 1px rgba(255,215,0,0.35) inset' : '0 0 0 1px #2e2e2e inset',
  cursor: 'pointer',
  fontSize: 14,
  transition: 'background 120ms ease, transform 120ms ease, border 120ms ease',
})

export default function Presets({ presets, current, onChange, onOpenFilters, filtersActive = false }) {
  return (
    <div style={rowStyle}>
      {Object.keys(presets).map((key) => (
        <button
          key={key}
          style={btn(current === key)}
          onClick={() => onChange(key)}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          {presets[key].label}
        </button>
      ))}
      <button
        aria-label="Open filters"
        title="Filters"
        style={btn(filtersActive)}
        onClick={onOpenFilters}
      >
        ⚙️
      </button>
    </div>
  )
}
