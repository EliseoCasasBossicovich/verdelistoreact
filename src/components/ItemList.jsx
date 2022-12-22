import Item from "./Item";

const ItemList = ({productos}) => {
return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', flexWrap:'wrap'}}>
    {productos.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} price={item.price} img={item.img} />
        ))
    }
    </div>
    )
}

export default ItemList;