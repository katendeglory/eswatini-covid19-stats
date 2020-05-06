import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Helmet } from 'react-helmet';

import './Layout.scss';
import './neumorphism.css';

const Layout = (props) => {

  const htmlRef = React.useRef(document.body);
  htmlRef.current.classList.add('dark-mode')

  return (
    <div className="layout">
      <Helmet>
        <title>Eswatini Covid-19 Stats</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" />
      </Helmet>
      <Header />
      <div className="container">
        <main>
          {props.children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;