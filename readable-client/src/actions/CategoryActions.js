import * as PostsAPI from "../PostsAPI"

export const GET_ALL_CATEGORIES = "GET_ALL_CATEGORIES"

export const getAllCategories = categories => ({
  type: GET_ALL_CATEGORIES,
  categories
})

export const fetchAllCategories = () => dispatch => (
  PostsAPI.fetchAllCategories()
  .then((categories)=>dispatch(getAllCategories))
)

