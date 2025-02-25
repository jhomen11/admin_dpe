import { FaTrashAlt } from "react-icons/fa";

export const TblAceptadas = () => {
  return (
    <>
      <div className="my-4">
        <h4 className="text-center m-0 text-secondary">Listado Usuarios DPE</h4>
      </div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Run/Rut</th>
      <th scope="col">Nombre</th>
      <th scope="col">Estado</th>
      <th scope="col">Archivos Revisión</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>15175920-3</td>
      <td>ABRAHAM LORENZO SALAS OPAZO</td>
      <td>Disponible</td>
      <td>Sin Información</td>
      <td className="ps-3"><button className="btn btn-danger btn-sm"><FaTrashAlt className=""/></button></td>
    </tr>
    <tr>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </>
  );
};
