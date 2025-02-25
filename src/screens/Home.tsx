import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { BannerTitulo } from "../components/BannerTitulo";
import { Buscador } from "./Buscador";
import { ToastContainer } from "react-toastify";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="container">
        <BannerTitulo />
        <Buscador />
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};
