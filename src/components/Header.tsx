import logofonasa1 from "../img/logofonasa1.svg";

export const Header = () => {
  return (
    <>
    <div className="navbar navbar-light pt-4 bg-primary mb-5 header_fonasa">
        <div className="container">
            <div className="row">
                <div>
                <img className="img-header" src={logofonasa1} alt="Logo Fonasa" />
                </div>
            </div>
        </div>
    </div>
    </>
     
  )
}
