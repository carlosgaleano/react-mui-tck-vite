import React from 'react';
import imglog from '../../../img/logo_logytech2.png';
import { AppBar, Toolbar, Typography, Box, styled, IconButton } from '@mui/material';
import { LogOut2 } from './LogOut';
import { useAuthStore } from '../../auth/store/auth';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

function NavbarTop() {
  const isAuth = useAuthStore(state => state.isAuth);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: '#343a40' }}>
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
        {isAuth ? (
          <Box display="flex" alignItems="center">
            <LogOut2 />
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            {location.pathname === '/login' ? (
              <IconButton onClick={() => navigate('/')} color="inherit">
                <HomeIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleLoginClick} color="inherit">
                <LoginIcon />
              </IconButton>
            )}
          </Box>
        )}
      </StyledToolbar>
    </AppBar>
  );
}

export default NavbarTop;