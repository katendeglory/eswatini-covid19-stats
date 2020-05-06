import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Helmet } from 'react-helmet';
import './Layout.scss';

const Layout = (props) => {

  // document can be used as long as it is not called before render to trigger document is not defined
  // it must be placed in a lifecycle method or an event listenner
  React.useEffect(() => document.body.classList.add('dark-mode'), []);

  return (
    <div className="layout">
      <Helmet>
        <title>Eswatini Covid-19 Stats</title>
        <link rel="stylesheet" href="https://katendeglory.github.io/soft-ui-library/css/neumorphism-ui.css" />
      </Helmet>
      <Header />
      <div className="container">
        <main>
          {props.children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;