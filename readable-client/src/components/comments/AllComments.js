import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import * as actions from '../../actions/CommentActions'
import styled from 'styled-components'
import { Divider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'
import CommentDetails from './CommentDetails'
import EditComment from './EditComment'

const CommentPaper = styled(Paper)`
&&{
  padding: 16px;
  margin-top: 8px;
}
`
const Flexrow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
const Flexcol2 = styled.div`
   width: 50%;
`
class AllComments extends Component {
  state = {
    postID : this.postID,
    comments : this.props.comments,
    showAddComment: false
  }

  handleAddComment = () => {
      this.setState({showAddComment: true})
  }

  componentWillMount(){
    const { postID } = this.props
   // console.log("postID : " + postID)
    this.setState({ postID : postID})
     this.setState({ comments : this.props.actions.fetchPostComments(postID)})
    // console.log("Comments : " + this.state.comments.length)
  }

  render(){
    const { comments, activeComment, ...props } = this.props
    comments.sort((a, b) => {
      return (new Date(a.timestamp) < new Date(b.timestamp))
    })
    return(
      <CommentPaper>
      <Flexrow>
        <Flexcol2>
          <Typography variant="caption" align="left" color="textSecondary" gutterBottom>COMMENTS</Typography>
       </Flexcol2>
       <Flexcol2>
          <Button  aria-label="Add" size="small" onClick={this.handleAddComment}>
            <AddIcon />
          </Button>
       </Flexcol2>
      </Flexrow>
       <Divider />
       {
         this.state.showAddComment && (
            <EditComment  />
        )}
         {comments.map((comment)=> (
           <div key={comment.id}>
              <CommentDetails comment={comment} {...props} />
           </div>
         )) }
      </CommentPaper>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    comments : state.commentsReducer.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
