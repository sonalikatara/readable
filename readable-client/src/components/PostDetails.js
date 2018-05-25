import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import styled from 'styled-components'
import {formatDate} from '../utils/getDateString'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/PostActions'

const Flexrow = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
const Flexcol2 = styled.div`
   width: 50%;
`
const Flexcol3 = styled.div`
   width: 33%;
`
const Flexcol3Right = styled.div`
   width: 33%;
   text-align: right;
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
const SmallIconButton = styled(Button)`
  &&{
    size: 4px;
   margin-top: 0px;
   padding: 0;
  }
`

class PostDetails extends Component{
  upVotePost = () => {
    var {post} = this.props
    post.voteScore += 1;
    this.props.actions.editPost(post)
  }

  downVotePost = () => {
    var {post} = this.props
    post.voteScore -= 1;
    this.props.actions.editPost(post)
  }

  removePost = () => {
    var {post} = this.props
    this.props.actions.deletePostById(post.id)
  }

  componentDidMount(){
    this.setState({post: this.props.post})
    this.setState({comments: this.props.comments})
  }

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
                  <Typography variant="caption" align="right" color="secondary" >Catergory: <b>{post.category}</b></Typography>
                </Flexcol2>
              </Flexrow>
              <div>
              <Typography variant="subheading" color="primary" align="left">
                <Link to={"/posts/"+post.id}> {post.title} </Link>
              </Typography>
              </div>
              <Typography variant="caption" align="left" color="textSecondary" gutterBottom>by <b>{post.author}</b></Typography>
              <PostBody component="p" align="left" gutterBottom>
                  {post.body}
              </PostBody>
              <Divider /><br/>
              <Flexrow gutterBottom>
                <Flexcol3>
                  <Typography variant="caption" align="left" color="secondary" >Votes: <b>{post.voteScore}</b></Typography>
                  <SmallIconButton size="small"  aria-label="Edit" onClick={() => this.upVotePost()} >
                     <ArrowDropUpIcon />
                  </SmallIconButton>
                  <Button size="small" aria-label="Edit" onClick={() => this.downVotePost()}>
                     <ArrowDropDownIcon />
                  </Button>
                </Flexcol3>
                <Flexcol3>
                  <Typography variant="caption" align="left" color="secondary" >Comments: <b>{post.commentCount}</b></Typography>
                </Flexcol3>
                <Flexcol3Right >
                  <Button  aria-label="Edit" size="small" href={"/EditPost/"+post.id}>
                     <EditIcon />
                  </Button>
                  <Button aria-label="Delete" size="small"  onClick = {() => this.removePost()}>
                     <DeleteIcon />
                  </Button>
                </Flexcol3Right>
              </Flexrow>
             </PostPaper>
             </span>
        )
    }
}

function mapStateToProps (state, ownProps){
  return {
      posts: state.postsReducer.posts
  }
}

 function mapDispatchToProps(dispatch) {
   return {
      actions: bindActionCreators(actions, dispatch)
    }
 }

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails)
