
import * as PostsAPI from "../PostsAPI"
import {REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_POSTS,  CREATE_POST} from "./types"

/* POSTS */
/* fetch all posts */
/* an action creator that returns an object, with the type key of GET_ALL_POSTS along with a posts payload */

export const requestPosts = posts => ({
  type: REQUEST_POSTS,
  posts
})

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
})

export const invalidatePosts = posts => ({
    type: INVALIDATE_POSTS,
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
      .then((posts) => dispatch(receivePosts(posts)))
      .catch(error => {
        throw(error)
      })
)

export const createPost = post => dispatch => (
   PostsAPI
   .createPost(post)
   .then((post) => dispatch(postCreated(post)))
   .catch(error => {
    throw(error)
  })

)

export const postCreated = post => ({
  type: CREATE_POST,
  post
})
