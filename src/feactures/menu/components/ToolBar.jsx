import React from 'react';
import { Button, TextField, InputAdornment, Box } from '@mui/material';
import { useForm } from '../../../hooks/useForm';

export const ToolBar = ({ data }) => {
  const { setpage, totalPage } = data;
  const { formState, onInputChange, topage } = useForm({
    topage: '',
  });

  const changePage = () => {
    if (topage >= 1 && topage <= totalPage) {
      setpage(parseInt(topage));
    } else {
      console.log('fuera de rango de paginas');
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <TextField
        label="N° de pagina"
        variant="outlined"
        size="small"
        name="topage"
        value={topage}
        onChange={onInputChange}
        InputProps={{
          startAdornment: <InputAdornment position="start">@</InputAdornment>,
        }}
        inputProps={{
          maxLength: 7,
          type: 'number'
        }}
        style={{ marginRight: '8px' }}
      />
      <Button variant="contained" color="primary" onClick={changePage}>
        Ir a pag
      </Button>
    </Box>
  );
};