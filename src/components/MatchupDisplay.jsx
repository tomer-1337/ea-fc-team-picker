import React from 'react'
import TeamCard from './TeamCard.jsx'
import styles from './MatchupDisplay.module.css'

export default function MatchupDisplay({teamA, teamB, animKey}) {
    return (
        <div className={styles.cardsWrap}>
            <div className={styles.cardCol}>
                <div className={styles.cardInner} key={`a-${animKey}`}>
                    <TeamCard team={teamA} animateKey={0}/>
                </div>
            </div>
            <div className={styles.cardCol}>
                <div className={styles.cardInner} key={`b-${animKey}`}>
                    <TeamCard team={teamB} animateKey={1}/>
                </div>
            </div>
        </div>
    )
}
