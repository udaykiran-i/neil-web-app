import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './header.css'


const Header = () =>{
  return (
    <AppBar position="fixed" >
      <Container className='appbar' maxWidth="xl">
        <Toolbar disableGutters className='appImage'>
            <div>
              Neil Essays
            </div>
            <div className="buttons">
              <Button className='header-button' href='https://www.google.com' variant="contained">About Us</Button>
            </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
