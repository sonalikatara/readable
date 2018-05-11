
import * as PostsAPI from "../PostsAPI"
export const GET_ALL_POSTS = "GET_ALL_POSTS"
export const ADD_NEW_POST = "ADD_NEW_POST"
export const DELETE_POST = "DELETE_POST"
export const EDIT_POST = "EDIT_POST"
export const UPVOTE_POST = "UPVOTE_POST"
export const DOWNVOTE_POST = "DOWNVOTE_POST"

/* POSTS */
/* fetch all posts */
/* an action creator that returns an object, with the type key of GET_ALL_POSTS along with a posts payload */
export const getAllPosts = posts => ({
  type: GET_ALL_POSTS,
  posts
})

/*
fetchAllPosts(), on the other hand, allows us to return a function.
Here, we first make the HTTP request from PostsAPI.
By setting up a Promise, the action to receive all posts items is dispatched only
when the original request is resolved.
*/
export const fetchAllPosts = () => dispatch => (
  PostsAPI
      .fetchAllPosts()
      .then((posts) => dispatch(getAllPosts(posts)))
)

export function addPost ({
 post
}
){
  return {
    type: ADD_NEW_POST,
   post
  }
}
