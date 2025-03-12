import React from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

export const SelectRowTable = () => {
  return (
    <FormControl variant="outlined" size="small" style={{ minWidth: 120, marginLeft: '8px' }}>
      <InputLabel id="row-select-label">N° Line</InputLabel>
      <Select
        labelId="row-select-label"
        id="row-select"
        label="N° Line"
      >
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </FormControl>
  );
};