import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Paper, Typography } from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// Inspired by the former Facebook spinners.

// From https://github.com/mui/material-ui/issues/9496#issuecomment-959408221


export default function StudentProgress() {
  return (


    <Box>

        <Box>
        <Paper elevation={3} >
        <Typography variant="h4" gutterBottom>
        Abdus Sami
      </Typography>
      <Typography variant="p" gutterBottom>
       Total Number of Test: 11
      </Typography>
      <br />
      <Typography variant="p" gutterBottom>
       Performance:Good
      </Typography>
            </Paper>
        </Box>

    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      {/* <FacebookCircularProgress />
      <GradientCircularProgress /> */}
      <br />
      <BorderLinearProgress variant="determinate" value={90} />
    </Stack>
      </Box>
  );
}
