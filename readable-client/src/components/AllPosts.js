import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import PostDetails from './PostDetails'
import * as actions from '../actions/PostActions'

class AllPosts extends Component{

    state = {
      posts : this.props.posts
    }

    componentDidMount(){
      this.setState({ posts : this.props.actions.fetchAllPosts()})
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
        const { posts, showcategory }  = this.props
        var mycategory = showcategory?showcategory:"ALL"
        var showPosts = (mycategory!=="ALL")?posts.filter((p) => p.category === mycategory):posts
        return(
          <div>
          <br/>
         {mycategory.toUpperCase()} Blogs
          {showPosts.map((post)=>(
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
     posts : state.postsReducer.posts,
   }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPosts)
