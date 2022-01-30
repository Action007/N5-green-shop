import Header from '../components/components/Header/Header';
import Footer from '../components/components/Footer/Footer';
import Container from '../components/UI/Container';
import ScrollToTop from './ScrollToTop';

import React from 'react';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <ScrollToTop />
      <Container>
        {children}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;