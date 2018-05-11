import React, { Component } from 'react'
import {Route} from 'react-router-dom'
//import { connect } from 'react-redux'
import '../App.css'
import 'typeface-roboto'
import AppHeader from './AppHeader'
import Home from './Home'
import Category from './Category'
import PostDetails from './PostDetails'

class App extends Component {
  render() {
    console.log("Props : "+ JSON.stringify(this.props))
    return (
      <div className="App">
      <AppHeader />
        <Route exact path="/" render={props => (
                        <Home {...props}  />
                    )} />
        <Route path="/Category" component={Category} />
        <Route path="/PostDetails" component={PostDetails} />

      </div>
    );
  }
}



export default App
