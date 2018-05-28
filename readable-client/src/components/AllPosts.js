import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Typography from '@material-ui/core/Typography'
import PostDetails from './PostDetails'
import PostSort from './PostSort'
import * as actions from '../actions/PostActions'

class AllPosts extends Component{
    state = {
      posts : this.props.posts,
    }

    updatePosts = (sortBy) => {
      const posts = this.props.posts
      switch (sortBy) {
          case "timestampDesc":
              posts.sort((a, b) => {
                  return (new Date(a.timestamp) < new Date(b.timestamp))
              })
              this.setState({
                  posts: posts
              })
              break;
          case "timestampAsc":
              posts.sort((a, b) => {
                  return (new Date(a.timestamp) > new Date(b.timestamp))
              })
              this.setState({
                  posts: posts
              })
              break;
          case "voteDesc":
              posts.sort((a, b) => {
                  return (parseInt(b.voteScore, 10) - parseInt(a.voteScore, 10))
              })
              this.setState({
                  posts: posts
              })
              break;
          case "voteAsc":
              posts.sort((a, b) => {
                  return (parseInt(a.voteScore, 10) - parseInt(b.voteScore, 10))
              })
              this.setState({
                  posts: posts
              })
              break;
          default:
              break;
      }
  }


    componentWillMount(){
      this.setState({ posts : this.props.actions.fetchAllPosts()})
    }

    render(){
        const { posts, showcategory, ...props }  = this.props

        var mycategory = showcategory?showcategory:"ALL"
        var showPosts = (mycategory!=="ALL")?posts.filter((p) => p.category === mycategory):posts

        return(
          <div>
         <br/>
         <Typography variant="subheading" align="center" color="textSecondary" gutterBottom> Now Showing {mycategory.toUpperCase()} Blogs</Typography>
         <Typography variant="caption" align="right"  gutterBottom><PostSort updatePosts={this.updatePosts} /> </Typography>

          {
            showPosts.map((post)=>(
            <div key={post.id}>
                <PostDetails post ={post} {...props}/>
            </div>
          ))}
          </div>
        )
    }
}

function mapStateToProps(state, ownProps){
   return{
     posts : state.postsReducer.posts,
   }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
