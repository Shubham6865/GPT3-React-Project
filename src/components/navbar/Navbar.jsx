import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';


const Menu = ({ closeMenu }) => (
  <div className='gpt3__navbar-menu_container-links' onClick={closeMenu}>
    <p><a href="#home">Home </a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
 

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenuHandler = () => {
    setToggleMenu(false);
  };

  return (
    <div className="gpt3__navbar">
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu closeMenu={closeMenuHandler} />
        </div>
      </div>
      <div className='gpt3__navbar-sign' >
        <p>Sign in</p>
        <button className='gpt3__navbar-sign-up' type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={toggleMenuHandler} />
          : <RiMenu3Line color='#fff' size={27} onClick={toggleMenuHandler} />
        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <Menu closeMenu={closeMenuHandler} />
            <div className='gpt3__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button className='gpt3__navbar-sign-up' type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
