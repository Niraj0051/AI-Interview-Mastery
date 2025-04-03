'use client'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

export function AnalyticsBarChart({ data }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar 
          dataKey="value" 
          fill="#8884d8" 
          radius={[4, 4, 0, 0]}
          animationDuration={1500}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function RatingsLineChart({ data }) {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 5, right: 20, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis 
            dataKey="interviewNumber"
            label={{ 
              value: 'Interview Sequence', 
              position: 'insideBottomRight', 
              offset: -10,
              fontSize: 12
            }}
          />
          <YAxis 
            domain={[0, 10]}
            label={{ 
              value: 'Average Rating', 
              angle: -90, 
              position: 'insideLeft',
              fontSize: 12
            }}
          />
          <Tooltip
            formatter={(value, name, props) => [
              `${value.toFixed(1)}/10`,
              `${props.payload.interviewType} (Interview ${props.payload.interviewNumber})`
            ]}
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #eee',
              borderRadius: '4px',
              padding: '8px 12px'
            }}
          />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 6 }}
            activeDot={{ r: 8, stroke: '#8884d8', strokeWidth: 2 }}
            animationDuration={1000}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }