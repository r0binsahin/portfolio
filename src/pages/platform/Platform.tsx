import { Outlet } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

function Platform() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '65px' }}>
        <Outlet />
      </div>
      <Footer scrollToTop={scrollToTop} />
    </>
  );
}

export default Platform;
