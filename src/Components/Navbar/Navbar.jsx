import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../Navbar/Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import menuOpenIcon from '../../assets/menu_open.svg';
import menuCloseIcon from '../../assets/menu_close.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
      <img src={logo} alt="Logo" />
      <img
        src={menuOpenIcon}
        alt="Open menu"
        className='nav-mob-open'
        onClick={() => setMobileMenuOpen(true)}
      />
      <ul className='nav-menu'>
        <img
          src={menuCloseIcon}
          alt="Close menu"
          className="nav-mob-close"
          onClick={() => setMobileMenuOpen(false)}
        />
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => { setMenu("home"); setMobileMenuOpen(false); }}
          >
            <p>Home</p>
          </Link>
          {menu === "home" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => { setMenu("about"); setMobileMenuOpen(false); }}
          >
            <p>About Me</p>
          </Link>
          {menu === "about" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => { setMenu("projects"); setMobileMenuOpen(false); }}
          >
            <p>Projects</p>
          </Link>
          {menu === "projects" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => { setMenu("contact"); setMobileMenuOpen(false); }}
          >
            <p>Contact</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <Link
        to="contact"
        smooth={true}
        duration={500}
        onClick={() => { setMenu("contact"); setMobileMenuOpen(false); }}
      >
        <div className="nav-connect">Connect With Me</div>
      </Link>
    </div>
  );
}

export default Navbar;
