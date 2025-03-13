import { useAuthStore } from "../../auth/store/auth";
import { useNavigate } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout'; // Import MUI Logout icon
import { IconButton, Tooltip } from '@mui/material'; // Import MUI components

export const LogOut2 = () => {
  const logOut = useAuthStore((store) => store.logOut);
  const navigate = useNavigate();

  const close = () => {
    navigate("/");
    logOut();
  };

  return (
    <Tooltip title="Boton de Salida!">
      <IconButton onClick={close} color="error"> {/* Use MUI IconButton */}
        <LogoutIcon /> {/* Use MUI Logout icon */}
      </IconButton>
    </Tooltip>
  );
};