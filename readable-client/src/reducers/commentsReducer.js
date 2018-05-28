import { GET_ALL_COMMENTS ,
        RECEIVE_COMMENTS,
        EDIT_COMMENT,
        DELETE_COMMENT,
        SET_ACTIVE_COMMENT,
        CLEAR_ACTIVE_COMMENT
      } from "../actions/types"

function commentsReducer(state= initialCommentsState, action){
  var updatedComments = []

  switch (action.type ){
    case GET_ALL_COMMENTS:
            return {
              ...state
            }

    case RECEIVE_COMMENTS :
            return {
              ...state,
              comments: action.comments
            }


    case EDIT_COMMENT :
    updatedComments = state.comments.filter(comment => comment.id !== action.comment.id)
    updatedComments.push(action.comment)
    return {
       ...state,
       comment: action.comment,
       comments: updatedComments
    }

    case DELETE_COMMENT :
     updatedComments =  state.comments.filter((comment) => comment.id !== action.comment.id)
     return {
       ...state,
       comments: updatedComments
     }

     case SET_ACTIVE_COMMENT :
             return {
               ...state,
               activeComment: action.activeComment
             }

     case CLEAR_ACTIVE_COMMENT :
            return {
              ...state,
              activeComment: {id : "000", author : "", body : ""}
            }

    default:
        return state
  }

}

var initialCommentsState = {
    comment: {},
    activeComment: {id : "000", author : "", body : ""},
    comments: [],
}

export default commentsReducer
