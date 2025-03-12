import React from 'react';
import { Pagination, Button, Box, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useAuthStore } from '../../auth/store/auth';

export const NavPagination = ({ data }) => {
  const { loading } = useAuthStore();
  const { setpage, totalrow, totalPage, currentPage } = data;

  const nextDisabled = currentPage === parseInt(totalPage);
  const previousDisabled = currentPage === 1;

  const handlePageChange = (event, value) => {
    setpage(value);
  };

  const handlePageSizeChange = (event) => {
    // Assuming SelectRowTable handles the page size change
    // You might need to adjust this based on how SelectRowTable works
    console.log("Page size changed:", event.target.value);
  };

  return (
    <Box display="flex" justifyContent="center" style={{ display: loading ? 'none' : 'flex' }}>
      <Pagination
        count={totalPage}
        page={currentPage}
        onChange={handlePageChange}
        disabled={loading}
        showFirstButton
        showLastButton
      />

      <Box display="flex" alignItems="center" ml={2}>
        <Typography variant="body2" mr={1}>
          Items: {totalrow}
        </Typography>
        <Typography variant="body2" mr={1}>
          Pages: {totalPage}
        </Typography>
        <Typography variant="body2" mr={1}>
          Page: {currentPage}
        </Typography>

        <FormControl variant="outlined" size="small">
          <InputLabel id="page-size-label">Page Size</InputLabel>
          <Select
            labelId="page-size-label"
            id="page-size-select"
            value={10} // Replace with actual page size value
            onChange={handlePageSizeChange}
            label="Page Size"
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};