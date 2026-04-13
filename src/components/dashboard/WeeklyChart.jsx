import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import styles from './WeeklyChart.module.css'

const getLast7Days = (workouts) => {
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
    return Array.from({ length: 7 }, (_, i) => {
        const date = new Date()
        date.setDate(date.getDate() - (6 - i))
        const dateStr = date.toISOString().split('T')[0]
        const count = workouts.filter(w => w.date === dateStr).length
        return { day: dayNames[date.getDay()], count }
    })
}

const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload?.length) return null
    return (
        <div style={{
            background: 'rgba(15,12,41,0.95)',
            border: '1px solid rgba(142,132,255,0.3)',
            borderRadius: 8,
            padding: '8px 12px'
        }}>
            <p style={{ color: '#b0b0cc', margin: 0, fontSize: '0.78rem' }}>{label}</p>
            <p style={{ color: '#8e84ff', margin: '2px 0 0', fontWeight: 600 }}>
                {payload[0].value} entreno{payload[0].value !== 1 ? 's' : ''}
            </p>
        </div>
    )
}

const WeeklyChart = ({ workouts }) => {
    const data = getLast7Days(workouts)

    return (
        <div className={styles.card}>
            <h3 className={styles.title}>Actividad semanal</h3>
            <ResponsiveContainer width="100%" height={180}>
                <BarChart data={data} barSize={32} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <XAxis
                        dataKey="day"
                        tick={{ fill: '#b0b0cc', fontSize: 12 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis
                        allowDecimals={false}
                        tick={{ fill: '#b0b0cc', fontSize: 11 }}
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(142,132,255,0.06)' }} />
                    <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                        {data.map((entry, i) => (
                            <Cell
                                key={i}
                                fill={entry.count > 0 ? '#8e84ff' : 'rgba(142,132,255,0.18)'}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default WeeklyChart
