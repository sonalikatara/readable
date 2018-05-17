import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import Tabs, { Tab } from 'material-ui/Tabs'
//import Typography from 'material-ui/Typography'
//import styled from 'styled-components'


class ShowCategories extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value })
  };

  render(){
    const { value } = this.state
    const { categories} = this.props
    return(
       <div>
       <br/>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={this.handleChange}
            >
              <Tab label="ALL" key="all" />
              {categories.map((category)=>(
                <Tab key={category.path} label={category.name}>
                </Tab>
              ))}

            </Tabs>

       </div>
    )
  }
}

export default ShowCategories
