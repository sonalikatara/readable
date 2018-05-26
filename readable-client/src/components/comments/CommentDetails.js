import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import styled from 'styled-components'
import {formatDate} from '../../utils/getDateString'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EditComment from '../comments/EditComment'
import * as actions from '../../actions/CommentActions'

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
   text-align: right;
`

const CommentBody =styled(Typography)`
&&{
  margin:4px 0px;
}
`
const SmallIconButton = styled(Button)`
  &&{
    size: 4px;
   margin-top: 0px;
   padding: 0;
  }
`

class CommentDetails extends Component {

  state = {
    isEditingComment: false,
    editComment :{},
    post: {}
  }

   toggleEditComment = () => {
    this.setState({
        isEditingComment: !this.state.isEditingComment
    })
   }

  upVoteComment = () => {
    var {comment} = this.props
    comment.voteScore += 1
    this.props.actions.editComment(comment)
  }

  downVoteComment = () => {
    var {comment} = this.props
    comment.voteScore -= 1
    this.props.actions.editComment(comment)
  }

  removeComment = () => {
    var {comment,post} = this.props
    this.props.actions.deleteCommentById(comment.id)
    post.commentCount -= 1
  }

  componentDidMount(){
    this.setState({post: this.props.post})
    this.setState({comment: this.props.comment})
  }

  render(){
    const { comment, props } = this.props
    const createdAt = formatDate(comment.timestamp)

    return(
      <div>
        {this.state.isEditingComment && (
            <EditComment comment={comment} {...props} />
        )}
        {!this.state.isEditingComment && (
        <div >
          <Flexrow>
              <Flexcol2>
                <Typography variant="caption" align="left" color="secondary" >Comment by: <b>{comment.author}</b></Typography>
              </Flexcol2>
              <Flexcol2>
                <Typography variant="caption" align="right" color="textSecondary" gutterBottom>{createdAt}</Typography>
              </Flexcol2>
          </Flexrow>
          <CommentBody component="p" align="left" gutterBottom>
                    {comment.body}
          </CommentBody>
          <Flexrow gutterBottom>
            <Flexcol2>
              <Typography variant="caption" align="left" color="secondary" >Votes: <b>{comment.voteScore}</b></Typography>
              <SmallIconButton size="small"  aria-label="Edit" onClick={() => this.upVoteComment()} >
                  <ArrowDropUpIcon />
              </SmallIconButton>
              <Button size="small" aria-label="Edit" onClick={() => this.downVoteComment()}>
                  <ArrowDropDownIcon />
              </Button>
            </Flexcol2>
            <Flexcol2Right >
              <Button  aria-label="Edit" size="small" onClick = {() => this.toggleEditComment()} >
                  <EditIcon />
              </Button>
              <Button aria-label="Delete" size="small"  onClick = {() => this.removeComment()}>
                  <DeleteIcon />
              </Button>
            </Flexcol2Right>
          </Flexrow>
          <Divider /><br/>
        </div>
      )}
      </div>
    )
  }

}

function mapStateToProps (state, ownProps){
  return {
    post :state.postsReducer.post,
    comments : state.commentsReducer.comments,

  }
}

 function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(actions, dispatch)
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(CommentDetails)

