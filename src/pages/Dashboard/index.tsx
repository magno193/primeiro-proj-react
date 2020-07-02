import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github-logo" />
    <Title>Explore repositórios no Github</Title>
    <Form action="">
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/34192221?s=460&u=c34d9e441820b91d7f12753efd42cf27b3e8e5a7&v=4"
          alt="Alexandre Ferreira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scallabe ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/34192221?s=460&u=c34d9e441820b91d7f12753efd42cf27b3e8e5a7&v=4"
          alt="Alexandre Ferreira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scallabe ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/34192221?s=460&u=c34d9e441820b91d7f12753efd42cf27b3e8e5a7&v=4"
          alt="Alexandre Ferreira"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy high scallabe ReactJS & React Native forms!</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
