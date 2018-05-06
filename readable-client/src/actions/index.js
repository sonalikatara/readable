export const ADD_POST = 'ADD_POST'
export const ADD_COMMENT  = 'ADD_COMMENT'

export function addPost ({
  timestamp,
  title,
  body,
  author,
  category,
  voteScore,
  deleted
}
){
  return {
    type: ADD_POST,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore,
    deleted,
  }
}

export function addComment({
  parentId,
  timestamp,
  body,
  author,
  voteScore,
  deleted,
  parentDeleted
}) {
  return {
    type: ADD_COMMENT,
    parentId,
    timestamp,
    body,
    author,
    voteScore,
    deleted,
    parentDeleted,
  }
}
