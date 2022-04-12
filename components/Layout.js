import Footer from './Footer';
import Navbar from './Navbar';

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
      <div style={{ paddingBottom: '5rem' }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
