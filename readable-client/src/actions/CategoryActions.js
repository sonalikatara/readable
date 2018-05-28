import * as PostsAPI from "../PostsAPI"
import { REQUEST_CATEGORIES , RECEIVE_CATEGORIES, SET_ACTIVE_CATEGORY} from "./types"

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  categories
})

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const setActiveCategory = activeCategory => ({
  type: SET_ACTIVE_CATEGORY,
  activeCategory
})

export const fetchAllCategories = () => dispatch => (
  PostsAPI.fetchAllCategories()
  .then((categories)=>dispatch(receiveCategories(categories)))
  .catch(error => {
    return error
  })

)



