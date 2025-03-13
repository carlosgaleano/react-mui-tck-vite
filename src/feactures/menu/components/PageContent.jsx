import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardDespachos from '../../Dashboard/components/DashboardDespachos';
import Despachos from '../../tracking/components/Despachos';


const PageContent = ({ pathname}) => {

  let cadena = pathname;
  let nuevaCadena = cadena.replace("/", ""); 
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
        <Typography color="text.secondary">
          <p sx={{color:'blue'}}>Contenido referente a: {nuevaCadena}</p>
        </Typography>
 
      {pathname.startsWith('/dashboard') ? (
        <DashboardDespachos />
      ) : pathname.startsWith('/orders') ? (
        <Despachos />
      ) : null}
      </Box>
  );
};

export default PageContent;
