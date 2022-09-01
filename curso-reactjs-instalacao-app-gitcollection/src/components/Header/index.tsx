import React from 'react';
import { Nav } from './style';
import logo from '../../assets/logo-git-collection.svg';

export const Header: React.FC = () => {
  return (
    <Nav>
      <a href="/">
        <img src={logo} alt="Git Collection" />
      </a>
      <a
        href="https://github.com/DanielSCustodio"
        target="_blank"
        rel="noreferrer"
      >
        <span>Desenvolvido por Daniel Custódio</span>
      </a>
    </Nav>
  );
};
