import "./Item.css";
import ButtonDetail from "../ButtonDetail/ButtonDetail";
import { Link } from "react-router-dom"

function Item({ product }) {

    let pathDetail = `/detail/${product.id}`

    return (
        <div className="card">
            <div className="card-img">
                <img src={product.imagen} alt="Libro" />
            </div>
            <div className="card-principal">
                <h2>{product.titulo}</h2>
                <h3>{product.autor}</h3>
                <h4 className="card-precio">$ {product.precio}</h4>
            </div>
            <Link to={pathDetail} ><ButtonDetail detail="Detalle" /></Link>
        </div>
    )
}

export default Item;