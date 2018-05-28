import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import CategoriesContainer from './CategoriesContainer'
import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'

/* App Header with logo, title and navigation-menu */

const Title = styled(Typography)`
&& {
  flex: 1;
  text-align: left;
}`;

class AppHeader extends Component {
    render(){

        return(
            <AppBar position="static"  >
            <Toolbar>
              <Title variant="title" color="inherit" >
              <img src={logo} className="App-logo" alt="logo" />Readable
              </Title>
              <CategoriesContainer />
              <Button variant="fab"  mini color="primary" href= "/createPost" aria-label="add new post" >
                <AddIcon />
              </Button>
            </Toolbar>
            </AppBar>
        )
    }
}


export default AppHeader


