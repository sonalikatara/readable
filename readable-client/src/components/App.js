import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import '../App.css'
import 'typeface-roboto'
import AppHeader from './AppHeader'
import Home from './Home'
//import Category from './Category'
import PostDetails from './PostDetails'
import NotFound from './NotFound'
import CreatePost from './CreatePost';
import ShowPostByID from './ShowPostByID';
import EditPost from './EditPost';

class App extends Component {
  render() {
    console.log("Props : "+ JSON.stringify(this.props))
    return (
      <div className="App">
      <AppHeader />
      <Switch>
        <Route exact path="/" render={props => (
                        <Home {...props}  />
                    )} />
        <Route exact path="/Category/:showcategory" render = { props => (
                      <Home {...props}  />
                    )} />
         <Route exact path="/Posts/:showPostID" render = { props => (
                      <ShowPostByID {...props}  />
                    )} />
         <Route exact path="/EditPost/:showPostID" render = { props => (
                      <EditPost {...props}  />
                    )} />
        <Route path="/createPost" component={CreatePost} />
        <Route path="/PostDetails" component={PostDetails} />
        <Route path="*" component={NotFound} />
      </Switch>
      </div>
    );
  }
}

export default App
