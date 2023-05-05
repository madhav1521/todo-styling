import React, { useState } from 'react'
import Card from './Card'
import ListCard from './ListCard';
import { NavLink } from 'react-router-dom';

export default function FormInput(props) {
    const [updateList, setUpdateList] = useState('');
    const [list, setList] = useState([]);
    const [isValid, setIsValid] = useState(true);

    const updation = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setUpdateList(event.target.value);
    };

    const submitFormHandler = () => {
        if (updateList.trim().length !== 0) {
            const newItem = { id: Date.now(), name: updateList };
            setList([newItem, ...list]);
            setUpdateList('');
        }
        else if (updateList.trim().length === 0) {
            setIsValid(false);
        }
    };

    const buttonUpdate = (event) => {
        event.preventDefault();
        submitFormHandler();
        console.log(updateList);

    };

    const deleteItem = (id) => {
        const newList = list.filter((item) => item.id !== id.id);
        if (window.confirm(`Are you sure want to delete the Item with Name: ${id.name} ?`)) {
            setList(newList);
        }
    };


    return (
        <>
            <Card className='input-card'>
                <form className={`form-input ${!isValid ? 'invalid' : ''}`} onSubmit={submitFormHandler}>
                    <div className='input-text'>
                        <label htmlFor='listss'>Add Your List</label>
                        <div className='updating-text'>
                            <input id='listss' type='text' value={updateList} onChange={updation} />
                            <div className='update-list-typing'>{updateList}</div>
                        </div>
                    </div>
                    <div className='buttons'>
                        <button type='submit' className='add-btn' onClick={buttonUpdate}>Add</button>
                        <NavLink to='/info'><button type='button' className='next-page'>Add info --{'>'} </button></NavLink>
                    </div>
                </form>
            </Card>
            <br />
            <ListCard list={list} deleteItem={deleteItem} />
        </>
    )
}
