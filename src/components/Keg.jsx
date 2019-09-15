import React from 'react'
import PropTypes from 'prop-types'

function Keg(props){
  const kegInformation =
    <div>
      <h3>{props.brand} - {props.name}</h3>
     
      <hr/>
    </div>
  
  return (
    <div onClick={() => {props.onKegSelection(props.kegId)}}>
      {kegInformation}
    </div>
  )

}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func,
  kegId: PropTypes.string.isRequired
}

export default Keg