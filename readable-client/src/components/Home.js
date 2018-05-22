import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import styled from 'styled-components'
//import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import { connect } from 'react-redux'

const Container = styled(Grid)`
&& {
    max-width: 900px;
    margin: 0 auto;
}
`;

class Home extends Component {
    render(){
       var {showcategory, props} = this.props
        return(
            <Container>
            <span>
                <AllPosts  {...props} showcategory={showcategory} />
              </span>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showcategory : ownProps.match.params.showcategory
  }
}

export default connect (mapStateToProps)(Home);
