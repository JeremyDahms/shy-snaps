import styles from './Footer.module.css';
import EmailSignup from '../email-signup';
import SocialFollow from '../social-follow';

const Subscribe = () => {
  return (
    <div className={styles.section}>
      <p>SUBSCRIBE TO NEWSLETTER</p>
      <EmailSignup />
      <SocialFollow />
    </div>
  );
};

export default Subscribe;
