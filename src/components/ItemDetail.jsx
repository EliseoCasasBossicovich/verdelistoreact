import ItemCount from "./ItemCount";
const ItemDetail =({productos}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos`);
    };

    return (
        <article className="card productos__listado" style={{width: "18rem"}}>
            <div className="col-md-5 text-center mt-2">
                <img className="w-100" src={productos.img} alt={productos.name} />
            </div>
            <div className="mt-2 col-md-7">
                <div className="col-md-12">
                    <h1>{productos.name}</h1>
                </div>
                <div className="col-md-12">
                    <h3>${productos.price}</h3>
                </div>
                <div className="col-md-12">
                    <p>{productos.description}</p>
                </div>
            </div>
            <ItemCount inicial={1} onAdd={onAdd} />
    </article>
    );
}

export default ItemDetail;