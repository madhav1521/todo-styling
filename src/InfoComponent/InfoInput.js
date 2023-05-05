import React, { useState } from 'react'
import ProductLists from './ProductLists';
import ProductInput from './ProductInput';
import ErrorModal from './ErrorModal';


export default function InfoInput() {
const [printProduct, setPrintProduct] = useState([]);

const onAddProduct = (pName, pCost) => {
   const newProduct = {name: pName, cost: pCost, id: Math.random().toString()}
     setPrintProduct ((prevProductList) => {
        return [...prevProductList, newProduct ];
    });
};
    return (
        <>
            
            <ProductInput addProducts = {onAddProduct} />
            <br />
            <ProductLists products={printProduct} />
        </>
    )
}
