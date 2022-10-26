import UpArrow from '../../icons/UpArrow.png';
import Explore from './Explore';
import styles from './Footer.module.css';
import Subscribe from './Subscribe';
import Image from 'next/image';

const Footer = () => {
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
        <Explore />
        <div className={styles.section}>
          <div className={styles.centeredColumn}>
            <div className={styles.circle} onClick={scrollToTop}>
              <Image src={UpArrow} width={80} height={100} />
            </div>
            <p>© SHY SNAPS 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
