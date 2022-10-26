import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import styles from './SocialFollow.module.css';
import Image from 'next/image';
import PinterestIcon from '../../icons/PinterestIcon.png';

const SocialFollow = () => {
  return (
    <div className={styles.socialContainer}>
      <p>FOLLOW</p>
      <div className={styles.row}>
        <a
          className={styles.social}
          href='https://www.instagram.com/shy_snaps/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faInstagram} size='2x' />
        </a>
        <a
          className={styles.social}
          href='https://www.pinterest.com/shylasnaps/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image src={PinterestIcon} width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

export default SocialFollow;
