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
    <div>
      {
        !isLoading ?
        <div>{allUsers.map(user => {
            return (
                <h5 key={user.id}>{ user.name }</h5>
            )
        })}</div> 
        : 
        <></>
      }
    </div>
  )
}

export default Read
