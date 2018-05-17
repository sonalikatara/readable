import * as PostsAPI from "../PostsAPI"
import { REQUEST_CATEGORIES , RECEIVE_CATEGORIES} from "./types"

export const requestCategories = categories => ({
  type: REQUEST_CATEGORIES,
  categories
})

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
})

export const fetchAllCategories = () => dispatch => (
  PostsAPI.fetchAllCategories()
  .then((categories)=>dispatch(receiveCategories(categories)))
  .catch(error => {
    return error
  })

)


