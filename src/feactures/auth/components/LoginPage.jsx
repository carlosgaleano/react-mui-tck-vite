import React, { useState, useEffect } from "react";
import backgroundImage2 from "../../../img/fondo_3.1.jpeg";
import { useNavigate } from "react-router-dom";
import { LoginRequest } from "../helpers/Auth.js";
import { useAuthStore } from "../store/auth.ts";
import AlertLogin from "./AlertLogin"; // Asumimos que ya lo transformaste a MUI
import { useForm } from "../../../hooks/useForm"; // Asumimos que no depende de react-bootstrap
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Typography,
} from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledLabel = styled('label')`
  color: white;
  &.Mui-focused {
    color: white;
  }
  &.Mui-error {
    color: red;
  }
`;

const LoginPage = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const [alertShow, setAlertShow] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await LoginRequest(email, password);
      if (response?.data && response?.data.access_token) {
        const { access_token } = response.data;
        setToken(access_token);
        navigate("/blog");
      } else {
        setAlertShow(true);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const { formState, onInputChange, email, password } = useForm({
    email: "cags20031@gmail.com",
    password: "api2024",
  });

  useEffect(() => {
    if (alertShow) {
      const timeoutId = setTimeout(() => {
        setAlertShow(false);
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [alertShow]);

  // Estilos personalizados con styled
  const TransparentCard = styled(Card)(({ theme }) => ({
    padding: '1.6rem',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(5px) saturate(1.2)',
    marginLeft: '-350px !important',
    width: '60%',
  
    
  }));
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        
        minHeight: "75vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <Grid container justifyContent="center" alignItems="center" sx={{ width: "100%", borderBlockColor: 'blue' }}>
        <Grid item xs={12} md={8} lg={4}>
       
          <TransparentCard
          
          >
            {/* ... (CardHeader y CardContent) */}
            <CardContent>
            <Grid container justifyContent="flex-start"> 
            <Grid item xs={12}>
              <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2,alignItems: 'flex-start', }}>
                <TextField
                  label={<StyledLabel>Email</StyledLabel>}
                  type="email"
                  name="email"
                  variant="outlined"
                  value={email}
                  onChange={onInputChange}
                  required
                  sx={{
                    input: {
                      color: 'black',
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      '&::selection': { // Estilo para la selección
                        backgroundColor: 'white', // Fondo de la selección
                        color: 'black !important', // Color del texto seleccionado
                      },
                    },
                    InputLabelProps: {
                      style: { color: 'white !important' },
                      sx: {
                        '&.Mui-focused': {
                          color: 'white !important',
                        },
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        color: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                        color: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                   
                  }}
                />
                <TextField
                  label={<StyledLabel>Password</StyledLabel>}
                  type="password"
                  name="password"
                  variant="outlined"
                  value={password}
                  onChange={onInputChange}
                  required
                  sx={{
                    input: { color: 'black', backgroundColor: 'write' }, // Ajusta el fondo del input
                    InputLabelProps: { style: { color: 'white' } },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'white',
                      },
                      '&:hover fieldset': {
                        borderColor: 'white',
                        color: 'white',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: 'white',
                      },
                    },
                  }}
                />
                <FormControlLabel
                  control={<Checkbox defaultChecked sx={{ color: 'white' }} />}
                  label={<Typography sx={{ color: 'white' }}>Recordar credenciales</Typography>}
                />
                <Button variant="contained" color="primary" type="submit" sx={{ backgroundColor: '#007bff' }}> {/* Ajusta el color del botón */}
                  Ingresar
                </Button>
              </Box>
              </Grid>
              </Grid>
            </CardContent>
          </TransparentCard>
        </Grid>
        {alertShow && <AlertLogin setAlertShow={setAlertShow} alertShow={alertShow} />}
      </Grid>
    </Container>
  );
};

export default LoginPage;