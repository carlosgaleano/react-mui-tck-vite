import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Box from '@mui/material/Box'; // Importa Box para el contenedor

function AlertLogin({ setAlertShow, alertShow }) {
  return (
    <Box sx={{ width: '100%', mr: 5 }}> {/* Usamos Box para el contenedor y margen */}
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Los datos de acceso al Sistema son incorrectos.
      </Alert>
    </Box>
  );
}

export default AlertLogin;