import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const {categoria, item} = useParams();
    return(
        <h1>Detalle item {categoria}/{item}</h1>
    );
}
export default ItemDetailContainer;