import React, { useState } from 'react'
import styles from './MiniCalendar.module.css'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const MONTH_NAMES = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
const DAY_NAMES = ['L','M','X','J','V','S','D']

const MiniCalendar = ({ workouts }) => {
    const [viewDate, setViewDate] = useState(new Date())

    const year = viewDate.getFullYear()
    const month = viewDate.getMonth()

    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const offset = (firstDayOfMonth + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const workoutDays = new Set(
        workouts
            .filter(w => {
                const d = new Date(w.date + 'T00:00:00')
                return d.getFullYear() === year && d.getMonth() === month
            })
            .map(w => new Date(w.date + 'T00:00:00').getDate())
    )

    const today = new Date()
    const isToday = (day) =>
        today.getDate() === day &&
        today.getMonth() === month &&
        today.getFullYear() === year

    const prevMonth = () => setViewDate(new Date(year, month - 1, 1))
    const nextMonth = () => setViewDate(new Date(year, month + 1, 1))

    const cells = []
    for (let i = 0; i < offset; i++) cells.push(null)
    for (let d = 1; d <= daysInMonth; d++) cells.push(d)

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <button className={styles.navBtn} onClick={prevMonth}>
                    <MdChevronLeft size={18} />
                </button>
                <span className={styles.monthLabel}>{MONTH_NAMES[month]} {year}</span>
                <button className={styles.navBtn} onClick={nextMonth}>
                    <MdChevronRight size={18} />
                </button>
            </div>
            <div className={styles.dayNames}>
                {DAY_NAMES.map(d => <span key={d} className={styles.dayName}>{d}</span>)}
            </div>
            <div className={styles.grid}>
                {cells.map((day, i) => (
                    <span
                        key={i}
                        className={[
                            styles.cell,
                            !day ? styles.emptyCell : '',
                            day && isToday(day) ? styles.today : '',
                            day && workoutDays.has(day) && !isToday(day) ? styles.hasWorkout : '',
                        ].filter(Boolean).join(' ')}
                    >
                        {day || ''}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default MiniCalendar
