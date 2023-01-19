import Head from 'next/head';
import GalleryGrid from '../../components/gallery';
import Search from '../../components/search';
import styles from '../../styles/Gallery.module.css';

const Gallery = () => {
  return (
    <>
      <Head>
        <title>SHY SNAPS | GALLERY</title>
        <meta name='keywords' content='images' />
      </Head>
      <div className={styles.searchContainer}>
        <div>Filter</div>
        <div>Sort</div>
        <Search style={styles.search} />
      </div>
      <GalleryGrid />
    </>
  );
};

export default Gallery;
