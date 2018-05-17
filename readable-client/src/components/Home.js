import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'
//import CreatePost from './CreatePost'
import AllPosts from './AllPosts'
import ShowCategories from './ShowCategories'

const Container = styled(Grid)`
&& {
    max-width: 900px;
    margin: 0 auto;
}
`;

class Home extends Component {
    render(){
        return(
            <Container>
            <span>
                {/*<ShowCategories />*/}
                <AllPosts  />
              </span>
            </Container>
        )
    }
}

export default Home;
