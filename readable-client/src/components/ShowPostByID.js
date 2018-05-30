import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostDetails from './PostDetails'
import AllComments from './comments/AllComments'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom';
import * as postActions from '../actions/PostActions'

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
    var post = this.props.actions.fetchPostById(showPostID)
    this.setState({ post : post})
  }

  render(){
      const { post, showPostID, ...rest }  = this.props
      return(
         post.timestamp ?
          <Container>
            <PostDetails post={post} postID={showPostID} {...rest} />
            <AllComments postID={showPostID}/>
          </Container>
         : <div><br/>
              <h3>No Post found </h3>
              <center><Link to="/">Return to Home Page</Link></center>
           </div>
      )
  }
}

function mapStateToProp(state, ownProps){
   return{
     post : state.postsReducer.post,
     comments : state.commentsReducer.comments,
     showPostID: ownProps.match.params.showPostID,
   }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(postActions, dispatch) }
}

export default connect(mapStateToProp, mapDispatchToProps)(withRouter(ShowPostByID))
