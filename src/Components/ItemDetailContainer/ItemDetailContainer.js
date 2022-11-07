import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { GetItemFromBE } from "../../MockBE/mockBE";
import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetailContainer() {

    const [product, setProduct] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        GetItemFromBE(id).then((itemsBE) => {
            setProduct(itemsBE);
        });
    }, [id]);

    return (
        <div className="detail">
            <div className="detail-img">
                <img src={product.imagen} alt="Libro" />
            </div>
            <div className="detail-description">
                <h2>{product.titulo}</h2>
                <p>Autor: {product.autor}</p>
                <p>Año publicación: {product.año}</p>
                <p>Cantidad de páginas : {product.paginas}</p>
                <p>Idioma: {product.idioma}</p>
                <h4>$ {product.precio}</h4>
                <ItemCount />
            </div>
        </div>
    )
}

export default ItemDetailContainer;