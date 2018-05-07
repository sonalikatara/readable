import {
    GET_ALL_CATEGORIES,
} from '../actions'

export function categoriesReducer(state={ categories: [] }, action){

  switch (action.type){
    case GET_ALL_CATEGORIES:
            return {
              ...state,
              "categories": action.categories,
            }
    default:
           return state
  }
}
