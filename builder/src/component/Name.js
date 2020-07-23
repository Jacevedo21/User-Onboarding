import React from 'react'

export default function name({ details }) {
// console.log('details test', details)
    return (
        <div className='forms container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>        

        </div>
    )
}
