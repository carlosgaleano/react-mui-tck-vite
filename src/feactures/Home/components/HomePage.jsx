import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../../tracking/SearchForm/components/SearchForm';
import backgroundImage2 from "../../../img/fondo_3.1.jpeg";
import { Container, Grid, Button, Box, Typography, Paper } from '@mui/material';

const HomePage = () => {
  

    const handleLoginClick = () => {
        console.log('to login');
    }

    const handleSearch = (trackingNumber) => {
        console.log("Número de seguimiento buscado:", trackingNumber);
    };

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                minHeight: '75vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: `url(${backgroundImage2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.9,
            }}
        >
            <Grid container justifyContent="flex-end" sx={{ mt: 3, mr: 3, width: '100%' }}>
                <Grid item xs="auto">
                    <Button variant="outlined" color="primary" onClick={handleLoginClick}>
                        Login
                    </Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="center" alignItems="center" sx={{ flexGrow: 1 }}>
                <Grid item md={8}>
                    <Paper elevation={3} sx={{ p: 5, textAlign: 'center' }}>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Bienvenido al Sistema de Tracking de Despachos
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Ingrese su número de seguimiento para conocer el estado de su envío.
                        </Typography>
                        <SearchForm onSubmit={handleSearch} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HomePage;