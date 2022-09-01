import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepoInfo } from './style';
import logo from '../../assets/logo-git-collection.svg';
interface RepositoryParams {
  repository: string;
}
export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="GitCollection" />
        <Link to="/">˂ &nbsp;Voltar</Link>
      </Header>
      <RepoInfo>
        <header>
          <img src="" alt="xablau" />
          <div>
            <strong>{params.repository}</strong>
            <p>Pellentesque in ipsum id orci porta dapibus.</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>565</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>265</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>05</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepoInfo>
    </>
  );
};
