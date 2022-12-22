import ItemCount from "./ItemCount";
// import { Link } from "react-router-dom";
const ItemDetail =({producto}) => {
    const onAdd = (cantidad) => {
        alert(`Has agregado ${cantidad} productos`);
    };

    return (
        <article className="card productos__listado" style={{width: "18rem"}}>
            
            <div className="col-md-5 text-center mt-2">
                <img className="w-100" href={producto?.img} alt={producto?.name} />
            </div>
            <div className="mt-2 col-md-7">
                
                    <div className="col-md-12">
                        <h2>{producto?.name}</h2>
                    </div>
                <div className="col-md-12">
                    <h3>${producto?.price}</h3>
                </div>
                <div className="col-md-12">
                    <p>{producto?.description}</p>
                </div>
            </div>
            <ItemCount inicial={1} onAdd={onAdd} />
    </article>
    );
}

export default ItemDetail;

// import ItemCount from "./ItemCount";
// import { Link } from "react-router-dom";
// const ItemDetail =({data, id}) => {
//     const onAdd = (cantidad) => {
//         alert(`Has agregado ${cantidad} productos`);
//     };
// // console.log('Producto: ', data);
//     return (
//         <article className="card productos__listado" style={{width: "18rem"}}>
            
//             <div className="col-md-5 text-center mt-2">
//                 <img className="w-100" href={data?.img} alt={data?.name} />
//             </div>
//             <div className="mt-2 col-md-7">
//                 <Link to={`/item/${id}`} >
//                     <div className="col-md-12">
//                         <h2>{data?.name}</h2>
//                     </div>
//                 </Link>
                
//                 <div className="col-md-12">
//                     <h3>${data?.price}</h3>
//                 </div>
//                 <div className="col-md-12">
//                     <p>{data?.description}</p>
//                 </div>
//             </div>
//             <ItemCount inicial={1} onAdd={onAdd} />
//         </article>
//     );
// }

// export default ItemDetail;