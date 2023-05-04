import React, { useState } from 'react'
import Card from './Card'
import ListCard from './ListCard';

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
            setList([ newItem,...list]);
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
        if(window.confirm(`Are you sure want to delete the Item with ID ${id.name} ?`)) {
            setList(newList);
        }
      };

      
    return (
        <>
            <Card className='input-card'>
                <form className={`form-input ${!isValid? 'invalid' : ''}`} onSubmit={submitFormHandler}>
                    <label>Add Your List</label>
                    <div className='update-list-typing'>{updateList}</div>
                    <input type='text' value={updateList} onChange={updation} />
                    <button type='submit' className='add-btn' onClick={buttonUpdate}>Add</button>
                </form>
            </Card>
            <br />
            <ListCard list={list} deleteItem={deleteItem} />
        </>
    )
}
