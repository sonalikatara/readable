
import * as PostsAPI from "../PostsAPI"
export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"
export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS"

export const ADD_NEW_POST = 'ADD_NEW_POST'
export const ADD_NEW_COMMENT  = 'ADD_NEW_COMMENT'

export const EDIT_POST = "EDIT_POST"
export const EDIT_COMMENT = "EDIT_COMMENT"


export const DELETE_POST = "DELETE_POST"
export const DELETE_COMMENT = "DELETE_COMMENT"

export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"


/* post */
/* fetch all posts
export const fetchAllPosts = () => dispatch => (
  PostsAPI.getAllPosts().then((posts) => dispatch(receiveAllPosts(posts)))
)*/

export function addPost ({
 post
}
){
  return {
    type: ADD_NEW_POST,
   post
  }
}

export function addComment({
  comment
}) {
  return {
    type: ADD_NEW_COMMENT,
    comment
  }
}
