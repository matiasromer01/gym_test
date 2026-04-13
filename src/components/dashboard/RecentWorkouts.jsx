import React from 'react'
import styles from './RecentWorkouts.module.css'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { MdAccessTime } from 'react-icons/md'

const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00')
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' })
}

const RecentWorkouts = ({ workouts }) => {
    const recent = [...workouts]
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 4)

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Últimos entrenamientos</h3>
            {recent.length === 0 ? (
                <div className={styles.empty}>
                    <GiWeightLiftingUp size={32} color="rgba(142,132,255,0.3)" />
                    <p>Todavía no hay entrenamientos registrados</p>
                </div>
            ) : (
                <ul className={styles.list}>
                    {recent.map(w => (
                        <li key={w.id} className={styles.item}>
                            <div className={styles.iconWrapper}>
                                <GiWeightLiftingUp size={18} color="#8e84ff" />
                            </div>
                            <div className={styles.info}>
                                <span className={styles.name}>{w.name || 'Entrenamiento'}</span>
                                <span className={styles.exercises}>{w.exercises?.length || 0} ejercicios</span>
                            </div>
                            <div className={styles.meta}>
                                <span className={styles.date}>{formatDate(w.date)}</span>
                                {w.duration && (
                                    <span className={styles.duration}>
                                        <MdAccessTime size={12} /> {w.duration} min
                                    </span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default RecentWorkouts
