import Link from 'next/link';
import { useState } from 'react';
import HamburgerMenu from '../hamburger-menu';
import styles from './NavBar.module.css';

const MobileLinks = () => {
  return (
    <div className={styles.mobileLinks}>
      <ul>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/gallery'>GALLERY</Link>
        </li>
        <li>
          <Link href='/services'>SERVICES</Link>
        </li>
        <li>
          <Link href='/connect'>CONNECT</Link>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  console.log(showMobileDropdown);

  const handleClick = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  return (
    <>
      <nav>
        <div className='logo'>SHY SNAPS</div>
        <div className='content'>
          <ul className='links'>
            <li>
              <Link href='/'>HOME</Link>
            </li>
            <li>
              <Link href='/gallery'>GALLERY</Link>
            </li>
            <li>
              <Link href='/services'>SERVICES</Link>
            </li>
          </ul>
        </div>
        <div className='connect'>
          <Link href='/connect'>CONNECT</Link>
        </div>

        <HamburgerMenu onClick={handleClick} />
      </nav>
      {showMobileDropdown ? (
        <div>
          <MobileLinks />
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
