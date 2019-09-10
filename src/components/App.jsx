import React from 'react'
import KegList from './KegList'
import Header from './Header'
import { Switch, Route } from 'react-router-dom';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newticket' component={NewKegForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  )
}

export default App