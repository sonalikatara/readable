import React, { Component } from 'react'
import {connect } from 'react-redux'

class ShowCategories extends Component {
  state = {
    categories : this.props.categories
  }
  const { categories} = this.props

  render(){
    return(
       <div>

       </div>
    )
  }
}

export default ShowCategories
