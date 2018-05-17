import {
    ADD_NEW_POST,
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from '../actions/types'

function postsReducer(state=initialPostsState, action){
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

    case ADD_NEW_POST :
      return {
        ...state,
        posts : action.post,
      }

    default :
        return state
    }
}


const initialPostsState ={
  posts: []
}

export default postsReducer
