import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'
import AllComments from './comments/AllComments'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import * as actions from '../actions/PostActions'

const Container = styled(Grid)`
&& {
    max-width: 900px;
    margin: 0 auto;
}
`;

class ShowPostByID extends Component {
  state = {
    post : this.props.post
  }

  componentWillMount(){
    var {showPostID} = this.props
    this.setState({ post : this.props.actions.fetchPostById(showPostID)})
  }

  render(){
      const { post, showPostID, ...rest }  = this.props
      return(
        <Container>
          <PostDetails post={post} postID={showPostID} {...rest} />
         <AllComments postID={showPostID}/>
        </Container>
      )
  }
}

function mapStateToProp(state, ownProps){
   return{
     post : state.postsReducer.post,
     comments : state.commentsReducer.comments,
     showPostID: ownProps.match.params.showPostID
   }
}

function mapDispatchToProps(dispatch) {
  return {
     actions: bindActionCreators(actions, dispatch)
   }
}

export default connect(mapStateToProp, mapDispatchToProps)(ShowPostByID)
