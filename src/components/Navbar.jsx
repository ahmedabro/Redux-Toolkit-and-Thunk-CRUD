import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../features/usersSlice'

const Navbar = () => {
  const allUsers = useSelector(selectAllUsers)
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
          <input type='text' placeholder='Search..' />
    </nav>
  )
}

export default Navbar
