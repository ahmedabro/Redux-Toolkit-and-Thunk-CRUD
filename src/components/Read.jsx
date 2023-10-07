import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { readUsers, selectAllUsers, selectIsLoading } from '../features/usersSlice'

const Read = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(readUsers())
    }, [])

    const allUsers = useSelector(selectAllUsers)
    const isLoading = useSelector(selectIsLoading)

  return (
    <div className='read-users'>
      {
        allUsers && !isLoading ?
        <div className='users-container'>{allUsers.map(user => {
            return (
                <div className="user-card" key={user.id}>
                    <h2>{user.name}</h2>
                    <h3>email: {user.email}</h3>
                    <h4>{user.age} years old</h4>
                </div>
            )
        })}</div> 
        : 
        <></>
      }
    </div>
  )
}

export default Read
