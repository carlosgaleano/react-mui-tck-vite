import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import HomePage from './feactures/Home/components/HomePage';
import LoginPage from './feactures/auth/components/LoginPage';
import Footer from './feactures/menu/components/Footbar';
import NavbarTop from './feactures/menu/components/NavBarTop';
import Menu from './feactures/menu/components/Menu';
import { useAuthStore } from './feactures/auth/store/auth';
//import 'react-toastify/dist/ReactToastify.css';
import { Box } from '@mui/material'; // Importa Box para el layout

const ProtectedLayout = ({ isAllowed }) => {
    if (!isAllowed) {
        return <Navigate to="/login" />;
    }
    return <Outlet />;
};

const App = () => {
    const isAuth = useAuthStore(state => state.isAuth);

    return (
        <Router>
            <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <NavbarTop />
                <Box sx={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route element={<ProtectedLayout isAllowed={isAuth} />}>
                            <Route path="/blog" element={<Menu />} />
                        </Route>
                    </Routes>
                </Box>
                <Footer />
            </Box>
        </Router>
    );
};

export default App;