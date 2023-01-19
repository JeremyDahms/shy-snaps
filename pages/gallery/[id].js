import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ImageDetails from '../../components/details/ImageDetails';
import styles from '../../styles/Gallery.module.css';

const Details = () => {
  const [image, setImage] = useState();
  const router = useRouter();

  useEffect(() => {
    const { id } = router.query;
    fetch(`${process.env.serverUrl}/images/${id}/signedUrl`)
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    image && (
      <>
        <div>{'<- BACK TO GALLERY'}</div>
        <div className={styles.imageDetailsContainer}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image src={image.signedUrl} layout='fill' objectFit='contain' />
            </div>
          </div>
          <ImageDetails image={image} />
        </div>
      </>
    )
  );
};

export default Details;
