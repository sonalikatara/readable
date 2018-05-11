import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'
import {formatDate} from '../utils/getDateString'

const PostPaper = styled(Paper)`
&&{
  padding: 16px;
  margin-top: 24px;
}
`

const PostBody =styled(Typography)`
&&{
  margin-top:16px;
}
`
class PostDetails extends Component{
    render(){
      const { post } = this.props
      const createdAt = formatDate(post.timestamp)
        return(
            <div>
            <PostPaper  elevation={3} >
               <Typography variant="caption" align="left" color="textSecondary" gutterBottom>{createdAt}</Typography>
              <Typography variant="subheading" color="primary" align="left">
                {post.title}
              </Typography>
              <Typography variant="caption" align="left" color="textSecondary" gutterBottom>{post.author}</Typography>
              <PostBody component="p" align="left" gutterBottom>
                  {post.body}
              </PostBody>
             </PostPaper>
             </div>
        )
    }
}

export default PostDetails
