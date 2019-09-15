import React from 'react'
import KegList from './KegList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewKegForm from './NewKegForm'
import Error404 from './Error404'
import HomePage from './HomePage'
import Admin from './Admin'
import { v4 } from 'uuid'
import NewKegControl from './NewKegControl'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      masterKegList: {},
      selectedKeg: null
    }
    this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this)
    this.handleChangingSelectedKeg = this.handleChangingSelectedKeg.bind(this)
  }
  handleAddingNewKegToList(newKeg){
    var newKegId = v4()
    var newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    })
    newMasterKegList[newKegId].formattedWaitTime = newMasterKegList[newKegId].timeOpen.fromNow(true)
    this.setState({masterKegList: newMasterKegList})
  }
  handleChangingSelectedKeg(kegId){
    this.setState({selectedKeg: kegId})
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/KegList' render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route path='/Admin' render={(props)=><Admin kegList={this.state.masterKegList} currentRouterPath={props.location.pathname}
            onKegSelection={this.handleChangingSelectedKeg}
            selectedKeg={this.state.selectedKeg}/>}/>
          <Route path='/newKeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    )
  }
}

export default App