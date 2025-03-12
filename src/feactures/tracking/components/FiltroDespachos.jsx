import  { useState, useEffect } from 'react';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,
  Box,
  IconButton,
} from '@mui/material';
import { useEffectDespachosFilter } from '../hooks/useFetcDespachoFilter';
import { GrClearOption } from 'react-icons/gr';
import ExportExcel from './ExcelExport';

const FiltroDespachos = ({ setData }) => {
  const [idConsulta, setIdConsulta] = useState('');
  const [idSelect, setIdSelect] = useState('1');
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(0);

  const consultaData = useEffectDespachosFilter(page, idConsulta, idSelect, refresh);

  const consultarDespacho = () => {
    if (!idSelect) return;
    setRefresh((prev) => prev + 1);
  };

  useEffect(() => {
    if (consultaData.data) {
      setData(consultaData.data);
    }
  }, [consultaData.data, setData]);

  const handleClear = () => {
    setIdConsulta('');
    setIdSelect('1');
    setRefresh((prev) => prev + 1);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={8}>
        <TextField
          label="Buscar Orden de Entrega"
          variant="outlined"
          fullWidth
          value={idConsulta}
          onChange={(e) => setIdConsulta(e.target.value)}
        />
      </Grid>
      <Grid item xs={1}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="select-id-label">Tipo</InputLabel>
          <Select
            labelId="select-id-label"
            id="select-id"
            value={idSelect}
            onChange={(e) => setIdSelect(e.target.value)}
            label="Tipo"
          >
            <MenuItem value="1">ODE</MenuItem>
            <MenuItem value="2">FullStar ID</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={1}>
        <Button variant="contained" onClick={consultarDespacho}>
          Consultar
        </Button>
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="clear" onClick={handleClear} color="warning">
          <GrClearOption />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
       <ExportExcel />
      </Grid>
    </Grid>
  );
};

export default FiltroDespachos;