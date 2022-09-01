import React from 'react';
import { Title, Form, Section, Repos, Error } from './style';
import { api } from '../../service/api';
import { Link } from 'react-router-dom';
interface GithubRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@GitCollection:repositories');
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }

    return [];
  });
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const formElement = React.useRef<HTMLFormElement | null>(null);

  React.useEffect(() => {
    localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos));
  }, [repos]);

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
    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);
      const { data } = response;
      setRepos([data, ...repos]);
      formElement.current?.reset();
      setNewRepo('');
      setInputError('');
    } catch (error) {
      setInputError(
        `Não existe nenhum repositório que corresponda a "${newRepo}".`,
      );
    }
  };
  return (
    <>
      <Section>
        <Title>Catálogo de repositórios do GitHub</Title>
        <Form
          ref={formElement}
          onSubmit={handleAddRepo}
          hasError={Boolean(inputError)}
        >
          <input placeholder="username/repositorio" onChange={handleChange} />
          <button type="submit">Buscar</button>
        </Form>
        {inputError && <Error>{inputError}</Error>}
      </Section>

      {repos.length > 0 && (
        <Repos>
          {repos.map((item, index) => (
            <Link
              to={`/repositories/${item.full_name}`}
              key={item.full_name + index}
            >
              <img src={item.owner.avatar_url} alt={item.owner.login} />
              <div>
                <strong>{item.full_name}</strong>
                <p>{item.description}</p>
              </div>
              <span>ᐳ</span>
            </Link>
          ))}
        </Repos>
      )}
    </>
  );
};
