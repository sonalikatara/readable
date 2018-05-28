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

const uuidv1 = require('uuid/v1')
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
 margin: ${x => x.theme.spacing.unit * 4}px 0px;
}`

class CreatePost extends Component {
    createNewPost = (e) => {
        e.preventDefault()
        const values = serializeForm(e.target, {hash: true})
        const newPost = {
                          id: uuidv1(),
                          title: values.newTitle,
                           body: values.newBody,
                          author: values.newAuthor,
                          category: values.newCategory,
                          timestamp: Date.now()
        }
        this.props.actions.createPost(newPost).then(()=>{
          this.props.history.push('/')
        })
    }

    render(){
      const {theme, categories} = this.props;
        return(
              <PostDetailsForm
                theme={theme}
                onSubmit={this.createNewPost}
                >
                  <PostHeader variant='body2' align="left" gutterBottom> Create a Post </PostHeader>
                  <PostTitle id='txtPostAuthor'
                    name = "newAuthor"
                    placeholder='Your Name'
                    fullWidth
                    theme={theme}
                    />
                  <PostTitle id='txtPostTitle'
                    name = "newTitle"
                    placeholder='Title'
                    fullWidth
                    theme={theme}
                    />
                  <PostFormControl theme={theme} fullWidth  >
                  <InputLabel htmlFor="postCategory"  >Post Category </InputLabel>
                   <Select
                      native
                      name="newCategory"
                      defaultValue={'react'}
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
                    multiline
                    fullWidth
                    rows="10"
                    theme={theme}
                     />

                  <br/>
                  <Button
                    type='raised'
                    color="primary"
                   >
                    Publish
                  </Button>
              </PostDetailsForm>

        )
    }
}

function mapStateToProps (state, ownProps){
  return {
    categories: state.categoriesReducer.categories
  }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

export default withTheme()(connect(mapStateToProps, mapDispatchToProps)(CreatePost))
