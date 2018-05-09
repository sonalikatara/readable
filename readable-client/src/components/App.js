import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { connect } from 'react-redux'
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
        <p className="App-intro">
          A content and comment management system <code>Catagories</code>.
        </p>

        <Route exact path="/" component={Home} />
        <Route path="/Category" component={Category} />
        <Route path="/PostDetails" component={PostDetails} />

      </div>
    );
  }
}

function mapStateToProps (posts){
  return {
    body: "test post"
  }
}

export default connect(mapStateToProps)(App);
