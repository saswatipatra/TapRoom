import React from 'react'
import PropTypes from 'prop-types'


function Keg(props) {
  var kegCard = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'lightgray',
    borderRadius: '10px',
    padding: '15px',
    margin: '10px'
  }

  
 
  return (
    <div style={kegCard}>
      <h2>
        {props.name} - {props.brand}
        <br/>
        {props.description}
        <br />
        ${props.price}
      </h2>
    </div>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  description: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.number,
  kegId: PropTypes.string,
  onKegSelection: PropTypes.func,
  
}

export default Keg