import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utlis';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  


  return (
    <nav className={styles.navbar}>
      <Link className={styles.title} to="/" onClick={() => window.scrollTo(0, 0)}>PORTFOLIO</Link>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl('nav/closeIcon.png')
              : getImageUrl('nav/menuIcon.png')
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} >
          <li >
            <ScrollLink onClick={() => setMenuOpen(false)} to="about" smooth={true} duration={50}>About</ScrollLink>
          </li>
          <li>
            <ScrollLink onClick={() => setMenuOpen(false)} to="skills" smooth={true} duration={50}>Skills</ScrollLink>
          </li>
          <li >
            <ScrollLink onClick={() => setMenuOpen(false)} to="experience" smooth={true} duration={50}>Experience</ScrollLink>
          </li>
          <li>
            <ScrollLink onClick={() => setMenuOpen(false)} to="projects" smooth={true} duration={50}>Projects</ScrollLink>
          </li>
          <li >
            <ScrollLink onClick={() => setMenuOpen(false)} to="contact" smooth={true} duration={50}>Contact</ScrollLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
