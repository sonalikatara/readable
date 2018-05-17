import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
//import Typography from 'material-ui/Typography'
//import styled from 'styled-components'


class ShowCategories extends Component {

  render(){
    const categories   = this.props.categories
    const { selectedIndex: i } = this.props
    return(
       <div>
       <br/>
            <Tabs
                value={i}
                indicatorColor="primary"
                textColor="secondary"
            >
              <Tab label="ALL" />
              {categories.map((category)=>(
                <Tab label={category.name}>
                </Tab>
              ))}

            </Tabs>

       </div>
    )
  }
}

export default ShowCategories
