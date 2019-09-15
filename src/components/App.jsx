import React from 'react'
import KegList from './KegList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom'
import NewKegForm from './NewKegForm'
import Error404 from './Error404'
import HomePage from './HomePage'
import Admin from './Admin'

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/KegList' component={KegList} />
        <Route path='/Admin' component={Admin} />
        <Route path='/newKeg' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App