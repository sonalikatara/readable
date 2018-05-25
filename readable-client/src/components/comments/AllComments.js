import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import * as actions from '../../actions/CommentActions'
import styled from 'styled-components'
import { Divider } from '@material-ui/core';
import CommentDetails from './CommentDetails';

const CommentPaper = styled(Paper)`
&&{
  padding: 16px;
  margin-top: 8px;
}
`

class AllComments extends Component {
  state = {
    postID : this.postID,
    comments : this.props.comments
  }

  componentWillMount(){
    const { postID } = this.props
   // console.log("postID : " + postID)
    this.setState({ postID : postID})
     this.setState({ comments : this.props.actions.fetchPostComments(postID)})
    // console.log("Comments : " + this.state.comments.length)
  }

  render(){
    const { comments } = this.props

    return(
      <CommentPaper>
       <Typography variant="caption" align="left" color="textSecondary" gutterBottom>COMMENTS</Typography>
       <Divider />
         {comments.map((comment)=> (
           <div key={comment.id}>
              <CommentDetails comment={comment} />
           </div>
         )) }
      </CommentPaper>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    comments : state.commentsReducer.comments,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
