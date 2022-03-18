import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>Menu
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <Link to='/'><a  className="nav-link active">Home</a></Link>
                        </li>
                        <li>
                            <Link to='/Destino'><a  className="nav-link active">Destino</a></Link>
                        </li>
                        <li>
                            <Link to='/Promocoes'><a  className="nav-link active">Promoções</a></Link>
                        </li>
                        <li>
                            <Link to='/Contato'><a  className="nav-link active">Contato</a></Link>
                        </li>
                        <li>
                            <Link to='/Cadastro'><a className="nav-link active">Cadastre-se</a></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default NavBar;