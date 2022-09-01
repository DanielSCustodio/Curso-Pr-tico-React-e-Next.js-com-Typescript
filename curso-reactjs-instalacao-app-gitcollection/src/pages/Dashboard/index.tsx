import React from 'react';
import { Title, Form, Section, Repos, Error } from './style';
import { api } from '../../service/api';

interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>([]);
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setNewRepo(event.target.value);
  };

  const handleAddRepo = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Informe o username/repositorio');
      return;
    }
    const response = await api.get<GithubRepository>(`repos/${newRepo}`);
    const { data } = response;
    setRepos([data, ...repos]);
    setNewRepo('');
  };
  return (
    <>
      <Section>
        <Title>Catálogo de repositórios do GitHub</Title>
        <Form onSubmit={handleAddRepo} hasError={Boolean(inputError)}>
          <input placeholder="username/repositorio" onChange={handleChange} />
          <button type="submit">Buscar</button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
      </Section>

      {repos.length > 0 && (
        <Repos>
          {repos.map(item => (
            <a href="/repositories" key={item.full_name}>
              <img src={item.owner.avatar_url} alt={item.owner.login} />
              <div>
                <strong>{item.full_name}</strong>
                <p>{item.description}</p>
              </div>
              <span>ᐳ</span>
            </a>
          ))}
        </Repos>
      )}
    </>
  );
};
