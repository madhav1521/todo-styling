import Card from '../Components/Card';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react'
import ErrorModal from './ErrorModal';

export default function ProductInput(props) {
    const [enterProduct, setEnterProduct] = useState('');
    const [enterCost, setEnterCost] = useState('');
    const [error, setError] = useState();


    const updatedProductHandler = event => {
        setEnterProduct(event.target.value);
    }
    const updatedCostHandler = event => {
        setEnterCost(event.target.value);
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        if(enterProduct.trim().length === 0 || enterCost.trim().length === 0) {
            setError({title:'Invalid Input', message:'Please enter Fields'});
            return;
        }
        if(+enterCost < 1) {
            setError({title:'Invalid Cost', message:'Please enter valid cost (>0)'});
            return;
        }
        props.addProducts(enterProduct, enterCost )
        setEnterProduct('');
        setEnterCost('');
    }
    const errorHandler = () => {
        setError(null);
    }
  return (
    <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
        <Card className='input-card'>
                <form className={`form-input`} onSubmit={onSubmitHandler}>
                    <div className='input-text'>
                        <label htmlFor='product'>Add Your Product</label>
                        <div className='updating-text'>
                            <input id='product' type='text' value={enterProduct} onChange={updatedProductHandler}  />
                            <div className='update-list-typing'>{enterProduct}</div>
                        </div>
                    </div>
                    <div className='input-text'>
                        <label htmlFor='cost'>Cost (in Rupees) </label>
                        <div className='updating-text'>
                            <input id='cost' type='number' value={enterCost} onChange={updatedCostHandler}  />
                            <div className='update-list-typing'>{enterCost}</div>
                        </div>
                    </div>

                    <div className='buttons'>
                        <button type='submit' className='add-btn' >Add</button>
                        <NavLink to='/'><button type='button' className='next-page'>Go Back {'<'}-- </button></NavLink>
                    </div>
                </form>
            </Card>
    </>
  )
}
