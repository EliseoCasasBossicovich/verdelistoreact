import Item from "./Item";

const ItemList = (productos) => {
    return (
        <div>
            {productos.map((item) => (
        <Item name={item.name} price={item.price} img={item.img} />
        ))
        }
        </div>
    )
}

export default ItemList;