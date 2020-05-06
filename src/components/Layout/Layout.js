import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Helmet } from 'react-helmet';
import './Layout.scss';

const Layout = (props) => {

  React.useEffect(() => document.body.classList.add('dark-mode'), []);

  return (
    <div className="layout">
      <Helmet>
        <title>Eswatini Covid-19 Stats</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.1/css/all.css" />
        {/* <link rel="stylesheet" href="https://katendeglory.github.io/soft-ui-library/css/neumorphism-ui.css" /> */}
        <link rel="stylesheet" href="http://10.0.0.5:5500/css/neumorphism-ui.css" />
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