import { useState } from 'react';
import { notify_error } from '../helpers/utilidades';

const useDescargaReportes = () => {
  const [cargando, setCargando] = useState(false);

  const descargaAceptadas = async () => {
    setCargando(true);
    const nombreReporte = 'propuestasAceptadas';
    const URL = `${import.meta.env.VITE_APP_WS_DEP}/reporteExcelAceptadas/092024/3`;
    console.log(URL);
    try {
      const resp = await fetch(URL);
      if (resp.status === 200) {
        const blob = await resp.blob();

        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = `${nombreReporte}`;
        link.click();
        setCargando(false);
      } else {
        notify_error("Error al descargar el archivo");
        console.log("Error al descargar el archivo");
        setCargando(false);
      }
    } catch (error) {
      setCargando(false);
      notify_error("Error al descargar el archivo");
      return error;
    }
  };

  return { cargando, descargaAceptadas };
};

export default useDescargaReportes;