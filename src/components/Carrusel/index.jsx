import "./carrusel.css";
import imagenDos from "../../assets/images/imagen-2.jpg"

function Carrusel() {
    return (
        <section className="col-sm-12-mb-12-lg-12 carrusel-min">
            <div className="row">
                <div className="col medidas">
                    <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">      
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                        </ol>
        
                        <div className="carousel-inner ">

                            <div className="carousel-item active h-5 ">                               
                                <img src={imagenDos} className="d-block w-100 " alt="..."></img>
                                <div className="carousel-caption  d-md-block">  
                                    <h1 className="text-white-50  display-4 mb-5">“Imagonix es avance e innovación”</h1>        
                                    <h5 className="display-4">PAULA ANDREA RUIZ</h5>
                                    <p>ESTUDIANTE/FUNDADOR DE IMAGONIX.</p>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption  d-md-block">
                                    <h1 className="text-white-50  display-4 mb-5">“Este proyecto te ayudará a impulsar tu marca.”</h1> 
                                    <h5 className="display-4">MARIA ANDREA MUÑOZ</h5>
                                    <p>ESTUDIANTE/FUNDADOR DE IMAGONIX.</p>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."></img>
                                <div className="carousel-caption  d-md-block">
                                    <h1 className="text-white-50  display-4 mb-5">“En Imagonix encontraras el crecimiento que tu imagen corporativa necesita.”</h1>         
                                    <h5 className="display-4">ALEJANDRO ALVAREZ </h5>                 
                                    <p>ESTUDIANTE/FUNDADOR DE IMAGONIX.</p>
                                </div>
                            </div>

                            <div className="carousel-item ">
                                <img src={imagenDos} className="d-block w-100" alt="..."></img> 
                                <div className="carousel-caption  d-md-block">
                                    <h1 className="text-white-50  display-4 mb-5">“Toma esta oportunidad para aumentar tu reconocimiento en los medios digitales.”</h1> 
                                    <h5 className="display-4">SNEIDER LONDOÑO</h5>
                                    <p>ESTUDIANTE/FUNDADOR DE IMAGONIX.</p>
                                </div>
                            </div>

                        </div>

                        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div> 
            </div>
        
        </section>
    );
}

export default Carrusel;