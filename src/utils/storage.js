export const getWorkouts = () => JSON.parse(localStorage.getItem('workouts') || '[]')

export const getSchedule = () => JSON.parse(localStorage.getItem('schedule') || '{}')

export const calculateStreak = (workouts) => {
    if (!workouts.length) return 0

    const uniqueDates = [...new Set(workouts.map(w => w.date))].sort().reverse()

    let streak = 0
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    for (const dateStr of uniqueDates) {
        const workoutDate = new Date(dateStr)
        workoutDate.setHours(0, 0, 0, 0)
        const diffDays = Math.round((today - workoutDate) / (1000 * 60 * 60 * 24))

        if (diffDays === streak) {
            streak++
        } else {
            break
        }
    }

    return streak
}
