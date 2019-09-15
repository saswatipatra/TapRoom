import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props){
  return (
    <div>
      <hr/>
      {props.kegList.map((keg) =>
        <Keg name={keg.name}
          brand={keg.brand}
          description={keg.description}
          flavor={keg.flavor}
          price={keg.price}
          key={keg.id}
          onKegSelection={props.onKegSelection}/>
      )}
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList