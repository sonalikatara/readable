import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import categoriesReducer from './categoriesReducer'

export default combinedReducers({
  postsReducer,
  categoriesReducer
})
