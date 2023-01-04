import styles from './GalleryGrid.module.css';
import GalleryImage from './GalleryImage';

const GalleryGrid = ({ images }) => {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image) => (
        <GalleryImage key={image.key} image={image} />
      ))}
    </div>
  );
};

export default GalleryGrid;
