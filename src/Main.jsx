import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/material/locale';


const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    esES
  );
createRoot(document.getElementById('root')).render( <StrictMode>
     <ThemeProvider theme={theme}>
         <App />
     </ThemeProvider>
   
  </StrictMode>,);


