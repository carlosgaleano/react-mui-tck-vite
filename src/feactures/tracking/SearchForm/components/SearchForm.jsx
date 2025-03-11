import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const SearchForm = ({ onSubmit }) => {
    const [trackingNumber, setTrackingNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(trackingNumber);
        setTrackingNumber('');
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
                label="Ingrese su número de seguimiento"
                variant="outlined"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
                Buscar
            </Button>
        </Box>
    );
};

export default SearchForm;