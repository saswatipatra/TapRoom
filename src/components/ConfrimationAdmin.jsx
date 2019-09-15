import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationAdmin(props){
   
  let _confrimPassword = null

  function confrimPasswordFormSubmission(event) {
    event.preventDefault()
    props.onNewConfirmationAdmin({confrimPassword: _confrimPassword.value})
    _confrimPassword.value = ''
    if (_confrimPassword==='Admin')
    {
      props.onTroubleshootingConfirmation
    }
    else
    {
      <p>Access Denied</p>
    }
  }
  return (
    <div>
      <p>Kindly Enter the Admin PassWord... (Password is Admin)</p>
      <form onSubmit={confrimPasswordFormSubmission}>
        <input
          type='text'
          id='confrimPassword'
          placeholder='Admin'
          ref={(input) => {_confrimPassword = input}}/>
        
        <button type='submit'>Submit</button>
      </form>
      
    </div>
  )
}

ConfirmationAdmin.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationAdmin