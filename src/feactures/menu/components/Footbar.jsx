import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { FiTruck } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ backgroundColor: '#343a40', color: 'rgba(255, 255, 255, 0.5)', py: 3, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="body2" component="p" mb={0}>
              &copy; {currentYear} Logytech. Derechos Reservados <b>Logytech Chile</b>. <FiTruck />
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
            <Typography variant="body2" component="p" mb={0}>
              <FaLaptopCode /> Desarrollado por <b>Logytech Chile.</b>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;