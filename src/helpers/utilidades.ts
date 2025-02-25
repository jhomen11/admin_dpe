import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notify = (mensaje: string) => {
    toast.success(mensaje, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}

export const notify_error = (mensaje: string) => {
    toast.error(mensaje, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
}



// * FORMATEAR CANTIDAD 
// export const formatearCantidad = (cantidad) => {
//     return cantidad.toLocaleString("es-CL", {
//       style: "currency",
//       currency: "CLP",
//     });
//   };