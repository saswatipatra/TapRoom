import React from 'react'
import Keg from './Keg'
import PropTypes from 'prop-types'

function KegList(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.kegList).map(function(kegId) {
        var keg = props.kegList[kegId]
        return <Keg names={keg.name}
          location={keg.brand}
          issue={keg.price}
          currentRouterPath={props.currentRouterPath}
          key={kegId}
          kegId={kegId}
          onKegSelection={props.onKegSelection}/>
      })}
    </div>
  )
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
}

export default KegList