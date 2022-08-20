import Image from 'next/image';
import ImageDetails from '../../components/details/ImageDetails';
import styles from '../../styles/Gallery.module.css';

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.serverUrl}/images`);
  const data = await res.json();

  const paths = data.slice(0, 10).map((image) => {
    return {
      params: { id: image.key.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`${process.env.serverUrl}/images/${id}`);
  const data = await res.json();

  return {
    props: { image: data },
  };
};

const Details = ({ image }) => {
  return (
    <>
      <div>{'<- BACK TO GALLERY'}</div>
      <div className={styles.imageDetailsContainer}>
        <div className={styles.imageSection}>
          <Image src={image.signedUrl} height='500px' width='500px' />
        </div>
        <ImageDetails image={image} />
      </div>
    </>
  );
};

export default Details;
