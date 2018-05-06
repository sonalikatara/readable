import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import styled from 'styled-components'
import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'
import Select from 'material-ui/Select'
import Input, { InputLabel } from 'material-ui/Input'
import { Typography, FormControl } from 'material-ui'

const PostDetailsForm = styled.form`
&&{
  margin-left: ${x => x.theme.spacing.unit * 4}px;
  margin-right: ${x => x.theme.spacing.unit * 4}px;
  display: flex;
  flex-direction: column;
}`

const PostText = styled(TextField)`
&&{

    width: 80%,
}`
const PostHeader = styled(Typography)`
&&{
  align: left;
}`

const PostTitle = styled(TextField)`
&&{
  width: 80%,
}`

const PostFormControl = styled(FormControl)`
&&{
 margin: ${x => x.theme.spacing.unit * 4}px 0px;
}`

class CreatePost extends Component {

    render(){
      const {theme} = this.props;
        return(
              <PostDetailsForm theme={theme}>
                  <PostHeader variant='body2' align="left" gutterBottom> Create a Post </PostHeader>
                  <PostTitle id='txtPostTitle'
                    placeholder='Title'
                    fullWidth
                    gutterBottom
                    theme={theme}>
                  </PostTitle>
                  <PostFormControl theme={theme} fullWidth gutterBottom >
                  <InputLabel htmlFor="postCategory"  >Post Category </InputLabel>
                   <Select native defaultValue={30} input={<Input id="postCategory" />}>
                    <option value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                  </Select>
                  </PostFormControl>
                  <PostText id='txtPost'
                    placeholder='What do want to share today ?'
                    multiline
                    fullWidth
                    rows="10"
                    theme={theme}>
                  </PostText>
                  <br/>
                  <Button type='raised' color="primary">
                    Publish
                  </Button>
              </PostDetailsForm>

        )
    }
}

export default withTheme()(CreatePost)
