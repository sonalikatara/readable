import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import CategoriesContainer from './CategoriesContainer'


/* App Header with logo, title and navigation-menu */

const Title = styled(Typography)`
&& {
  flex: 1;
  text-align: left;
}`;

class AppHeader extends Component {
    render(){

        return(
            <AppBar position="static">
            <Toolbar>
              <Title variant="title" color="inherit" >
              <img src={logo} className="App-logo" alt="logo" />Readable
              </Title>
              <CategoriesContainer />
            </Toolbar>

            </AppBar>
        )
    }
}


export default AppHeader

/* <Button color="inherit">Login</Button> */
