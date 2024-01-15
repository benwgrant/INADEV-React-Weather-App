import React from 'react';
import logo from './logo.svg';

const Header = () => {
  return (
    <header className="app-header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>INADEV Weather Project</h1>
    </header>
  );
};

export default Header;
