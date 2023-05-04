import React, { useState } from 'react'
import Card from './Card'

export default function ListCard(props) {
    return (
        <>
            <div className='list-div'>
                {props.list.map((item) => (
                    <Card className='list-card'>
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <button type='button' className='delete-list' onClick={() => { props.deleteItem(item) }} >Delete List</button>
                        </li>
                    </Card>
                ))}
            </div>
        </>
    )
}
