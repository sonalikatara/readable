import {
    ADD_NEW_POST,
    REQUEST_POSTS,
    RECEIVE_POSTS,
} from '../actions/types'

function postsReducer(state=initialPostsState, action){
switch (action.type){
    case REQUEST_POSTS:
    return {
        ...state,
        isFetching: true
    }

    case RECEIVE_POSTS:
    return{
      ...state,
      isFetching: false,
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
  isFetching: false,
  posts: []
}

export default postsReducer
