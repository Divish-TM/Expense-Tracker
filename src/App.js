import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import ExpenseSummary from './components/ExpenseSummary';
import MonthlyChart from './components/Chart';
import './App.css'

const App = () => {
  const [entries, setEntries] = useState([]);

  const addEntry = (entry) => setEntries([...entries, entry]);
  const deleteEntry = (index) => setEntries(entries.filter((_, i) => i !== index));

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>Expense Tracker</Typography>
      <EntryForm addEntry={addEntry} />
      <EntryList entries={entries} deleteEntry={deleteEntry} />
      <MonthlyChart entries={entries} />
      <ExpenseSummary entries={entries} />
    </Container>
  );
};

export default App;
