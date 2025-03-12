import React, { useState, useEffect } from 'react';
import {
  Modal,
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@mui/material';
import { useEffectGetDespachoDetalle } from '../hooks/useFetchDespachoDetalle';
//import moment from 'moment';

const DespachosDetalle = (props) => {
  const [page, setpage] = useState(1);
  const [pending, setpending] = useState(true);
  const [despachoid, setDespachoID] = useState(null);

  useEffect(() => {
    setDespachoID(props.row?.Despacho_ID);
  }, [props.row]);

  const { data, currentPage, totalrow, totalPage, rowsPerPage } = useEffectGetDespachoDetalle(page, setpending, despachoid);

  const fechaFormat = (fecha) => {
  //  return moment(fecha).format('DD-MM-YYYY HH:mm');
  return fecha;
  };

  const columns = [
    {
      name: 'Estado',
      selector: (row) => row?.nombre_estado_tracking,
    },
    {
      name: 'Fecha despacho',
      selector: (row) => fechaFormat(row?.DT_Status),
      format: 'datetime',
      sortable: true,
    },
    {
      name: 'Observación',
      selector: (row) => (row?.estado_observacion ? row?.estado_observacion : row?.comentario_despacho || '-'),
    },
  ];

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%', // Adjust as needed
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="contained-modal-title-vcenter" variant="h6" component="h2">
          Tracking de la guia {props.row?.sap_id + '-' + props.row?.Despacho_ID}
        </Typography>
        <Box mt={2}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.name}>{column.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {pending ? (
                  <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : (
                  data?.map((row) => (
                    <TableRow key={row.id}>
                      {columns.map((column) => (
                        <TableCell key={column.name}>{column.selector(row)}</TableCell>
                      ))}
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button onClick={props.onHide}>Close</Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DespachosDetalle;