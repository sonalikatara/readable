import React, { Component } from 'react'
import Button from 'material-ui/Button';

class ShowCategories extends Component {

  render(){
    const { categories} = this.props
    return(
       <div>
       <br/>
          <Button href="/"  color="inherit"> ALL </Button>
          {categories.map((category)=>(
            <Button color="secondary" href={'/category/'+ category.path} key={category.path} showcategory = {category.path}> {category.name} </Button>
          ))}
       </div>
    )
  }
}

export default ShowCategories
