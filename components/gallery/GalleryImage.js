import Image from 'next/image';
import Link from 'next/link';

const GalleryImage = ({ image }) => {
  return (
    <Link href={`/gallery/${image.id}`} key={image.id}>
      <a style={{ position: 'relative' }}>
        <Image
          src={image.thumbnailUrl}
          alt='pic'
          layout='fill'
          objectFit='cover'
        />
      </a>
    </Link>
  );
};

export default GalleryImage;
