import {
    CREATE_POST,
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from '../actions/types'

function postsReducer(state=initialPostsState, action){
  var updatedPosts = []

  switch (action.type){
    case REQUEST_POSTS:
    return {
        ...state
    }

    case RECEIVE_POSTS:
    return{
      ...state,
      posts: action.posts,
    }

    case CREATE_POST :
      updatedPosts = state.posts
      updatedPosts.push(action.post)
      return {
        ...state,
        posts : updatedPosts
      }

    default :
        return state
    }
}


const initialPostsState ={
  posts: []
}

export default postsReducer
