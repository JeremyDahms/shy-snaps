import Image from 'next/image';

export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos');
  const data = await res.json();

  const paths = data.slice(0, 10).map((image) => {
    return {
      params: { id: image.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const data = await res.json();

  return {
    props: { image: data },
  };
};

const Details = ({ image }) => {
  return (
    <div>
      <h1>{image.title}</h1>
      <Image src={image.url} height='500px' width='500px' />
    </div>
  );
};

export default Details;
