import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>SHY SNAPS</div>
      <div className='content'>
        <div className='links'>
          <Link href='/'>HOME</Link>
          <Link href='/gallery'>GALLERY</Link>
          <Link href='/services'>SERVICES</Link>
        </div>
      </div>
      <div className='connect'>
        <Link href='/connect'>CONNECT</Link>
      </div>
    </nav>
  );
};

export default Navbar;
