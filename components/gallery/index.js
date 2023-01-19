import styles from './GalleryGrid.module.css';
import GalleryImage from './GalleryImage';
import { useEffect, useState } from 'react';

const GalleryGrid = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch(`${process.env.serverUrl}/images`)
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    images && (
      <div className={styles.galleryGrid}>
        {images.map((image) => (
          <GalleryImage key={image.key} image={image} />
        ))}
      </div>
    )
  );
};

export default GalleryGrid;
