import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'
import {formatDate} from '../utils/getDateString'

const Flexrow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
const Flexcol2 = styled.div`
   width: 50%;
`
const Flexcol4 = styled.div`
   width: 25%;
`
const PostPaper = styled(Paper)`
&&{
  padding: 16px;
  margin-top: 24px;
}
`
const PostBody =styled(Typography)`
&&{
  margin:16px 0px;
}
`
class PostDetails extends Component{
    render(){
      const { post} = this.props

      const createdAt = formatDate(post.timestamp)
        return(
            <span>
            <PostPaper  elevation={3} >
             <Flexrow>
                <Flexcol2>
                  <Typography variant="caption" align="left" color="textSecondary" gutterBottom>{createdAt}</Typography>
                </Flexcol2><Flexcol2>
                  <Typography variant="caption" align="right" color="secondary" >Catergory: <b>{post.category.toUpperCase()}</b></Typography>
                </Flexcol2>
              </Flexrow>
              <div>
              <Typography variant="subheading" color="primary" align="left">
                {post.title}
              </Typography>
              </div>
              <Typography variant="caption" align="left" color="textSecondary" gutterBottom>by <b>{post.author}</b></Typography>

              <PostBody component="p" align="left" gutterBottom>
                  {post.body}
              </PostBody>
              <Flexrow>
                <Flexcol4>
                  <Typography variant="caption" align="left" color="secondary" >Votes: <b>{post.voteScore}</b></Typography>
                </Flexcol4><Flexcol4>
                  <Typography variant="caption" align="left" color="secondary" >Comments: <b>{post.commentCount}</b></Typography>
                </Flexcol4>
                <Flexcol4 /><Flexcol4 />
              </Flexrow>
             </PostPaper>
             </span>
        )
    }
}

export default PostDetails
