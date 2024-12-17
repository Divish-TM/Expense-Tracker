import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ExpenseSummary = ({ entries }) => {
  const income = entries.filter(e => e.amount > 0).reduce((acc, e) => acc + e.amount, 0);
  const expenses = entries.filter(e => e.amount < 0).reduce((acc, e) => acc + Math.abs(e.amount), 0);
  const balance = income - expenses;

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 3, textAlign: 'center' }}>
      <Typography variant="h6">Summary</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: 2 }}>
        <Typography variant="body1" color="success.main">Income: ${income.toFixed(2)}</Typography>
        <Typography variant="body1" color="error.main">Expenses: ${expenses.toFixed(2)}</Typography>
        <Typography variant="body1" color="primary.main">Balance: ${balance.toFixed(2)}</Typography>
      </Box>
    </Paper>
  );
};

export default ExpenseSummary;
