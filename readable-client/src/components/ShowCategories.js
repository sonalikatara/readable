import React, { Component } from 'react'
import {connect } from 'react-redux'
import { fetchAllCategories } from '../PostsAPI';


class ShowCategories extends Component {
  state = {
    categories : this.props.categories
  }

   componentWillMount(){
    const {dispatch, categories} = this.props
      dispatch(fetchAllCategories(categories))
  }


  render(){
    const categories   = this.state.categories
    return(
       <div>

       </div>
    )
  }
}

function mapStateToProps (state, ownProps){
 return {
   categories: state.categories
 }
}

export default connect(mapStateToProps)(ShowCategories)
