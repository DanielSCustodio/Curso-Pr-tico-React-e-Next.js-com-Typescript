import React from 'react';
import { Title, Form, Section, Repos } from './style';
import logo from '../../assets/logo-git-collection.svg';
export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Git Collection" />
      <Section>
        <Title>Catálogo de repositórios do Github</Title>
        <Form>
          <input placeholder="username/respository_name" />
          <button type="submit">Buscar</button>
        </Form>
      </Section>
      <Repos>
        <a href="/repositories">
          <img src="" alt="repositórios" />
          <div>
            <strong>DanielSCustodio/Course-Trybe</strong>
            <p>Exercícios feitos durante o material de explicação do course</p>
          </div>
        </a>
      </Repos>
    </>
  );
};
