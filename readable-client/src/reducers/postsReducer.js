import {
    ADD_NEW_POST,
    GET_ALL_POSTS,
} from '../actions/PostActions'

function postsReducer(state=initialPostsState, action){

switch (action.type){
    case ADD_NEW_POST :
      return {
        ...state,
        posts : action.post,
      }

    case GET_ALL_POSTS:
      return{
        ...state,
        posts: action.posts
      }
    default :
        return state
    }
}


const initialPostsState ={
  posts: []
}

export default postsReducer
