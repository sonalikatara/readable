import * as PostsAPI from "../PostsAPI"
import {  RECEIVE_COMMENTS,  EDIT_COMMENT, DELETE_COMMENT} from "./types"

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
})

export const updateComment = comment => ({
  type: EDIT_COMMENT,
  comment
})

export const deleteComment = comment => ({
  type: DELETE_COMMENT,
  comment
})

export const  fetchPostComments  = (postID) => dispatch => (
  PostsAPI.getPostComments(postID)
  .then((comments)=>dispatch(receiveComments(comments)))
  .catch(error => {
    return error
  })
)

export const editComment = comment => dispatch => (
  PostsAPI.editComment(comment.id, comment)
  .then((comment) => dispatch(updateComment(comment)))
  .catch(error => {
    throw(error)
  })
)

export const deleteCommentById = (commentId) => dispatch => (
  PostsAPI
  .deleteComment(commentId)
  .then((comment) => dispatch(deleteComment(comment)))
  .catch(error => {
    throw(error)
  })
)

