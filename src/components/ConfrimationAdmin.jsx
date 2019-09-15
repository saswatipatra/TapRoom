import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationAdmin(props){
    let _password = "Admin"
    let _confrimPassword = null

    function confrimPasswordFormSubmission(event) {
        event.preventDefault()
        props.onNewConfirmationAdmin({confrimPassword: _confrimPassword.value})
        _confrimPassword.value = ''
      }
  return (
    <div>
      <p>Kindly Enter the Admin PassWord... (Password is Admin)</p>

      <button onClick={props.onTroubleshootingConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onTroubleshootingConfirmation: PropTypes.func
}

export default ConfirmationQuestions