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
const StyledButton = styled(Button)`
 &&(
   margin : 0px;
   padding :0px;
 )
`
const Flexrow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
const Flexcol2 = styled.div`
   width: 50%;
`
const Flexcol2Right = styled.div`
   width: 50%;
   flex-flow: reverse;
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
    this.setState({ postID : postID})
     this.setState({ comments : this.props.actions.fetchPostComments(postID)})
  }

  render(){
    const { comments, activeComment, ...props } = this.props
    comments.sort((a, b) => {
      return (new Date(a.timestamp) < new Date(b.timestamp))
    })
    console.log("this.props.activeComment.author : " + this.props.activeComment.author)

    return(
      <CommentPaper>
      <Flexrow>
        <Flexcol2>
          <Typography variant="caption" align="left" color="textSecondary" gutterBottom>COMMENTS</Typography>
       </Flexcol2>
       <Flexcol2Right>
          <StyledButton  aria-label="Add" size="small" onClick={this.handleAddComment}>
            <AddIcon /> Comment
          </StyledButton>
       </Flexcol2Right>
      </Flexrow>
       <Divider />
       {
         this.state.showAddComment && (this.props.activeComment.author==="") && (
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
    comments : state.commentsReducer.comments,
    activeComment : state.commentsReducer.activeComment
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllComments)
