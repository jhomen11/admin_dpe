// import useAppContext from "../../hooks/useAppContext";
// import Warning from "./../shared/Warning";
import gobfooter from "../img/gob-footer.svg";

const Footer = () => {
//   const { errorServicio } = useAppContext();
  return (
    <>
    {/* 
    
      {errorServicio && (
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <Warning msg="Ha ocurrido un error inesperado, por favor intente mas tarde" />
            </div>
          </div>
        </div>
      )}
    */}
      <div className="footer">
        <div className="container">
          <div className="row d-flex flex-column-reverse align-items-center flex-lg-row">
            <div className="col-2 d-flex justify-content-center align-items-center p-2">
              <a className="footer-logo" href="https://www.minsal.cl/">
                <img
                  className="img-footer"
                  src={gobfooter}
                  alt="logo Ministerio de Salud"
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-8 d-flex flex-column">
              <p className="text-center m-0 p-0">
                {" "}
                © 2023 Copyright FONASA, todos los derechos reservados
              </p>
              <p className="text-center m-0 p-0">
                Hecho con{" "}
                <span className="text-danger">
                  <i className="bi bi-heart-fill">
                    {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg> */}
                  </i>{" "}
                </span>
                por FONASA
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import React from "react";
// function Footer() {
//   return (
//     <>
//     <div className="footer pt-2 pb-2 ">
//     <div className="container">
//       <div className="row  ">
//         <div className="col-md-12  text-center">
//           <p className=""> © Copyright FONASA, todos los derechos reservados</p>

//           <p className=" ">
//             Hecho con{" "}
//             <i className="bi bi-balloon-heart-fill text-danger">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="16"
//                 height="16"
//                 fill="currentColor"
//                 className="bi bi-balloon-heart-fill text-danger"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
//                 />
//               </svg>
//             </i>{" "}
//             por FONASA
//           </p>
//         </div>
//       </div>
//       </div>
//       </div>
//     </>
//   );
// }
// export default Footer;