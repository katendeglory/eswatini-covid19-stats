import React from 'react';
import './Header.scss';

const Header = () => {

  const changeUiMode = (e) => {
    if (document.body.classList.contains('dark-mode')) document.body.classList.replace('dark-mode', 'light-mode')
    else document.body.classList.replace('light-mode', 'dark-mode')
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
          <input type="checkbox" className="sul-checkbox-type-2" onChange={changeUiMode} />
        </div>
      </nav>
    </header>
  );
}

export default Header;