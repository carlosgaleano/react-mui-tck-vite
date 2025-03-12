import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardDespachos from '../../Dashboard/components/DashboardDespachos';
import Despachos from '../../tracking/components/Despachos';


const PageContent = ({ pathname}) => {


  return (
  
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Typography>
          <p>Contenido referente a: {pathname}</p>
        </Typography>
        {pathname.startsWith('/dashboard') ? (
          <Despachos />
        ) : null}
      </Box>
  );
};

export default PageContent;
