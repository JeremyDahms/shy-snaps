import styles from '../../styles/Gallery.module.css';
import GalleryImage from './GalleryImage';

const GalleryGrid = ({ images }) => {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image) => (
        <GalleryImage key={image.signedUrl} image={image} />
      ))}
    </div>
  );
};

export default GalleryGrid;
