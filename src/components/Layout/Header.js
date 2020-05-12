import React from 'react';
import ls from 'local-storage';

import './Header.scss';

const Header = () => {

  const [checked, setChecked] = React.useState(ls.get('ui-mode') === 'dark-mode');

  // document can be used as long as it is not called before render to trigger document is not defined
  // it must be placed in a lifecycle method or an event listenner
  const changeUiMode = (e) => {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.replace('dark-mode', 'light-mode');
      ls.set('ui-mode', 'light-mode');
    }
    else {
      document.body.classList.replace('light-mode', 'dark-mode');
      ls.set('ui-mode', 'dark-mode');
    }

    setChecked(!checked);
  }

  return (
    <header className="sul-box-raised-2 sm">
      <nav className="container">
        <a href="/" className="nav-brand">
          <img src="https://cdn0.iconfinder.com/data/icons/195-flat-flag-psd-icons/70/Swaziland.png"
            alt="🇸🇿"
            className="brand-logo"
          />
          <span className="brand-text">Eswatini Stats</span>
        </a>
        <div className="nav-menu">
          <input type="checkbox" checked={checked} className="sul-checkbox-type-2" onChange={changeUiMode} />
        </div>
      </nav>
    </header>
  );
}

export default Header;