import React from 'react';
import { List, ListItem, ListItemText, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EntryList = ({ entries, deleteEntry }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
      <Typography variant="h6" gutterBottom>Entries</Typography>
      <List>
        {entries.map((entry, index) => (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton edge="end" aria-label="delete" onClick={() => deleteEntry(index)}>
                <DeleteIcon color="error" />
              </IconButton>
            }
          >
            <ListItemText
              primary={`${entry.date} - ${entry.description} (${entry.category})`}
              secondary={`Amount: ₹${entry.amount}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default EntryList;
