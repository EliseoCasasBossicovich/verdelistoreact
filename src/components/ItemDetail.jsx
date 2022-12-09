
const ItemDetail =({Item}) => {
    return(
        <article className="card productos__listado" style={{width: "18rem"}}>
            <div className="col-md-5 text-center mt-2">
                <img className="w-100" src={Item?.img} alt={Item.name} />
            </div>
            <div className="mt-2 col-md-7">
                <div className="col-md-12">
                    <h1>${Item?.name}</h1>
                </div>
                <div className="col-md-12">
                    <h2>${Item?.price}</h2>
                </div>
                <div className="col-md-12">
                    <p>${Item?.description}</p>
                </div>
            </div>
    </article>
    );
}

export default ItemDetail;