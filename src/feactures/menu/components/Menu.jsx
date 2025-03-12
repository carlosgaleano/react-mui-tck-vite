import React, { useEffect } from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import DashboardDespachos from '../../Dashboard/components/DashboardDespachos';
import PageContent from './PageContent';



function DashboardLayoutBasic(props) {



const NAVIGATION = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'reports',
    title: 'Reports',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'sales',
        title: 'Sales',
        icon: <DescriptionIcon />,
      
      },
      {
        segment: 'traffic',
        title: 'Traffic',
        icon: <DescriptionIcon />,
       
      },
    ],
  },
  {
    segment: 'integrations',
    title: 'Integrations',
    icon: <LayersIcon />,
   
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});



PageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
  activeComponent: PropTypes.string.isRequired,
};




  const { window } = props;
  const router = useDemoRouter('/dashboard');


  const demoWindow = window !== undefined ? window() : undefined;

  // Asigna setActiveComponent a cada onClick en NAVIGATION
  const navigationWithHandlers = NAVIGATION.map((item) => {
    if (item.onClick) {
      return {
        ...item,
      //  onClick: item.onClick(setActiveComponent), // Pasa setActiveComponent a onClick
       
      };
      
    }
    return item;
  });

  return (
    <>


    <AppProvider
      navigation={NAVIGATION} // Usa navigationWithHandlers
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContent
          pathname={router.pathname}
        
      
          // Pasa activeComponent a DemoPageContent
        />
      </DashboardLayout>
    </AppProvider>
     </>
  );
}

DashboardLayoutBasic.propTypes = {
  window: PropTypes.func,
};

export default DashboardLayoutBasic;