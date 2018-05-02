import React, { Component } from 'react'
import Grid from 'material-ui/Grid'
import styled from 'styled-components'

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
                <p>Readable Home Page </p>
            </Container>
        )
    }
}

export default Home;
