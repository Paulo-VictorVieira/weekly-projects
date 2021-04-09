import React from 'react';
import styles from '../styles/Dashboard.module.css';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../assets/logo.svg';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  description: string;
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const [repositories, setRepositories] = React.useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    );

    if (storageRepositories) {
      return JSON.parse(storageRepositories);
    } else {
      return [];
    }
  });

  React.useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!inputError) {
      setInputError('Digite o autor/nome do repositório !');
      return;
    }

    try {
      const response = await api.getRepository(newRepo);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório !');
    }
  };

  return (
    <div className="animeLeft">
      <img src={logoImg} alt="Github Explorer" />
      <h1 className={styles.title}>Explore repositórios no github.</h1>

      <form
        className={`${styles.form} ${!!inputError && styles.hasError}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={({ target }) => setNewRepo(target.value)}
        />

        <button type="submit">Pesquisar</button>
      </form>

      {inputError && <span className={styles.error}>{inputError}</span>}

      <div className={styles.repository}>
        {repositories.length > 0 ? (
          repositories.map((repository) => (
            <Link
              key={repository.description}
              to={`/repositories/${repository.full_name}`}
            >
              <img
                src={repository.owner.avatar_url}
                alt={repository.owner.login}
              />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
              <FiChevronRight size={20} />
            </Link>
          ))
        ) : (
          <p>Faça uma busca por um repositório !</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
