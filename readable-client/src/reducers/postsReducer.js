import {
    ADD_NEW_POST,
    GET_ALL_POSTS,
} from '../actions'

function posts(state=initialPostsState, action){

switch (action.type){
    case ADD_NEW_POST :
      return {
        ...state,
        posts : action.post,
      }

    case GET_ALL_POSTS:
      return{
        posts: action.posts
      }
    default :
        return state
    }
}


const initialPostsState ={
  posts: []
}

export default posts
