import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
          <h4>RTK Thunk</h4>
          <ul>
              <li>
                  <Link to='/'>Create User</Link>
              </li>
              <li>
                  <Link>Read Users</Link>
              </li>
          </ul>
          <input type='text' placeholder='Search..' />
    </nav>
  )
}

export default Navbar
