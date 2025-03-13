import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffectGetDespachoDetalle } from '../hooks/useFetchDespachoDetalle';
import { useAuthStore } from '../../../feactures/auth/store/auth';
import { useEffectDespachos } from '../hooks/useFetchDespachos';
import moment from 'moment';

const DespachosDetalle = (props) => {
  const [page, setpage] = useState(1);
  const [despachoid, setDespachoID] = useState(null);
  const [dataTable1, setData] = useState([]);
  const { loading } = useAuthStore();

  useEffect(() => {
    setDespachoID(props.row?.Despacho_ID);
    console.log('Despacho_ID:', props.row?.Despacho_ID);
  }, [props.row]);

  const fechaFormat = (fecha) => {
    if (fecha) {
      return moment(fecha).format('DD/MM/YYYY HH:mm:ss');
    }
    return null;
  };

  const { data, currentPage, totalrow, totalPage, rowsPerPage } = useEffectGetDespachoDetalle(page, despachoid);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setData(data);
      console.log('Data:', data);
    } else {
      setData([]); // Asegurar que dataTable1 sea un array, incluso si data es null o undefined
    }
  }, [data]);

  const columns = [
    { field: 'nombre_estado_tracking', headerName: 'Estado', width: 200 },
    {
      field: 'DT_Status',
      headerName: 'Fecha despacho',
      width: 250,
      renderCell: (params) => {
        return <span>{moment(params.value).format('DD/MM/YYYY HH:mm:ss')}</span>;
      },
    },
    {
      field: 'observacion',
      headerName: 'Observación',
      width: 300,
      valueGetter: (params) => {
        if (params && params.row) {
          return params.row?.estado_observacion ? params.row?.estado_observacion : params.row?.comentario_despacho || '-';
        }
        return '-';
      },
    },
  ];

  return (
    <Box>
      <Box mt={2} style={{ height: 400, width: '100%' }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Box>
        ) : (
          <DataGrid
            rows={dataTable1}
            columns={columns}
            getRowId={(row) => row.id}
            loading={loading}
            pageSize={5}
            rowsPerPageOptions={[5, 10, 20]}
            autoHeight
          />
        )}
      </Box>
    </Box>
  );
};

export default DespachosDetalle;