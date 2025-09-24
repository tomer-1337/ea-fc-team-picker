import React from 'react'

const card = {
  background: '#1A1A1A',
  borderRadius: 16,
  padding: 16,
  color: '#FFFFFF',
  minWidth: 0,
}
const logo = { width: 80, height: 80, objectFit: 'contain', display: 'block', margin: '0 auto' }
const name = { textAlign: 'center', fontWeight: 800, fontSize: 18, marginTop: 8 }
const meta = { textAlign: 'center', color: '#AAAAAA', fontSize: 14, marginTop: 4 }
const starsRow = { display: 'flex', justifyContent: 'center', gap: 4, marginTop: 6 }
const starBox = { position: 'relative', width: 22, height: 22, lineHeight: '22px', fontSize: 18 }
const layerBase = { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }
const baseStar = { ...layerBase, color: '#444' }
const fillStar = (percent) => ({ ...layerBase, color: '#FFD700', pointerEvents: 'none', overflow: 'hidden', clipPath: `inset(0 ${100 - percent}% 0 0)` })

const GENERIC_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg'

function Stars({ value }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  return (
    <div style={starsRow}>
      {Array.from({ length: 5 }).map((_, i) => {
        const percent = i < full ? 100 : i === full && half ? 50 : 0
        return (
          <span key={i} aria-hidden style={starBox}>
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
    <div
      style={{ ...card, animation: 'fadeUp 500ms ease both', animationDelay: `${animateKey * 80}ms` }}
    >
      <img src={team.logo} alt={`${team.name} logo`} style={logo} onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GENERIC_LOGO }} />
      <div style={name}>{team.name}</div>
      <Stars value={team.stars} />
      <div style={meta}>
        <span style={{ marginRight: 6 }}>{team.country.flag}</span>
        {team.country.name}
      </div>
      <div style={meta}>{divisionText}</div>
    </div>
  )
}
