import React from 'react';
import Header from './Header';
import Footer from './Footer';

import { Helmet } from 'react-helmet';
import Loading from './../Utils/Loading';
import ls from 'local-storage';
import './Layout.scss';

import { OutboundLink } from 'gatsby-plugin-gtag'

const Layout = (props) => {

  const [loading, setLoading] = React.useState(true);

  // document can be used as long as it is not called before render to trigger document is not defined
  // it must be placed in a lifecycle method or an event listenner
  React.useEffect(() => {
    document.body.classList.add(ls.get('ui-mode') || 'dark-mode');
    setLoading(false);
  }, []);

  if (loading) return <Loading />

  return (
    <OutboundLink href='https://covid19eswatini.surge.sh/'>
      <div className="layout">
        <Helmet>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-166294029-2"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-166294029-2');
        </script>
          <title>Eswatini Covid-19 Stats</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
    </OutboundLink>
  );
}

export default Layout;