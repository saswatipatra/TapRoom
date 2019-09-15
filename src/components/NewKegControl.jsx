import React from 'react'
import ConfirmationAdmin from './ConfirmationAdmin'
import NewKegForm from './NewKegForm'
import PropTypes from 'prop-types'

class NewKegControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      formVisibleOnPage: false
    }
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this)
  }
  
  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true})
  }
  
  render(){
    let currentlyVisibleContent = null
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation}/>
    } else {
      currentlyVisibleContent = <ConfirmationAdmin onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation}/>
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    )
  }
}
NewKegControl.propTypes = {
  onNewKegCreation: PropTypes.func
}

export default NewKegControl