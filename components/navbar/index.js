import Link from 'next/link';
import { useState, useRef } from 'react';
import HamburgerMenu from '../hamburger-menu';
import styles from './NavBar.module.css';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => {
    console.log('????');
    setShowNav((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>SHY SNAPS</div>
      <nav className={showNav ? styles.responsiveNav : styles.nav}>
        <div className={styles.links}>
          <Link href='/' onClick={() => setShowNav(false)}>
            HOME
          </Link>
          <Link href='/gallery'>GALLERY</Link>
          <Link href='/services'>SERVICES</Link>
        </div>
        <div className={styles.connect}>
          <Link href='/connect'>CONNECT</Link>
        </div>
      </nav>
      <HamburgerMenu onClick={handleClick} />
    </header>
  );
};

export default Navbar;
