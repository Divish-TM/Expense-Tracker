import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Paper, Typography } from '@mui/material';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const MonthlyChart = ({ entries }) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const aggregatedData = Array(12).fill(0);

  // Aggregate data for each month
  entries.forEach((entry) => {
    const month = new Date(entry.date).getMonth();
    aggregatedData[month] += entry.amount;
  });

  const data = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Income/Expenses',
        data: aggregatedData,
        backgroundColor: aggregatedData.map(value => (value >= 0 ? '#4caf50' : '#f44336')),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Monthly Income and Expenses' },
    },
    scales: {
      y: { beginAtZero: true },
      x: { type: 'category' },
    },
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>Monthly Trends</Typography>
      <Bar data={data} options={options} />
    </Paper>
  );
};

export default MonthlyChart;
