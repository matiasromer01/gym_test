import React from 'react'
import styles from './StatsCard.module.css'

const StatsCard = ({ icon, label, value, unit, color }) => {
    return (
        <div className={styles.card}>
            <div className={styles.top}>
                <span className={styles.label}>{label}</span>
                <div className={styles.iconWrapper} style={{ background: `${color}22`, color }}>
                    {icon}
                </div>
            </div>
            <div className={styles.valueRow}>
                <span className={styles.value}>{value}</span>
                <span className={styles.unit}>{unit}</span>
            </div>
        </div>
    )
}

export default StatsCard
