import {doc, getDoc, getFirestore } from 'firebase/firestore'
import { useEffect } from 'react'

const ProductList = () => {
    useEffect (() => {
        const data = getFirestore();
        const productsRef = doc(data, 'FrutasxPeso1','FrutassxPeso1');
        getDoc (productsRef)
        .then((snapshot) => {
            if (snapshot.exists) {
                console.log('snapshot:', snapshot)
            }
        })
    }, []);

    return(
        <h3>ProductList</h3>
    )
} 
export default ProductList;