import "./caja.css";
import videoUno from "../../assets/videos/videoUno.mp4";
import videoDos from "../../assets/videos/videoDos.WEBM"

function Caja() {
    return (
        <section id="s1" className="contenedor d-flex align-items-center">
            <div className="row z-index-1 mx-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-7">
                            <h1 className="text-white text-bison">Tu mejor identidad</h1>
                            <h5 className="text-white text-orator">Comienza  con  esta  gran  oportunidad  idónea  para  elevar  tanto  tu  potencial  como  el  de  tu  marca</h5>
                        </div>
                        <div className="row">
                            <div className="col-sm-6-mb-12-lg-12 display-1">
                                <button type="button" className="btn btn-danger btn btn-primary-b btn btn-outline-danger border-b btn-lg text-agency text-white" data-toggle="modal" data-target="#modalTest">
                                    INICIAR CURSO
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <video className="videoBg" muted loop autoPlay={true}>
                <source src={videoUno} type="video/mp4"></source>
                <source src={videoDos} type="video/webm"></source>
            </video>


            <div className="modal fade" id="modalTest" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">REGISTRARSE</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-row">
                                    <div className="col ">
                                        <div className="form-group">
                                            <label htmlFor="nombre">Tu Nombre</label>
                                            <input type="text" className="form-control" id="nombre" placeholder="Nombre"></input>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="apellido">Tu Apellido</label>
                                            <input type="text" className="form-control" id="apellido" placeholder="Apellido"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="escribe tu correo ">Correo Electronico</label>
                                            <input type="text" className="form-control" id="escribe tu correo" placeholder="Escribe tu correo"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="escribe tu contraseña">Contraseña</label>
                                            <input type="text" className="form-control" id="escribe tu contraseña" placeholder="Escribe tu contraseña "></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="repite la contraseña">Contraseña</label>
                                            <input type="text" className="form-control" id="repite la contraseña" placeholder="Confirma tu contraseña "></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row ">
                                    <div className="col ">

                                        <div className="form-group form check ">
                                            <input type="checkbox" className="nivel" id="terms form-check-input"></input>
                                            <label className="form-check-label" className="button-terms-conditions" htmlFor="terms"><p className="text-danger">ACEPTA TÉRMINOS Y CONDICIONES</p></label>
                                        </div>
                                    </div>

                                    <button type="submit" className="btn btn-danger btn-block">REGISTRARSE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Caja;