import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/usersSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [values, setValues] = useState([])
  
    const dispatch = useDispatch()
    
    const navigate = useNavigate()

    const getValues = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(values)
      if (Object.keys(values).length === 4) {
        dispatch(createUser(values))
        navigate('/read')
      }
      else {
        alert("Please fill all data")
      }
    }
  return (
    <div className='create'>
        <h2>Create A User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Name' onChange={getValues} />
        <input type="text" name='email' placeholder='email' onChange={getValues} />
        <input type="text" name='age' placeholder='age' onChange={getValues} />
        <div className="radio-group">
            <div className="radio-form">
                <input type="radio" name='gender' value='male' id='male' onChange={getValues} />
                <label htmlFor="male">Male</label>
            </div>
            <div className="radio-form">
                <input type="radio" name='gender' value='female' id='female' onChange={getValues} />
                <label htmlFor="female">Female</label>
            </div>
        </div>
        <button>Create</button>
      </form>
    </div>
  )
}

export default Create
