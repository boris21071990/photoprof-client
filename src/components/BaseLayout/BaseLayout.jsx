import React from 'react';

import GlobalStyle from '../../theme/GlobalStyle';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BaseLayout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
