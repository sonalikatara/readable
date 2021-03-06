import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import '../App.css'
import 'typeface-roboto'
import AppHeader from './AppHeader'
import Home from './Home'
import PostDetails from './PostDetails'
import NotFound from './NotFound'
import CreatePost from './CreatePost'
import ShowPostByID from './ShowPostByID'
import EditPost from './EditPost'
import EditComment from './comments/EditComment'

class App extends Component {
  render() {
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
         <Route exact path="/post/:showPostCategory/:showPostID" render = { props => (
                      <ShowPostByID {...props}  />
                    )} />
         <Route exact path="/EditPost/:showPostID" render = { props => (
                      <EditPost {...props}  />
                    )} />
         <Route exact path="/EditComment/:showCommentID" render = { props => (
                      <EditComment {...props}  />
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
