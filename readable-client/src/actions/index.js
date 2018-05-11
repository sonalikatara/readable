

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"

export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS"

export const ADD_NEW_COMMENT  = 'ADD_NEW_COMMENT'

export const EDIT_COMMENT = "EDIT_COMMENT"


export const DELETE_COMMENT = "DELETE_COMMENT"



export const UPVOTE_COMMENT = "UPVOTE_COMMENT"
export const DOWNVOTE_COMMENT = "DOWNVOTE_COMMENT"




export function addComment({
  comment
}) {
  return {
    type: ADD_NEW_COMMENT,
    comment
  }
}
