import React from 'react'

const starRowStyle = {
  display: 'flex',
  gap: 8,
  alignItems: 'center',
}

const labelStyle = { color: '#AAAAAA', fontSize: 14, minWidth: 76 }

const starBox = {
  width: 28,
  height: 28,
  borderRadius: 6,
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#1E1E1E',
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'transform 120ms ease, background 120ms ease',
  fontSize: 20,
  lineHeight: '28px',
}

const layerBase = {
  position: 'absolute',
  inset: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const baseStar = {
  ...layerBase,
  color: '#666666',
}

const fillStar = (percent) => ({
  ...layerBase,
  color: '#FFD700',
  overflow: 'hidden',
  pointerEvents: 'none',
  clipPath: `inset(0 ${100 - percent}% 0 0)`,
})

function Star({ index, value, onChange }) {
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
      style={starBox}
      onClick={handleClick}
      onTouchStart={handleClick}
      onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.96)')}
      onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      {percent === 100 ? (
        <span style={fillStar(100)}>★</span>
      ) : percent === 0 ? (
        <span style={baseStar}>★</span>
      ) : (
        <>
          <span style={baseStar}>★</span>
          <span style={fillStar(percent)}>★</span>
        </>
      )}
    </div>
  )
}

export default function StarPicker({ label, value, onChange }) {
  const stars = [0, 1, 2, 3, 4]
  return (
    <div style={starRowStyle}>
      <div style={labelStyle}>{label}</div>
      <div style={{ display: 'flex', gap: 6 }}>
        {stars.map((i) => (
          <Star key={i} index={i} value={value} onChange={onChange} />
        ))}
      </div>
    </div>
  )
}
