import "./calificacion.css";
import imagenDos from "../../assets/images/imagen-2.jpg"

function Calificacion() {
    return (
        <section id="beneficios2">
        
            <div className="col-sm-12-mb-12-lg-12">
                    
                <div className="row">
                        
                    <form className="col text-center pt-5 mt-3 mb-3">
                        <p className="clasificacion display-1">
                            <input id="radio1" type="radio" name="estrellas" value="5"></input>
                            <label className="blanco" for="radio1">★</label>
                            <input id="radio2" type="radio" name="estrellas" value="4"></input>
                            <label className="blanco" for="radio2">★</label>
                            <input id="radio3" type="radio" name="estrellas" value="3"></input>
                            <label className="blanco" for="radio3">★</label>
                            <input id="radio4" type="radio" name="estrellas" value="2"></input>
                            <label className="blanco" for="radio4">★</label>
                            <input id="radio5" type="radio" name="estrellas" value="1"></input>
                            <label className="blanco" for="radio5">★</label>
                            
                        </p>
                        <p className="text-secondary  display-5 text-orator">calificaciones bajo tu concepto,sera de suma importancia para nuestra mejoria</p>
                    </form>

                </div>
                    
            </div>
                    
        </section>
    );
}

export default Calificacion;