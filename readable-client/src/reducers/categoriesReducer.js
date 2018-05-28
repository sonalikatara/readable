import {
    REQUEST_CATEGORIES,
    RECEIVE_CATEGORIES,
    SET_ACTIVE_CATEGORY,
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

    case SET_ACTIVE_CATEGORY :
            return{
              ...state,
              activeCategory: action.activeCategory
            }

    default:
           return state
  }
}


const initiaCategoriesState = {
  categories : [],
  activeCategory : "ALL",
}

export default categoriesReducer
