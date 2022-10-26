import Footer from './footer';
import Navbar from './navbar';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        margin: '0 50px 0 50px',
      }}
    >
      <Navbar />
      <div style={{ paddingBottom: '5rem', minHeight: '80vhvh' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
