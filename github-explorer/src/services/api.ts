import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
});

const create = () => {
  const getRepository = (repo: string) => apiClient.get(`/repos/${repo}`);

  const getIssues = (repo: string) => apiClient.get(`/repos/${repo}/issues`);

  return { getRepository, getIssues };
};

const api = create();

export default api;
