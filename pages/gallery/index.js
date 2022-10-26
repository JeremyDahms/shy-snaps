import Head from 'next/head';
import GalleryGrid from '../../components/gallery/GalleryGrid';
import Search from '../../components/search';
import styles from '../../styles/Gallery.module.css';

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.serverUrl}/images`);
  const data = await res.json();

  return {
    props: { images: data.slice(0, 10) },
  };
};

const Gallery = ({ images }) => {
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
      <GalleryGrid images={images} />
    </>
  );
};

export default Gallery;
