import React, { Component } from 'react'
import {connect } from 'react-redux'
import PostDetails from './PostDetails'

class AllPosts extends Component{

    state = {
      posts : this.props.post
    }

    componentWillMount() {
      this.setState({posts: this.props.posts})
    }

    componentWillReceiveProps(nextProps){
      if (nextProps.posts.length > 0) {
        let posts = nextProps.posts

          this.setState({
            posts: posts
          })
        }
    }
    render(){
        const posts   = this.props.posts
        return(
          <div>
          <h2>All Posts </h2>
          {posts.map((post)=>(
            <div key={post.id}>
              <p>
                <PostDetails post ={post} />
              </p>
            </div>
          ))}
          </div>
        )
    }
}

function mapStateToProps(state, ownProps){
   return{
     posts : state.postsReducer.posts
   }
}
export default connect(mapStateToProps)(AllPosts)
