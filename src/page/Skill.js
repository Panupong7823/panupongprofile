import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Skill() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '250px',
          height: 'auto',
          display: 'flex',
          justifyContent: 'left',
          alignItems: 'left',
          flexDirection: 'column',
          textAlign: 'left',
        },
      }}
    >
      <Paper elevation={0} sx={{ bgcolor: '#f5f5f5' }}>
        <Typography variant="h6">programming language</Typography>
        <Typography variant="h9">- C</Typography>
        <Typography variant="h9">- HTML</Typography>
        <Typography variant="h9">- Javascript</Typography>
        <Typography variant="h9">- CSS</Typography>
      </Paper>
      <Paper sx={{ bgcolor: '#f5f5f5' }}>
        <Typography variant="h6">Data analytics</Typography>
        <Typography variant="h9">- Python</Typography>
      </Paper>
      <Paper sx={{ bgcolor: '#f5f5f5' }}>
        <Typography variant="h6">UX/UI design</Typography>
        <Typography variant="h9">- Adobe XD</Typography>
      </Paper>
      <Paper elevation={3} sx={{ bgcolor: '#f5f5f5' }}>
        <Typography variant="h6">Other</Typography>
        <Typography variant="h9">- Microsoft Office (Word,Powerpoint,Excel)</Typography>
      </Paper>
    </Box>
  );
}


