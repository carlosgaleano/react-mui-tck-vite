import React, { useState, useEffect } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useEffectDespachos } from '../hooks/useFetchDespachos';
import Loading from '../../menu/components/Loading';
import { NavPagination } from '../../menu/components/NavPagination';
import DespachosDetalle from './DespachosDetalle';
import { TbListDetails } from 'react-icons/tb';
import ExcelReader from './ExcelReader';
import FiltroDespachos from './FiltroDespachos';
import { useAuthStore } from '../../../feactures/auth/store/auth';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const DataGridDespachos = () => {
  const [modalShow, setModalShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [dataTable1, setData] = useState([]);
  const { loading } = useAuthStore();
  const [page, setpage] = useState(1);

  const { data, currentPage, totalrow, totalPage, rowsPerPage } = useEffectDespachos(page, null, null);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [data]);

  const showData = (row) => {
    setSelectedRow(row);
    setModalShow(true);
  };

  const columns = [
    { field: 'sap_id', headerName: 'Orden de Entrega', width: 150 },
    { field: 'Despacho_ID', headerName: 'Id FullStar', width: 150 },
    { field: 'Nombre', headerName: 'Titulo', width: 200 },
    { field: 'Direccion', headerName: 'Dirección', width: 250 },
    {field: 'fecha_st',
    headerName: 'Fecha despacho',
    type: 'dateTime',
    valueGetter: (params) => {
      if (params.row && params.row.fecha_st) {
        return new Date(params.row.fecha_st);
      }
      return null; // Or some default value
    },
    sortable: true,
  },
    { field: 'estado_out', headerName: 'Estado', width: 150 },
    {
      field: 'actions',
      headerName: 'Detalle',
      width: 100,
      renderCell: (params) => (
        <Button onClick={() => showData(params.row)}>
          <TbListDetails />
        </Button>
      ),
    },
  ];

  return (
    <>
      <Dialog open={modalShow} onClose={() => setModalShow(false)} maxWidth="md" fullWidth>
        <DialogTitle>Detalle del Despacho</DialogTitle>
        <DialogContent>
          {selectedRow && <DespachosDetalle row={selectedRow} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setModalShow(false)}>Cerrar</Button>
        </DialogActions>
      </Dialog>

      <FiltroDespachos setData={setData} />

      <>
        <h1>Lector de Excel</h1>
        <ExcelReader />
      </>

      <p className="d-inline ml-2">
        <i className="bi bi-bar-chart text-info" style={{ fontSize: 40 }}></i>
      </p>

      <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={dataTable1}
        columns={columns}
        getRowId={(row) => row.Despacho_ID} // Ensure a unique ID
        loading={loading}
        components={{
            LoadingOverlay: Loading,
            Toolbar: GridToolbar,
        }}
        pagination
        pageSize={rowsPerPage}
        rowsPerPageOptions={[rowsPerPage]}
        page={currentPage - 1}
        onPageChange={(newPage) => setpage(newPage + 1)}
    />
      </div>

      <NavPagination data={{ setpage, totalrow, totalPage, currentPage }} />
    </>
  );
};

export default DataGridDespachos;