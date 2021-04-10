import "./derechos.css";
import marcaDos from "../../assets/images/marca2.png"

function Derechos() {
    return (
        <section className="rights">
            <a name="derechos1"></a>
            <div className="container6-sm-6-mb-12-lg-12">
                <div className="container">
                    <div className="row text-center">
                        <div className="col -sm-6-mb-12-lg-12 pt-5 pb-2">
                            <img src={marcaDos} alt="marca 2" className="derechos-img"></img>
                        </div>
                    </div>

                    <div className="row text-center mb-4 text-muted">
                        <div className="col border-right">
                            <p>Localidad Cl.55#57-60</p>
                            <p>Medellín - Colombia</p>
                            <p>Telefono: +57 451 2230</p>
                        </div>
                        <div className="col pt-3 border-right">
                            <p>Correo: </p>
                            <p>contactoonix441@gmail.com</p>
                        </div>
                        <div className="col">
                            <p>Nuestras redes sociales</p>
                            <a href="https://www.facebook.com/Imagonix">
                                <i className="fab fa-facebook-f text-white text-muted mx-2 rounded-circle border-d border-white"></i>
                            </a>
                            <a href="https://twitter.com/OnixAgenciaCol">
                                <i className="fab fa-twitter text-white text-muted mx-2 rounded-circle border-d border-white"></i>
                            </a>
                            <a href="https://www.instagram.com/imagonix4/">
                                <i className="fab fa-instagram text-white text-muted mx-2 rounded-circle border-d border-white"></i>
                            </a>
                            <a href="https://www.hotmart.com/es">
                                <i className="fas fa-fire-alt text-white text-muted mx-2 rounded-circle border-d border-white"></i>
                            </a>
                        </div>
                    </div>

                    <div className="row text-center text-muted">
                        <div className="col mb-2 pb-3">
                            <p>| 2020 todos los derechos reservados |</p>
                            <p>IMAGONIX AGENCIA S.A | Desing Imagonix</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Derechos;