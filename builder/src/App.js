import React, { useState, useEffect } from 'react';
import Form from './component/Form'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './component/formSchema'
import Name from './component/Name'
import './App.css';

const initialFormValues = {
  Name: '',
  Email: '',
  Password: '',
  TOS: false,

}
const intialFormError = {
  Name: '',
  Email: '',
  Password: '',
  TOS: '',
}

const initialForm = []
const initialDisabled = true


function App() {
  // array of form objects
  const [data, setData] = useState(initialForm)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(intialFormError)
  const [disabled, setDisabled] = useState(initialDisabled)


  useEffect(() => {

    const getForm = () => {
      axios.get('https://reqres.in/api/users')
        .then(res => {
          // console.log(res)
          setData(res.data.data)
          console.log(res.data.data, 'Wrong?')
        })
        .catch(err => {
          debugger
        })
    }

    getForm()

  }, [])
  // getForm()


  const postNewForm = newForm => {
    axios.post('https://reqres.in/api/users', newForm)
      .then(res => {
        console.log('post', res)
        setData([res.data, ...data])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        debugger
      })
  }

  const inputChange = (name, value) => {
      
    yup
      .reach(formSchema, name)
      //we can then run validate using the value
      .validate(value)
      // if the validation is successful, we can clear the error message
      .then(valid => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        })
      })
      /* if the validation is unsuccessful, we can set the error message to the message 
        returned from yup (that we created in our schema) */
      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
    console.log('test =>', name, value)
  }


  const checkboxChange = (name, isChecked) => {
    console.log('ook ook', name)
    setFormValues({...formValues, [name]: isChecked})
  }


  const submit = () => {
    const newForm = {
      Name: formValues.name.trim(),
      Email: formValues.Email.trim(),
      Password: formValues.Password.trim(),
      
    }
    postNewForm(newForm)
  }


  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues])
  
  return (
    <div className="App">
      <header><h1>Something Something Ooga</h1></header>

      <Form 
        values={formValues}
        inputChange={inputChange}
        checkboxChange={checkboxChange}
        submit={submit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        data.map(data => {
          return (
            <Name key={data.id} details={data} />
          )
        })
      }
    </div>
  );
}

export default App;
