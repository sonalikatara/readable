import {ADD_NEW_COMMENT} from "./types"

export function addComment({
  comment
}) {
  return {
    type: ADD_NEW_COMMENT,
    comment
  }
}
