import Item from "../components/Item";

const ItemList = ({ productos }) =>{
    return (
        <section className="row">
        {productos.map((item) => (
        <Item name={item?.name} description={item?.description} price={item?.price} img={item?.img}  id={item?.id} />
        ))}
    </section>
    );
}

export default ItemList;