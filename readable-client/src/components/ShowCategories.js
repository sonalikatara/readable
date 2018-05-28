import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import {connect } from 'react-redux'
import {bindActionCreators} from 'redux';
import * as actions from '../actions/CategoryActions'


class ShowCategories extends Component {
  showPosts = (path) => {
    this.props.actions.setActiveCategory(path)
    this.props.history.push('/category/'+ path)
  }

  componentWillMount(){
    this.setState({activeCategory: "ALL"})
  }

  render(){
    const { categories, activeCategory } = this.props
     const MyLink = props => <Link to="/" {...props} />
    return(
       <div>
       <br/>
          <Button key="ALL" component={MyLink} color={(activeCategory==="ALL")?"inherit":"secondary"}>
            ALL
          </Button>
          {categories.map((category)=>(
            <Button key={category.path} onClick = {() => this.showPosts(category.path)}  color={(activeCategory=== category.path)?"inherit":"secondary"} >
            {category.name}
            </Button>
          ))}
       </div>
    )
  }
}

function mapStateToProps (state, ownProps){
  return {
    activeCategory: state.categoriesReducer.activeCategory
  }
 }

 function mapDispatchToProps(dispatch) {
   return {actions: bindActionCreators(actions, dispatch)}
 }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShowCategories))
