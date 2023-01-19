import UpArrow from '../../icons/UpArrow.png';
import Explore from './Explore';
import styles from './Footer.module.css';
import Subscribe from './Subscribe';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Footer = () => {
  // Any value here works, just need to wait for hydration to set real value or React will error
  const [width, setWidth] = useState(0);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const isMobile = width <= 768;

  function scrollToTop() {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <Subscribe />
        {!isMobile ? (
          <>
            <Explore />
            <div className={styles.section}>
              <div className={styles.centeredColumn}>
                <div className={styles.circle} onClick={scrollToTop}>
                  <Image src={UpArrow} width={80} height={100} />
                </div>
                <p>© SHY SNAPS 2022</p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Footer;
