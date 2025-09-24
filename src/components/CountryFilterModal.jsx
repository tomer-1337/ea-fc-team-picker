import React from 'react'

const overlay = {
  position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
}
const sheet = {
  background: '#1A1A1A', borderTopLeftRadius: 16, borderTopRightRadius: 16, padding: 16, width: '100%', maxWidth: 560, color: '#FFFFFF', boxShadow: '0 -10px 30px rgba(0,0,0,0.4)'
}
const title = { fontWeight: 700, fontSize: 18, marginBottom: 8 }
const grid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, maxHeight: '45vh', overflow: 'auto' }
const row = { display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', background: '#121212', borderRadius: 10 }
const actions = { display: 'flex', gap: 10, marginTop: 12, justifyContent: 'space-between', alignItems: 'center' }
const btn = (primary) => ({ padding: '10px 14px', borderRadius: 12, background: primary ? '#2A2A2A' : '#1E1E1E', color: '#fff', border: '1px solid #2e2e2e', cursor: 'pointer' })

export default function CountryFilterModal({ open, countries, selected, onClose, onSave, onClear }) {
  if (!open) return null
  return (
    <div style={overlay} onClick={onClose}>
      <div style={sheet} onClick={(e) => e.stopPropagation()}>
        <div style={title}>Country Filters</div>
        <div style={grid}>
          {countries.map((c) => (
            <label key={c.code} style={row}>
              <input
                type="checkbox"
                checked={selected.includes(c.code)}
                onChange={(e) => onSave({ toggle: c.code })}
              />
              <span>{c.flag}</span>
              <span style={{ color: '#AAAAAA' }}>{c.name}</span>
            </label>
          ))}
        </div>
        <div style={actions}>
          <button style={btn(false)} onClick={onClear}>Reset</button>
          <button style={btn(true)} onClick={onClose}>Done</button>
        </div>
      </div>
    </div>
  )
}
