import styles from '../../styles/Gallery.module.css';

const ImageDetails = ({ image }) => {
  return (
    <div className={styles.detailsSection}>
      <div className={styles.imageTitle}>{image.title}</div>
      <div className={styles.imageInfo}>DIMENSIONS: 1920 x 1200 px</div>
      <div className={styles.imageInfo}>FILE TYPE: JPG</div>
      <div className={styles.imageInfo}>CATEGORY: Product</div>
    </div>
  );
};

export default ImageDetails;
