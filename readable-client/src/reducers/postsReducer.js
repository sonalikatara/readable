import {
    CREATE_POST,
    REQUEST_POSTS,
    RECEIVE_POSTS,
    UPDATE_POST,
    RECEIVED_POST_BY_ID,
    DELETE_POST,
} from '../actions/types'

function postsReducer(state=initialPostsState, action){
  var updatedPosts = []

  switch (action.type){
    case REQUEST_POSTS:
    return {
        ...state
    }

    case RECEIVE_POSTS:
      updatedPosts = action.posts
      updatedPosts.sort((a, b) => {
          return (new Date(a.timestamp) < new Date(b.timestamp))
      })
      return{
        ...state,
        posts: updatedPosts,
      }

    case RECEIVED_POST_BY_ID:
    return{
      ...state,
      post: action.post,
    }

    case CREATE_POST :
      updatedPosts = state.posts
      updatedPosts.push(action.post)
      return {
        ...state,
        posts : updatedPosts
      }

    case UPDATE_POST :
       updatedPosts = state.posts.filter(post => post.id !== action.post.id)
       updatedPosts.push(action.post)
       updatedPosts.sort((a, b) => {
        return (new Date(a.timestamp) < new Date(b.timestamp))
      })

       return {
          ...state,
          posts: updatedPosts
       }

    case DELETE_POST :
     updatedPosts =  state.posts.filter((post) => post.id !== action.post.id)
     updatedPosts.sort((a, b) => {
      return (new Date(a.timestamp) < new Date(b.timestamp))
      })
     return {
       ...state,
       posts: updatedPosts
     }

    default :
        return state
    }
}


const initialPostsState ={
  post: {},
  posts: []
}

export default postsReducer
