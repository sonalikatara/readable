import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withTheme } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import serializeForm from 'form-serialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/PostActions'

const PostDetailsForm = styled.form`
&&{
  margin: ${x => x.theme.spacing.unit * 4}px;
  display: flex;
  flex-direction: column;
}`

const PostText = styled(TextField)`
&&{
    width: 80%;
}`
const PostHeader = styled(Typography)`
&&{
  align: left;
}`

const PostTitle = styled(TextField)`
&&{
  width: 80%;
  margin-Top: ${x => x.theme.spacing.unit * 2}px;
}`

const PostFormControl = styled(FormControl)`
&&{
  width: 80%;
  minWidth: 120px;
 margin: ${x => x.theme.spacing.unit * 4}px 0px;
}`

class EditPost extends Component {
  state = {
    post : this.props.post
  }

  componentWillMount(){
    var {showPostID} = this.props
    //console.log(showPostID)
    this.setState( {post : this.props.actions.fetchPostById(showPostID)})
  }

  updatePost = (e,post) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        console.log("values = " + JSON.stringify(values))
        const editedPost = {
                          id: post.id,
                          title: values.newTitle,
                          body: values.newBody,
                          author: values.newAuthor,
                          category: values.newCategory,
                          timestamp: Date.now()
        }
       this.props.actions.editPost(editedPost).then(()=>{
          this.props.history.push('/')
        })
    }


    updateAuthor = (e) => {
      var {post} = this.props
      post.author = e.target.value
      this.setState({post})
    }

    updateTitle = (e) => {
      var {post} = this.props
      post.title = e.target.value
      this.setState({post})
    }

    updateBody = (e) => {
      var {post} = this.props
      post.body = e.target.value
      this.setState({post})
    }

    updateCategory = (e) => {
      var {post} = this.props
      post.category = e.target.value
      this.setState({post})
    }

    render(){
      const {theme, categories,post} = this.props
      var author = post.author
        return(
              <PostDetailsForm
                theme={theme}
                onSubmit={(e)=>{this.updatePost(e,post)}}
                >
                  <PostHeader variant='body2' align="left" gutterBottom > Create a Post </PostHeader>
                  <PostTitle
                    name = "newAuthor"
                    placeholder='Your Name'
                    fullWidth
                    theme={theme}
                    value={author}
                    onChange={this.updateAuthor}
                    />
                  <PostTitle id='txtPostTitle'
                    name = "newTitle"
                    placeholder='Title'
                    fullWidth
                    theme={theme}
                    value={post.title}
                    onChange={this.updateTitle}
                    />
                  <PostFormControl theme={theme} fullWidth  >
                  <InputLabel htmlFor="postCategory"  >Post Category </InputLabel>
                   <Select
                      native
                      name="newCategory"
                      value={post.category}
                      onChange={this.updateCategory}
                      input={<Input id="postCategory"
                  />}>
                   <option  key={1} value=""></option>
                    {categories.map((category)=>(
                        <option  key={category.path} value={category.name}>{category.name}</option>
                      )
                    )}

                  </Select>
                  </PostFormControl>
                  <PostText
                    id='txtPost'
                    name="newBody"
                    placeholder='What do want to share today ?'
                    value={post.body}
                    onChange={this.updateBody}
                    multiline
                    fullWidth
                    rows="10"
                    theme={theme} />
                  <br/>
                  <Button
                    type='raised'
                    color="primary"
                    value="EDIT POST"
                   >
                    EDIT POST
                  </Button>
              </PostDetailsForm>

        )
    }
}

function mapStateToProps (state, ownProps){
  return {
    post : state.postsReducer.post,
    showPostID: ownProps.match.params.showPostID,
    categories: state.categoriesReducer.categories
  }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(EditPost))
