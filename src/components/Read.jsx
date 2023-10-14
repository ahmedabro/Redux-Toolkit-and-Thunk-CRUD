import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, readUsers, selectAllUsers, selectIsLoading, selectSearchData, selectCheckedRadioData, setCheckedRadioData } from '../features/usersSlice'
import { Link } from 'react-router-dom'
import ViewUserPopup from './ViewUserPopup'

const Read = () => {
    const dispatch = useDispatch()
    
    const allUsers = useSelector(selectAllUsers)
    const isLoading = useSelector(selectIsLoading)
    const searchValue = useSelector(selectSearchData)
    const radioCheckedData = useSelector(selectCheckedRadioData)

    const [showModal, setShowModal] = useState(false)
    const [id, setId] = useState('')
    const [radioChecked, setRadioChecked] = useState('')

    useEffect(() => {
        dispatch(readUsers())
        dispatch(setCheckedRadioData(radioChecked))
    }, [radioChecked])

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
            
            <h3>Filter</h3>
            <div className='radio-group'>
                <div className="radio-container">
                    <input type="radio" name='gender' id='all' value='all' checked={radioChecked === ''} onChange={(e) => setRadioChecked('')} />
                    <label htmlFor="all">all</label>
                </div>
                <div className="radio-container">
                    <input type="radio" name='gender' id='male' value='male' checked={radioChecked === 'male'} onChange={(e) => setRadioChecked(e.target.value)} />
                    <label htmlFor="male">male</label>
                </div>
                <div className="radio-container">
                    <input type="radio" name='gender' id='female' value='female' checked={radioChecked === 'female'} onChange={(e) => setRadioChecked(e.target.value)} />
                    <label htmlFor="female">female</label>
                </div>
            </div>
            {
                allUsers && !isLoading ?
                    

                <div className='users-container'>
                    {
                        allUsers.filter(user => {
                            if (searchValue.length === 0 ) {
                                return user
                            }
                            else {
                                return (
                                    user.name.toLowerCase().includes(searchValue.toLowerCase())
                                    || user.email.toLowerCase().includes(searchValue.toLowerCase()) 
                                    || user.age.toLowerCase().includes(searchValue.toLowerCase()) 
                                    || user.gender.toLowerCase().includes(searchValue.toLowerCase())
                                )
                            }
                        })
                        .filter(user => {
                            if (radioCheckedData.length !== 0) {
                                return user.gender === radioCheckedData
                            }
                            else {
                                return user
                            }
                        })
                        .map(user => {
                            return (
                                <div className="user-card" key={user.id}>
                                    <h2>Name: {user.name}</h2>
                                    <h3>Email: {user.email}</h3>
                                    <h4>Gender: {user.gender}</h4>
                                    <div className="card-functions">
                                        <Link onClick={() => handleShowModal(user.id)}>View</Link>
                                        <Link to={`/update/${user.id}`}>Update</Link>
                                        <Link onClick={() => dispatch(deleteUser(user.id))}>Delete</Link>
                                    </div>
                                </div>
                            )
                    })}
                </div> 
                : 
                <h2>Loading...</h2>
            }
        </div>
    </>    
  )
}

export default Read
