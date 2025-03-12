import React from 'react';
import { CircularProgress, Box, Typography, Button } from '@mui/material';

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="200px" // Adjust as needed
    >
      <Box display="flex" justifyContent="center" mb={3}>
        <CircularProgress />
      </Box>

      <Box display="flex" justifyContent="center" mb={3}>
        <Button variant="outlined" disabled>
          <CircularProgress size={16} sx={{ mr: 1 }} />
          Cargando...
        </Button>
      </Box>

      <Typography variant="body2" color="textSecondary">
        Por favor espere...
      </Typography>
    </Box>
  );
};

export default Loading;