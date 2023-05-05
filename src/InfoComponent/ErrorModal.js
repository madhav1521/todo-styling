import React from 'react'

export default function ErrorModal(props) {
    return (
        <>
            <div className='overlay' onClick={props.onConfirm} ></div>
            <div className='error-popup'>
                <div>
                    <header >{props.title}</header>
                    <div className='message'>{props.message}</div>
                </div>
                <footer>
                    <button onClick={props.onConfirm}>OKAY</button>
                </footer>
            </div>
        </>
    )
}
