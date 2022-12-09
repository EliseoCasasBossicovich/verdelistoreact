import Item from "../components/Item";

const ItemList = ({ productos }) =>{
    return (
        <section className="row">
        {productos.map((item) => (
        <Item name={item?.name} price={item?.price} img={item?.img} />
        ))}
    </section>
    );
}

export default ItemList;