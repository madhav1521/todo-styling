import React from 'react'
import Card from '../Components/Card'


const ProductLists = (props) => {
    
    return (
        <>
            <ul className='unordered-lists'>
        <Card className='list-card'>
                {props.products.map((product,index) => (
                    <li key={index}>{product.name} : Costs {product.cost} Rupees </li>
                ))}
</Card>
            </ul>
        </>
    )
}
export default ProductLists;