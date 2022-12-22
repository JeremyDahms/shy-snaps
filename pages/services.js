import Image from 'next/image';
import RightArrow from '../icons/RightArrow.png';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <Image src={RightArrow} layout='responsive' alt='tbd' />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam lorem ipsum.
        </div>
      </div>
      <div className={styles.serviceColumns}>
        <div className={styles.service}>
          <Image src={RightArrow} layout='responsive' alt='tbd' />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam lorem ipsum.
          </div>
        </div>
        <div className={styles.service}>
          <Image src={RightArrow} layout='responsive' alt='tbd' />
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam lorem ipsum.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
