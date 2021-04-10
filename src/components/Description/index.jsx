import "./descripcion.css";
import videoMarca from "../../assets/videos/videomarca.mp4";

function Descripcion() {
    return (
        <section>
            <a name="descripcion"></a>
            <div className="container text-center">
                <div className="row">
                    <div className="col-12 col-lg-6 text-center">
            
                        <div className="d-flex justify-content-center">
                            <video className="mt-3 mb-4 pb-lg-5 img-fluid" controls>
                            <source src={videoMarca} type="video/mp4"></source>
                            </video>
                        </div>
                    </div>
                    <div className="col text-center mt-lg-5">
                        <h1 className="display-5 text-bison text-white mt-lg-5"> DESCRIPCIÓN DEL CURSO</h1>
                        <br></br>
                        <p className="text-orator text-white">En este curso podras adquirir conocimiento de digitales para  tu  marca, producto o servicio implementando herramientas faciles para el amplio manejo de tu identidad en las redes sociales. 
                        Entender y comprender la importancia de tener una buena identidad corporativa para identificar el significado de Marca.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Descripcion;