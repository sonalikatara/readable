import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { Divider } from '@material-ui/core'
import { withTheme } from '@material-ui/core/styles'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions/CommentActions'

const uuidv1 = require('uuid/v1')

const CommentDetailsForm = styled.form`
&&{
  align: left;
  margin: ${x => x.theme.spacing.unit * 0.5}px;
  padding: 0px;
}`

const CommentText = styled(TextField)`
&&{
    width: 80%;
}`

const CommentAuthor = styled(TextField)`
&&{
  width: 80%;
  margin-Top: ${x => x.theme.spacing.unit * 0.5}px;
}`

class EditComment extends Component {

  state = {
    activeComment : (this.props.activeComment) ? this.props.activeComment : {}
  }

  updateComment = (e,comment) => {
       // e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        if (this.props.activeComment.id==="000"){
          // new comment
            const addComment = {
              id: uuidv1(),
              timestamp: Date.now(),
              body: values.newBody,
              author: values.newAuthor,
              parentId: this.props.post.id
            }
            const {post} = this.props
            this.props.actions.addNewComment(addComment).then(()=>{
              this.props.history.push('/post/'+post.category+'/'+post.id)
            })
        }
        else {
          // update an existing comment
          const editedComment = {
                      id: this.props.activeComment.id,
                      body: values.newBody,
                      author: values.newAuthor,
                      timestamp: Date.now()
          }
          this.props.actions.editComment(editedComment).then(()=>{
          this.props.history.push('/')
          })
        }
    }

    updateBody = (e) => {
      var {activeComment} = this.props
      activeComment.body = e.target.value
      this.setState({ activeComment : activeComment})
    }

    updateAuthor = (e) => {
      var {activeComment} = this.props
      activeComment.author = e.target.value
      this.setState({ activeComment : activeComment})
    }


  componentWillMount(){
    var activeComment = this.props.activeComment
    this.setState( {activeComment : activeComment})
  }

    render(){
      const {theme} = this.props
      const activeComment = this.props.activeComment
      var author = activeComment.author
      var body = activeComment.body
        return(
              <CommentDetailsForm
                theme={theme}
                onSubmit={(e)=>{this.updateComment(e,activeComment)}}
                >
                  <CommentAuthor
                    name = "newAuthor"
                    placeholder='Your Name'
                    fullWidth
                    theme={theme}
                    value={author}
                    onChange={this.updateAuthor}
                    />

                  <CommentText
                    id='txtComment'
                    name="newBody"
                    placeholder='Your Comment'
                    value={body}
                    multiline
                    fullWidth
                    rows="4"
                    theme={theme}
                    onChange={this.updateBody} />
                   <br/>
                  <Button
                    type='raised'
                    color="primary"
                   >
                    SAVE COMMENT
                  </Button>
               <Divider />
              </CommentDetailsForm>

        )
    }
}

function mapStateToProps (state, ownProps){
  return {
    activeComment : state.commentsReducer.activeComment,
    post: state.postsReducer.post
  }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(withRouter(EditComment)))
