import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import 'typeface-roboto'
import AppHeader from './AppHeader'
import Home from './Home'
import Category from './Category'
import PostDetails from './PostDetails'

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppHeader />
        <p className="App-intro">
          A content and comment management system <code>Catagories</code>.
        </p>
        <p>
        <Route exact path="/" component={Home} />
        <Route path="/Category" component={Category} />
        <Route path="/PostDetails" component={PostDetails} />
        </p>
      </div>
    );
  }
}

export default App;
