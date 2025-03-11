import React from 'react';
import imglog from '../../../img/logo_logytech2.png';
import { AppBar, Toolbar, Typography, Box, IconButton, styled } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '64px', // Ajusta la altura según tus necesidades
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

function NavbarTop() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#343a40' }}> {/* bg-dark */}
      <StyledToolbar>
        <Box display="flex" alignItems="center">
          <img
            src={imglog}
            alt="logo"
            style={{ width: '100px', height: '50px', backgroundColor: 'white' }}
          />
          <Typography variant="h6" component="div" sx={{ ml: 2, color: 'rgba(255, 255, 255, 0.5)' }}>
            Tracking de Ordenes de Entrega
          </Typography>
        </Box>
        {/* Puedes agregar más elementos aquí si es necesario */}
      </StyledToolbar>
    </AppBar>
  );
}

export default NavbarTop;