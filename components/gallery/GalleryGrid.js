import styles from '../../styles/Gallery.module.css';
import GalleryImage from './GalleryImage';

// import IMG0 from '../../public/shysnapsfillerphotos/IMG-7954.JPG';
// import IMG1 from '../../public/shysnapsfillerphotos/IMG-8725.JPG';
// import IMG2 from '../../public/shysnapsfillerphotos/LRG-03068.JPG';
// import IMG3 from '../../public/shysnapsfillerphotos/LRG-05361.JPG';
// import IMG4 from '../../public/shysnapsfillerphotos/LRG-07926.JPG';
// import IMG5 from '../../public/shysnapsfillerphotos/LRG-08048.JPG';
// import IMG6 from '../../public/shysnapsfillerphotos/LRG-08184.JPG';
// import IMG7 from '../../public/shysnapsfillerphotos/LRG-08229.JPG';
// import IMG8 from '../../public/shysnapsfillerphotos/LRG-08262.JPG';
// import IMG9 from '../../public/shysnapsfillerphotos/LRG-09958.JPG';

// const images = [IMG0, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9];

const GalleryGrid = ({ images }) => {
  return (
    <div className={styles.galleryGrid}>
      {images.map((image) => (
        <GalleryImage key={image.url} image={image} />
      ))}
    </div>
  );
};

export default GalleryGrid;
