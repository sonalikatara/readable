import React, { Component } from 'react'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/CategoryActions'
import ShowCategories from './ShowCategories';

class CategoriesContainer extends Component {

  componentDidMount(){
    const categories = this.props.actions.fetchAllCategories()
    this.setState({categories : categories})
  }

  render(){
    const categories   = this.props.categories
    return(
       <div>
          <ShowCategories categories={categories} />
       </div>
    )
  }
}

function mapStateToProps (state, ownProps){
 return {
   categories: state.categoriesReducer.categories
 }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesContainer)
