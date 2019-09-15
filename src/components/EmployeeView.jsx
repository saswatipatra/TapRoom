import React from 'react'
import KegList from './KegList'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function EmployeeView(props) {
  return (
    <div>
      <br/>
      <hr />
      <KegList
        kegList={props.kegList}
        onKegSelection={props.onKegSelection} />
      <br/>
      <Link to="/NewKegForm"><button className="btn btn-warning">Add New Keg</button></Link>
    
    </div>
  )
}

EmployeeView.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default EmployeeView