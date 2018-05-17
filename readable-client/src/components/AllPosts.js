import React, { Component } from 'react'
import {connect } from 'react-redux'
import PostDetails from './PostDetails'
import {fetchAllPosts} from '../actions/PostActions'

class AllPosts extends Component{

    state = {
      posts : this.props.posts
    }

    componentDidMount(){
      const {dispatch, posts} = this.props
      dispatch(fetchAllPosts(posts))
    }

   /* componentWillMount() {
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
    */
    render(){
        const posts   = this.props.posts
        return(
          <div>
          {posts.map((post)=>(
            <div key={post.id}>
                <PostDetails post ={post} />
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
