import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import Data from "../productos.json";


function ItemDetailContainer() {
const [producto, setProducto] = useState({});
const { id } = useParams();

useEffect(() => {
    const getProductos = new Promise(resolve => {
        setTimeout(() => {
            resolve(Data)
        }, 2000);
    });
    getProductos.then(res => setProducto(res.find(item => item.id === id)));
}, [id])
    return(
        <ItemDetail producto={producto}/>
    )
}
export default ItemDetailContainer;