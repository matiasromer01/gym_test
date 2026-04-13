import React, { useState, useEffect } from 'react'
import styles from './ProgressPage.module.css'
import StatsCard from '../components/dashboard/StatsCard'
import WeeklyChart from '../components/dashboard/WeeklyChart'
import RecentWorkouts from '../components/dashboard/RecentWorkouts'
import MiniCalendar from '../components/dashboard/MiniCalendar'
import TodaySchedule from '../components/dashboard/TodaySchedule'
import { getWorkouts, getSchedule, calculateStreak } from '../utils/storage'
import { GiWeightLiftingUp } from 'react-icons/gi'
import { FaFire } from 'react-icons/fa'
import { MdFitnessCenter } from 'react-icons/md'

const ProgressPage = () => {
    const [workouts, setWorkouts] = useState([])
    const [schedule, setSchedule] = useState({})
    const name = localStorage.getItem('asideName') || 'Atleta'

    useEffect(() => {
        setWorkouts(getWorkouts())
        setSchedule(getSchedule())
    }, [])

    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const startOfWeek = new Date(today)
    startOfWeek.setDate(today.getDate() - today.getDay())

    const weeklyWorkouts = workouts.filter(w => new Date(w.date + 'T00:00:00') >= startOfWeek).length
    const streak = calculateStreak(workouts)
    const totalExercises = workouts.reduce((acc, w) => acc + (w.exercises?.length || 0), 0)

    return (
        <div className={styles.dashboard}>
            <div className={styles.mainPanel}>
                <header className={styles.header}>
                    <h1 className={styles.greeting}>Hola, {name}</h1>
                    <p className={styles.subgreeting}>Aquí está tu resumen de hoy</p>
                </header>

                <div className={styles.statsRow}>
                    <StatsCard
                        icon={<GiWeightLiftingUp size={20} />}
                        label="Esta semana"
                        value={weeklyWorkouts}
                        unit="entrenamientos"
                        color="#8e84ff"
                    />
                    <StatsCard
                        icon={<FaFire size={20} />}
                        label="Racha actual"
                        value={streak}
                        unit="días"
                        color="#ff7043"
                    />
                    <StatsCard
                        icon={<MdFitnessCenter size={20} />}
                        label="Total ejercicios"
                        value={totalExercises}
                        unit="registrados"
                        color="#4caf8a"
                    />
                </div>

                <WeeklyChart workouts={workouts} />
                <RecentWorkouts workouts={workouts} />
            </div>

            <div className={styles.sidePanel}>
                <MiniCalendar workouts={workouts} />
                <TodaySchedule schedule={schedule} />
            </div>
        </div>
    )
}

export default ProgressPage
