import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  //NavBtn,
  //NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
  
      <Nav>
        <Bars />
        <NavMenu>
        <NavLink to='/coming' activeStyle>
            <h1>COMING SOON</h1>
          </NavLink>
          <NavLink to='/movies' activeStyle>
            <h1>MOVIES</h1>
          </NavLink>
          <NavLink to='/food' activeStyle>
            <h1>FOOD</h1>
          </NavLink>
          <NavLink to='/ticket' activeStyle>
            <h1>TICKET</h1>
          </NavLink>
          <NavLink to='/book' activeStyle>
            <h1>BOOK</h1>
          </NavLink>
          <NavLink to='/about' activeStyle>
            <h1>ABOUT</h1>
          </NavLink>
          <NavLink to='/contact' activeStyle>
            <h1>CONTACT</h1>
          </NavLink>
          
            
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;   