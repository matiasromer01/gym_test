import React from 'react'
import styles from './TodaySchedule.module.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { MdCalendarToday } from 'react-icons/md'

const DAY_MAP = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado']
const DAY_LABELS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

const TodaySchedule = ({ schedule }) => {
    const todayIndex = new Date().getDay()
    const todayKey = DAY_MAP[todayIndex]
    const todayLabel = DAY_LABELS[todayIndex]
    const todayRoutine = schedule[todayKey]

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h3 className={styles.title}>Hoy</h3>
                <span className={styles.dayLabel}>{todayLabel}</span>
            </div>
            {!todayRoutine ? (
                <div className={styles.empty}>
                    <MdCalendarToday size={28} color="rgba(142,132,255,0.3)" />
                    <p>Sin rutina para hoy</p>
                </div>
            ) : (
                <div className={styles.routine}>
                    <div className={styles.routineName}>
                        <GiWeightLiftingUp size={16} color="#8e84ff" />
                        <span>{todayRoutine.name || todayRoutine}</span>
                    </div>
                    {todayRoutine.exercises?.length > 0 && (
                        <ul className={styles.exerciseList}>
                            {todayRoutine.exercises.slice(0, 4).map((ex, i) => (
                                <li key={i} className={styles.exercise}>{ex}</li>
                            ))}
                            {todayRoutine.exercises.length > 4 && (
                                <li className={styles.more}>+{todayRoutine.exercises.length - 4} más</li>
                            )}
                        </ul>
                    )}
                </div>
            )}
        </div>
    )
}

export default TodaySchedule
