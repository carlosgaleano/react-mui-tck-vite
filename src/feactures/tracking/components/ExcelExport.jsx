import React, { useState, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { FaRegFileExcel } from 'react-icons/fa';
import { Button, Dialog, DialogTitle, DialogContent, CircularProgress, Typography } from '@mui/material';
import { toast } from 'react-toastify';
import { useFetDespachoDataExcel } from '../hooks/useFetDespachoDataExcel';

const ExportExcel = (filtro = null) => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('Obteniendo datos...');
  const [dataExcel, setDataExcel] = useState(null);
  const [refresh, setRefresh] = useState(0);
  const isGenerating = useRef(false);

  const getDataExcel = useFetDespachoDataExcel(refresh);

  const handleExport = () => {
    console.log('Botón exportar pulsado');
    setShowModal(true);
    setMessage('Obteniendo datos...');
    setRefresh((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('Efecto ejecutado con getDataExcel:', getDataExcel);

    if (getDataExcel.loading) {
      setMessage('Cargando datos...');
    } else if (getDataExcel.error) {
      console.error('API Error:', getDataExcel.error);
      toast.error(`Error: ${getDataExcel.error.message}`);
      setShowModal(false);
    } else if (getDataExcel.data && !isGenerating.current) {
      console.log('Datos obtenidos, generando Excel...');
      isGenerating.current = true;
      setDataExcel(getDataExcel.data);
      generateExcel(getDataExcel.data);
    }
  }, [getDataExcel]);

  const generateExcel = (data) => {
    if (!data || data.length === 0) {
      toast.error('No hay datos para exportar.');
      setShowModal(false);
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Despacho');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    saveAs(blob, 'despacho.xlsx');
    setShowModal(false);
    isGenerating.current = false;
  };

  return (
    <>
      <Button variant="contained" color="success" onClick={handleExport}>
        <FaRegFileExcel />
      </Button>

      <Dialog open={showModal} onClose={() => setShowModal(false)}>
        <DialogTitle>Generando Excel</DialogTitle>
        <DialogContent>
          {getDataExcel.loading && <CircularProgress />}
          <Typography>{message}</Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ExportExcel;