import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Header, RepoInfo, Issues } from './style';
import { api } from '../../service/api';
interface RepositoryParams {
  repository: string;
}

interface GithubRepository {
  full_name: string;
  description: string;
  forks_count: number;
  open_issues_count: number;
  stargazers_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface GithubIssues {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

export const Repo: React.FC = () => {
  const [repository, setRepositiry] = React.useState<GithubRepository | null>(
    null,
  );

  const [issues, setIssues] = React.useState<GithubIssues[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  React.useEffect(() => {
    api
      .get(`repos/${params.repository}`)
      .then(response => setRepositiry(response.data));

    api
      .get(`repos/${params.repository}/issues`)
      .then(response => setIssues(response.data));
  }, [params.repository]);
  return (
    <>
      <Header>
        {repository && <h1>{repository.owner.login}</h1>}
        <button>
          <Link to="/">Voltar</Link>
        </button>
      </Header>
      {repository && (
        <RepoInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues Abertas</span>
            </li>
          </ul>
        </RepoInfo>
      )}
      <Issues>
        {issues.length > 0 && <h2>issues</h2>}
        {issues.map(item => (
          <a
            href={item.html_url}
            key={item.id}
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <strong>{item.title}</strong>
              <p>{item.user.login}</p>
            </div>
            <span>ᐳ</span>
          </a>
        ))}
      </Issues>
    </>
  );
};
