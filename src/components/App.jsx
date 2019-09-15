import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import KegList from './KegList'
import EmployeeView from './EmployeeView'
import NewKegForm from './NewKegForm'
import Error404 from './Error404'
import { v4 } from 'uuid'
import Header from './Header'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterKegList: [],
      selectedKeg: null
    }
    this.styles = {
      marginTop: '30px'
    }
    this.handleNewKegCreation = this.handleNewKegCreation.bind(this)
    this.handleKegSelection = this.handleKegSelection.bind(this)
    
  }

  handleNewKegCreation(newKeg) {
    const newKegId = v4()
    const newMasterKegList = this.state.masterKegList.slice()
    newKeg.id = newKegId
    newMasterKegList.push(newKeg)
    this.setState({ masterKegList: newMasterKegList })
  }

  handleKegSelection(keg) {
    this.setState({ selectedKeg: keg })
  }

  
  render() {
    return (
      <div style={this.styles} className="container">
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/KegList" render={() =>
            <KegList
              kegList={this.state.masterKegList} />} />
          <Route path="/EmployeeView" render={() =>
            <EmployeeView
              kegList={this.state.masterKegList}
              onKegSelection={this.handleKegSelection} />} />
          <Route path="/NewKegForm" render={() =>
            <NewKegForm
              onNewKegCreation={this.handleNewKegCreation} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App