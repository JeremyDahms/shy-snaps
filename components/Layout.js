import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        margin: '0px 50px',
      }}
    >
      <Navbar />
      <div
        style={{
          padding: '5rem 0',
          minHeight: '80vhvh',
        }}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
