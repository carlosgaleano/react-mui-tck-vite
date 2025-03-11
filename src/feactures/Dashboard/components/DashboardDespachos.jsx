import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { FaDatabase, FaUsers, FaEnvelope, FaCheckSquare } from 'react-icons/fa';

const DashboardDespachos = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <Card sx={{ backgroundColor: 'warning.main', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            <FaDatabase /> 49/50 GB
                        </Typography>
                        <Typography variant="body2" component="p">
                            Used Space
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card sx={{ backgroundColor: 'success.main', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            <FaUsers /> $34,245
                        </Typography>
                        <Typography variant="body2" component="p">
                            Revenue
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card sx={{ backgroundColor: 'error.main', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            <FaEnvelope /> 75
                        </Typography>
                        <Typography variant="body2" component="p">
                            Email Subscriptions
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card sx={{ backgroundColor: 'info.main', color: 'white' }}>
                    <CardContent>
                        <Typography variant="h6" component="div">
                            <FaCheckSquare /> +245
                        </Typography>
                        <Typography variant="body2" component="p">
                            Completed Tasks
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default DashboardDespachos;