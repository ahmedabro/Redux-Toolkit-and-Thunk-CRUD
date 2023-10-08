import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers, searchUser } from '../features/usersSlice'

const Navbar = () => {
  const allUsers = useSelector(selectAllUsers)

  const [searchValue, setSearchValue] = useState("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchUser(searchValue))    
  }, [searchValue])

  return (
    <nav>
          <h4>RTK Thunk</h4>
          <ul>
              <li>
                  <Link to='/'>Create User</Link>
              </li>
              <li>
                  <Link to='/read'>Read Users ({allUsers.length})</Link>
              </li>
          </ul>
          <input type='text' placeholder='Search..' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
    </nav>
  )
}

export default Navbar
