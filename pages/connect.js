import Image from 'next/image';
import ConnectForm from '../components/connect-form';
import styles from '../styles/Connect.module.css';
import SocialFollow from '../components/social-follow';
import RightArrow from '../icons/RightArrow.png';

const Connect = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.header}>Let&apos;s Connect</div>
        <p>
          Ready to make art together? I would love to hear more about your
          project :)
        </p>
        <SocialFollow />
        <Image src={RightArrow} layout='responsive' alt='tbd' />
      </div>
      <div className={styles.rightSection}>
        <ConnectForm />
      </div>
    </div>
  );
};

export default Connect;
