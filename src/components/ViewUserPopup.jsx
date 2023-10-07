import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/usersSlice'

const ViewUserPopup = ({ showModal, setShowModal, id }) => {
    const allUsers = useSelector(selectAllUsers)
    const selectedUser = allUsers.find(user => id === user.id)
  return (
    <div className='modal-container'>
        <div className='modal-body'>
            <div className="close-button" onClick={() => setShowModal(false)}>x</div>
            <h2>Name: {selectedUser.name}</h2>
            <h3>Email: {selectedUser.email}</h3>
            <h4>Gender: {selectedUser.gender}</h4>
            <h5>Age: {selectedUser.age}</h5>
        </div>
    </div>
  )
}

export default ViewUserPopup
