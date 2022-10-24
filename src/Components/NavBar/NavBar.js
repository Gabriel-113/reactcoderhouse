import "./NavBar.css";
import Logo from "../CardWidgets/CardWidgets";

function NavBar() {
    return (
        <>
            <div className="barraNavegacion">
                <ul className="lista">
                    <Logo />
                    <li className="categoria">Inicio</li>
                    <li className="categoria">Novedades</li>
                    <li className="categoria">Libros</li>
                    <li className="categoria">Nosotros</li>
                </ul>
            </div>
        </>
    )
}

export default NavBar;