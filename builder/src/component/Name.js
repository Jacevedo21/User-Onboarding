import React from 'react'

export default function name({ details }) {

    return (
        <div className='forms container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email}</p>
            <p>Password: {details.password}</p>            
        </div>
    )
}
