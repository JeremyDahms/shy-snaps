import Link from 'next/link';
import styles from './Footer.module.css';

const Explore = () => {
  return (
    <div className={styles.section}>
      <p>EXPLORE</p>
      <hr className={styles.underline} />
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          <Link href='/gallery'>
            <a>GALLERY</a>
          </Link>
          <Link href='/services'>
            <a>SERVICES</a>
          </Link>
          <Link href='/'>
            <a>CONNECT</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href='/'>
            <a>PRIVACY</a>
          </Link>
          <Link href='/'>
            <a>COOKIES</a>
          </Link>
          <Link href='/'>
            <a>TERMS</a>
          </Link>
          <Link href='/'>
            <a>SITEMAP</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
