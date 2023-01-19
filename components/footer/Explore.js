import Link from 'next/link';
import styles from './Footer.module.css';

const Explore = () => {
  return (
    <div className={styles.section}>
      <p>EXPLORE</p>
      <hr className={styles.underline} />
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link href='/'>HOME </Link>
          <Link href='/gallery'>GALLERY</Link>
          <Link href='/services'>SERVICES</Link>
          <Link href='/connect'>CONNECT</Link>
        </div>
        <div className={styles.links}>
          <Link href='/'>PRIVACY</Link>
          <Link href='/'>COOKIES</Link>
          <Link href='/'>TERMS</Link>
          <Link href='/'>SITEMAP</Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;
