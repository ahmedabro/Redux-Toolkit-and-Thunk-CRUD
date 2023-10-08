import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser, selectAllUsers } from '../features/usersSlice'

const Update = () => {
    const { id } = useParams()
    const allUsers = useSelector(selectAllUsers)
    const [selectedUserData, setSelectedUserData] = useState({})

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        const selectedUser = allUsers.find(user => user.id === id)
        setSelectedUserData(selectedUser)
    }, [])

    const handleChange = (e) => {
        setSelectedUserData({ ...selectedUserData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(editUser(selectedUserData))
        navigate('/read')
    }

    console.log(selectedUserData)
  return (
    <div className='create'>
        <h2>Update A User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' value={selectedUserData && selectedUserData.name} placeholder='Name' onChange={handleChange} />
        <input type="text" name='email' value={selectedUserData && selectedUserData.email} placeholder='email' onChange={handleChange} />
        <input type="text" name='age' value={selectedUserData && selectedUserData.age} placeholder='age' onChange={handleChange} />
        <div className="radio-group">
            <div className="radio-form">
                <input type="radio" name='gender' value='male' id='male' checked={selectedUserData && selectedUserData.gender === 'male'} onChange={handleChange} />
                <label htmlFor="male">Male</label>
            </div>
            <div className="radio-form">
                <input type="radio" name='gender' value='female' id='female' checked={selectedUserData && selectedUserData.gender === 'female'} onChange={handleChange} />
                <label htmlFor="female">Female</label>
            </div>
        </div>
        <button>Save</button>
      </form>
    </div>
  )
}

export default Update
