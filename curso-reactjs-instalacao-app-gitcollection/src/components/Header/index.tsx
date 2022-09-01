import React from 'react';
import { Nav } from './style';
import logo from '../../assets/logo-git-collection.svg';

export const Header: React.FC = () => {
  return (
    <Nav>
      <img src={logo} alt="Git Collection" />
      <span>Desenvolvido por Daniel Custódio</span>
    </Nav>
  );
};
