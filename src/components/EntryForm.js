import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

const categories = ['Salary', 'Food', 'Rent', 'Entertainment', 'Transportation', 'Utilities', 'Other'];

const EntryForm = ({ addEntry }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('Income'); // New state for Type

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !category) return;

    const formattedAmount = type === 'Expense' ? -Math.abs(parseFloat(amount)) : Math.abs(parseFloat(amount));
    addEntry({ description, amount: formattedAmount, date, category, type });

    setDescription('');
    setAmount('');
    setDate('');
    setCategory('');
    setType('Income');
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginBottom: 3 }}>
      <Typography variant="h6" gutterBottom>Add Income/Expense</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <TextField
          label="Amount"
          variant="outlined"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <TextField
          label="Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={category}
            label="Category"
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary">Add Entry</Button>
      </Box>
    </Paper>
  );
};

export default EntryForm;
