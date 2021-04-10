import "./menu.css"
import menuIcon from "../../assets/images/marca.png"

function Menu() {
    return(
        <header className="menu">
            <div className="row fixed-top">
                <div className="banner">
                    <div className="container">
                        <div className="col-sm-6-mb-12-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light ">
                                <div>
                                    <a className="navbar-brand text-white" href="#">
                                        <img src={menuIcon}></img>
                                    </a>
                                </div>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                    
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link text-white subrayado text-jane mr-3" href="#">I N I C I O <span className="sr-only">(current)</span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white subrayado text-jane mr-3"  href="#descripcion">S O M O S</a>
                                        </li>
                    
                                        <li className="nav-item">
                                            <a className="nav-link text-white subrayado text-jane mr-3"  href="#beneficios">B E N E F I C I O S</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link text-white subrayado text-jane mr-3"  href="https://www.hotmart.com/es">C U R S O</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link text-white subrayado text-jane"  href="#derechos1">C O N T A C T O</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Menu;