import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
} from '../actions/types'

function categoriesReducer(state= initiaCategoriesState, action){

  switch (action.type){

    case REQUEST_CATEGORIES:
            return {
              ...state,
              isFetching: true,
            }

    case RECEIVE_CATEGORIES:
            return {
              ...state,
              isFetching: false,
              categories: action.categories
            }

    default:
           return state
  }
}


const initiaCategoriesState = {
  isFetching : false,
  categories : []
}

export default categoriesReducer
