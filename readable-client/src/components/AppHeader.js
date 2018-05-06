import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
//import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import styled from 'styled-components'
import logo from '../images/logo.svg'

/* App Header with logo, title and navigation-menu */

const Title = styled(Typography)`
&& {
  flex: 1;
  text-align: center;
}`;

class AppHeader extends Component {
    render(){

        return(
            <AppBar position="static">
            <Toolbar>
              <IconButton color="secondary"  aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Title variant="title" color="inherit" >
              <img src={logo} className="App-logo" alt="logo" />Readable
              </Title>

            </Toolbar>
            </AppBar>
        )
    }
}


export default AppHeader

/* <Button color="inherit">Login</Button> */
