import "./NavBar.css";
import Logo from "../Logo/Logo";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <div className="barraNavegacion">
                <ul className="lista">
                    <Link to="/"><Logo /></Link>
                    <Link to="/" className="categoria">Inicio</Link>
                    <Link to="/category/nuevos" className="categoria">Nuevos</Link>
                    <Link to="/category/vendidos" className="categoria">Mas vendidos</Link>
                    <Link to="/category/recomendados" className="categoria">Recomendados</Link>
                    <CartWidget />
                </ul>
            </div>
        </>
    )
}

export default NavBar;