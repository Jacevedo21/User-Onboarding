import React from 'react'

export default function Form(props) {
    const {
        values,
        submit,
        inputChange,
        checkboxChange,
        disabled,
        errors,
    } = props 

    console.log(values, 'moo')
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    const onCheckboxChange = evt => {
       const name = evt.target.name
    //    console.log('ooga ooga', name)
       const checked = evt.target.checked
    //    console.log(checked)
        checkboxChange(name, checked)
    }

    const onInputChange = evt => {
        const name = evt.target.name
        console.log('wooga wooga', name)
        const value = evt.target.value
        inputChange(name, value)
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
        <div>
            <h2>Input Form</h2>

            <button disabled={disabled}>Submit</button>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                <div>{errors.TOS}</div>
            </div>
        </div>

        <div className='form-group inputs'>
            <h4>Information</h4>

            <label> Name&nbsp; 
                <input 
                value={values.name}
                onChange={onInputChange}
                name='name'
                type='text'          
                />
            </label>

            <label>Email
                <input 
                value={values.email}
                onChange={onInputChange}
                name='email'
                type='text'                
                />
            </label>

            <label>Password
                <input 
                type='text'
                name='password'
                value={values.password}
                onChange={onInputChange}
                />
            </label>

            <label>TOS
                <input 
                type='checkbox'
                name='TOS'
                checked={values.TOS === true}
                onChange={onCheckboxChange}
                />
            </label>
        </div>
        </form>
    )
}