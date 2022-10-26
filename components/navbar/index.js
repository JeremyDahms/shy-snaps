import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>SHY SNAPS</div>
      <div className='content'>
        <div className='links'>
          <Link href='/'>
            <a>HOME</a>
          </Link>
          <Link href='/gallery'>
            <a>GALLERY</a>
          </Link>
          <Link href='/services'>
            <a>SERVICES</a>
          </Link>
        </div>
      </div>
      <div className='cart'>CART</div>
    </nav>
  );
};

export default Navbar;
