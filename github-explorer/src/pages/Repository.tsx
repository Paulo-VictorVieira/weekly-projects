import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from '../styles/Repository.module.css';
import api from '../services/api';
import logoImg from '../assets/logo.svg';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Dashboard: React.FC = () => {
  const [repository, setRepository] = React.useState<Repository | null>(null);
  const [issues, setIssues] = React.useState<Issue[]>([]);

  const params = useParams();
  const rota = `${params.repository}${params['*']}`;

  React.useEffect(() => {
    api.getRepository(rota).then((response) => setRepository(response.data));

    api.getIssues(rota).then((response) => setIssues(response.data));
  }, [rota]);

  return (
    <div className="animeLeft">
      <header className={styles.header}>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </header>

      {repository && (
        <section className={styles.repositoryInfo}>
          <header className={styles.repositoryInfoHeader}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>
          <ul className={styles.repositoryInfoList}>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <p>Stars</p>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <p>Forks</p>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <p>Issues abertas</p>
            </li>
          </ul>
        </section>
      )}

      <div className={styles.repository}>
        {issues &&
          issues.map((issue) => (
            <a key={issue.id} href={issue.html_url}>
              <div>
                <strong>{issue.title}</strong>
                <p>{issue.user.login}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
