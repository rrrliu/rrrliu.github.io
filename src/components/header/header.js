import { Link } from 'gatsby';
import React from 'react';
import './header.css';

const Header = () => (
  <header className="header">
    <div
      className="header-links"
      style={{
        margin: `0 auto`,
        textAlign: `right`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem 0`,
      }}
    >
      <HeaderLink to="/">About</HeaderLink>
      <HeaderLink to="/shelf">Shelf</HeaderLink>
      <HeaderLink to="/projects">Projects</HeaderLink>
    </div>
  </header>
);

const HeaderLink = ({ to, children }) => {
  return (
    <Link activeStyle={{ fontWeight: 500 }} to={to}>
      {children}
    </Link>
  );
};

export default Header;
