import React from 'react'
import PropTypes from 'prop-types'
import kombucha from '../assets/images/kombucha.jpg'

function Keg(props){
  return (
    <div>
      <img src={kombucha}/>
      <style global jsx>{`
          div {
            background-color: red;
          }
        `}</style>
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.price}</em></p>
      <hr/>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string
}

export default Keg