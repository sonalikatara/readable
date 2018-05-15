import * as PostsAPI from "../PostsAPI"
import { GET_ALL_CATEGORIES } from "./types"

export const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})

export const fetchAllCategories = () => dispatch => (
  PostsAPI.fetchAllCategories()
  .then((categories)=>dispatch(getAllCategories))
)

