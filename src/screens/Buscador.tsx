import { FaCloudDownloadAlt, FaDownload, FaInfoCircle } from "react-icons/fa";
import { Loading } from "../components/Loading";
import useDescargaReportes from "../hooks/DescargaReportes";

export const Buscador = () => {
    const { cargando, descargaAceptadas } = useDescargaReportes();
  return (
    <>
        {cargando && (
            <Loading />
        )}
      <div className="d-flex ">
        <div className="col-12 border rounded-2 my-4 p-3 shadow">
          <div className="d-flex align-items-center my-4 py-4 px-5 border rounded-2 p-3 shadow">
            <FaCloudDownloadAlt className="h3 d-none d-md-block me-2 text-primary" />
            <h4 className="">Descarga de Archivos:</h4>
          </div>

          <div className="d-flex align-items-center ms-5">
            <div className="d-flex justify-content-center align-items-center gap-3">
              <h5 className="text-secondary m-0">Propuestas Aceptadas:</h5>
              <div className="mt-2">
                <button className="btn btn-success"
                onClick={descargaAceptadas}
                >
                  {" "}
                  <FaDownload className="me-2 h5" /> Descargar
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className=" ms-5">
            <div className="">
              <h5 className="text-secondary m-0">
                Descarga de archivo con rango de fecha:
              </h5>
            </div>
            <div className="row mt-4 align-items-center justify-content-center">
              <div className="col-12 col-md-auto d-flex align-items-center mb-3 mb-md-0 me-md-3">
                <label htmlFor="fechaInicio" className="form-label me-2">
                  Fecha Inicio:
                </label>
                <input type="date" className="form-control" id="fechaInicio" />
              </div>
              <div className="col-12 col-md-auto d-flex align-items-center mb-3 mb-md-0 me-md-3">
                <label htmlFor="fechaFin" className="form-label me-2">
                  Fecha Fin:
                </label>
                <input type="date" className="form-control" id="fechaFin" />
              </div>
              <div className="col-12 col-md-auto">
                <button className="btn btn-primary w-100 w-md-auto">
                <FaDownload className="me-2 h5" />
                  Descargar Archivo Fecha
                </button>
              </div>
              <div className="col-12 col-md-auto">
                <button className="btn btn-primary w-100 w-md-auto">
                <FaDownload className="me-2 h5" />
                  Descargar Archivo Banco
                </button>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex align-items-center my-4 py-4 px-5 border rounded-2 p-3 shadow">
            <FaInfoCircle className="h3 d-none d-md-block me-2 text-primary" />
            <h4 className="">
              Para realizar la búsqueda ingrese el Rut con o sin el digito
              verificador
            </h4>
          </div>
          <form action="" className="mt-5">
            <div className="row align-items-end ms-0 ms-md-3">
              <div className="col-12 col-md-auto d-flex align-items-center mb-3 mb-md-0 me-md-3">
                <label htmlFor="rut" className="form-label h5 me-2">
                  Rut:
                </label>
                <input type="text" className="form-control" id="rut" />
              </div>
              <div className="col-12 col-md-auto mb-3 mb-md-0 me-md-3">
                <button className="btn btn-primary w-100 w-md-auto">
                  Buscar
                </button>
              </div>
              <div className="col-12 col-md-auto">
                <button className="btn btn-secondary w-100 w-md-auto">
                  Limpiar
                </button>
              </div>
            </div>
            <hr />
          </form>
        </div>
      </div>
    </>
  );
};
