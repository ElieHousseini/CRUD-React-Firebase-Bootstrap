// Importing React and ReactHooks
import React, { useState, useEffect } from "react"

// Importing FontAwesomeIcon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faEnvelope,
  faMobileAlt,
  faUser,
} from "@fortawesome/fontawesome-free-solid"


const Contactform = (props) => {

  // Those fields are in the Firebase DB 
  // and input Fields.
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  }

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initialFieldValues,
      })
    else
      setValues({
        ...props.contactObjects[props.currentId],
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.currentId, props.contactObjects])

  const handleInputChange = (e) => {
    var { name, value } = e.target
    setValues({
      ...values,
      [name]: value,
    })
  }

  var [values, setValues] = useState(initialFieldValues)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    props.addOrEdit(values)
  }

  return (
    <form autoComplete='off' onSubmit={handleFormSubmit}>
      <div className='form-group input-group'>
        <div className='input-group-prepend'>
          <div className='input-group-text'>
            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>
        <input
          type='text'
          className='form-control'
          placeholder='Full Name'
          name='fullName'
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-row'>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Full Name'
            name='mobile'
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group input-group col-md-6'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </div>
          <input
            type='text'
            className='form-control'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className='form-group'>
        <textarea
          name='address'
          className='form-control'
          placeholder='Address'
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='submit'
          value={props.currentId === "" ? "save" : "update"}
          className='btn btn-primary btn-block'
        />
      </div>
    </form>
  )
}

export default Contactform
