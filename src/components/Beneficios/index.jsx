import "./beneficios.css";

function Beneficios() {
    return (
        <section id="col-sm--mb-12-lg-12" className="text-benefi">
        <a name="beneficios"></a>
              
            <div className="container">
                <div className="row py-5">
                    <div className="col text-center">
                        <h1 className="display-1 text-bison my-2 mb-3">BENEFICIOS</h1>
                    </div>
                </div>
      
                <div className="row justify-content-center aling-items-center text-white mt-5 pb-5">
                    <div className="col-12 col-md-3 text-center">
                        <i className="fas fa-tools fa-4x fa-lg mx-2 rounded-circle border-y border-white" ></i>
                        <p className="text-orator py-4">Conoce herramientas para el manejo de tu marca</p>
                    </div>
      
                    <div className="col-12 col-md-3 text-center">
                        <i className="far fa-lightbulb fa-5x fa-lg mx-2 rounded-circle border-y border-white" ></i>
                        <p className="text-orator py-4">Haz que tu emprendimiento sea reconocido</p>
                    </div>
      
                    <div className="col-12 col-md-3 text-center">
                        <i className="fas fa-laptop fa-4x fa-lg mx-2 rounded-circle border-y border-white" ></i>
                        <p className="text-orator py-4">obtén el control de tus medios</p>
                    </div>
      
                    <div className="col-12 col-md-3 text-center">
                        <i className="fas fa-shopping-cart fa-4x fa-lg mx-2 rounded-circle border-y border-white" ></i>
                        <p className="text-orator py-4">Aumenta tus ventas</p>
                    </div>
                </div>
            </div>   
        </section>
    );
}

export default Beneficios;