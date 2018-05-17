import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
} from '../actions/types'

function categoriesReducer(state= initiaCategoriesState, action){

  switch (action.type){

    case REQUEST_CATEGORIES:
            return {
              ...state
            }

    case RECEIVE_CATEGORIES:
            return {
              ...state,
              categories: action.categories
            }

    default:
           return state
  }
}


const initiaCategoriesState = {
  categories : []
}

export default categoriesReducer
