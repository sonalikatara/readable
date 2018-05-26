import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import { withTheme } from '@material-ui/core/styles'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/CommentActions'

const CommentDetailsForm = styled.form`
&&{
  margin: ${x => x.theme.spacing.unit * 4}px;
}`

const CommentText = styled(TextField)`
&&{
    width: 80%;
}`

const CommentAuthor = styled(TextField)`
&&{
  width: 80%;
  margin-Top: ${x => x.theme.spacing.unit * 2}px;
}`

class EditComment extends Component {
  state = {
    comment : this.props.comment
  }

  componentWillMount(){
    var comment = this.props.comment
    //var showCommentID = comment.id
    //console.log("comment body" + comment.body)
    this.setState( {comment : comment})
  }

  updateComment = (e,comment) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log("values = " + JSON.stringify(values))
        const editedComment = {
                          id: comment.id,
                          body: values.newBody,
                          author: values.newAuthor,
                          timestamp: Date.now()
        }
       this.props.actions.editComment(editedComment).then(()=>{
          this.props.history.push('/')
        })
    }

    updateBody = (e) => {
      var {comment} = this.props
      comment.body = e.target.value
      this.setState({comment})
    }

    render(){
      const {theme, comment} = this.props
     console.log("comment = " + JSON.stringify(comment))
      var author = comment.author
        return(
              <CommentDetailsForm
                theme={theme}
                onSubmit={(e)=>{this.updateComment(e,comment)}}
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
                    value={comment.body}
                    onChange={this.updateBody}
                    multiline
                    fullWidth
                    rows="4"
                    theme={theme}>
                  </CommentText>
                  <br/>
                  <Button
                    type='raised'
                    color="primary"
                   >
                    EDIT COMMENT
                  </Button>
              </CommentDetailsForm>

        )
    }
}

function mapStateToProps (state, ownProps){
  return {
    comment : state.commentsReducer.comment,
  }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(EditComment))
