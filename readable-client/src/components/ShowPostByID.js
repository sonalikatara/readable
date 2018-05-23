import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/PostActions'

class ShowPostByID extends Component {
  state = {
    post : this.props.post
  }

  componentWillMount(){
    var {showPostID} = this.props
    console.log(showPostID)
    this.setState({ post : this.props.actions.fetchPostById(showPostID)})
  }

  render(){
      const { post, ...rest }  = this.props
      return(
        <div>
          <PostDetails post={post} {...rest} />
        </div>
      )
  }
}

function mapStateToProp(state, ownProps){
   return{
     post : state.postsReducer.post,
     showPostID: ownProps.match.params.showPostID
   }
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(actions, dispatch)
   }
}

export default connect(mapStateToProp, mapDispatchToProps)(ShowPostByID)
