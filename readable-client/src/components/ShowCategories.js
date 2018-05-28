import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class ShowCategories extends Component {
  render(){
    const { categories} = this.props
    return(
       <div>
       <br/>
          <Button href="/"  id="ALL" color={(this.props.showCategory==="ALL")?"inherit":"secondary"}> ALL </Button>
          {categories.map((category)=>(
            <Button href={'/category/'+ category.path} key={category.path}  color={(this.props.showCategory=== category.name)?"inherit":"secondary"} id = {category.path}> {category.name} </Button>
          ))}
       </div>
    )
  }
}

export default ShowCategories
