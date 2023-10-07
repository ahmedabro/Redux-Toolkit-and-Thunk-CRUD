import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUsers, selectAllUsers, selectIsLoading } from '../features/usersSlice'
import { Link } from 'react-router-dom'
import ViewUserPopup from './ViewUserPopup'

const Read = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readUsers())
    }, [])

    const allUsers = useSelector(selectAllUsers)
    const isLoading = useSelector(selectIsLoading)

    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState('')

    const handleShowModal = (userId) => {
        setShowModal(true)
        setId(userId)
        console.log(userId)
    }

  return (
    <>
        {showModal && <ViewUserPopup showModal={showModal} setShowModal={setShowModal} id={id} />}
        <div className='read-users'>
        <h2>View All Users</h2>
        {
            allUsers && !isLoading ?
            <div className='users-container'>{allUsers.map(user => {
                return (
                    <div className="user-card" key={user.id}>
                        <h2>Name: {user.name}</h2>
                        <h3>Email: {user.email}</h3>
                        <h4>Gender: {user.gender}</h4>
                        <div className="card-functions">
                            <Link onClick={() => handleShowModal(user.id)}>View</Link>
                            <Link>Edit</Link>
                            <Link onClick={() => dispatch(deleteUser(user.id))}>Delete</Link>
                        </div>
                    </div>
                )
            })}</div> 
            : 
            <h2>Loading...</h2>
        }
        </div>
    </>    
  )
}

export default Read
