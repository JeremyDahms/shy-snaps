import Image from 'next/image';
import Link from 'next/link';

const GalleryImage = ({ image }) => {
  return (
    <Link href={`/gallery/${image.key}`} key={image.key}>
      <a style={{ position: 'relative' }}>
        <Image
          src={image.signedUrl}
          alt='pic'
          layout='fill'
          objectFit='cover'
        />
      </a>
    </Link>
  );
};

export default GalleryImage;
