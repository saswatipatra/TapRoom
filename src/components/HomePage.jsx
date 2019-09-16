import React from 'react'
import { Link } from 'react-router-dom'
import headerPic from '../assets/images/header.jpg'

function HomePage() {

  var menuStyle = {
    fontFamily: 'cursive',
    color: 'Black',
    textAlign: 'center',
    fontSize: '36px'
  }
    
  var headerPicStyle = {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '30px',
    marginBottom: '30px',
    display: 'block',
    hieght: '70%',
    width: '70%'
  }
    
  return (
    <div>
      <div>
        <img style={headerPicStyle} src={headerPic} />
      </div>
      <div >
        <p style={menuStyle}><Link to="./KegList">Menu List</Link></p>
      </div>
    </div>
  )
}

export default HomePage