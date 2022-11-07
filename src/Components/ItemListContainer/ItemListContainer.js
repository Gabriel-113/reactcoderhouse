import "./ItemListContainer.css";
import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import GetItemsFromBE, { GetItemsFromBEByCategory } from "../../MockBE/mockBE";
import { useParams } from "react-router-dom";
import DisplayFlex from "../DisplayFlex/DisplayFlex";

function ItemListContainer() {
    const [productsList, setProductsList] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
    if (categoryid){
        GetItemsFromBEByCategory(categoryid).then((itemsBE) => {
            setProductsList(itemsBE)
        });
    } else {
        GetItemsFromBE().then((itemsBE) => {
            setProductsList(itemsBE);
        });
    }
    }, [categoryid]);

    return (
        <div>
            <DisplayFlex>
                <ItemList productsList={productsList} />
            </DisplayFlex>
        </div>
    )}

export default ItemListContainer;