import React from 'react'
import { Link } from 'react-router-dom'

function Header(){
  return (
    <div>
      <h1>Welcom to Kombucha Tap Room</h1>
      <Link to="/">Home Page</Link> | <Link to="/EmployeeView">Employee Page</Link>
    </div>
  )
}

export default Header