import React from 'react';
import { Title, Form, Section, Repos } from './style';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Section>
        <Title>Catálogo de repositórios do Github</Title>
        <Form>
          <input placeholder="username/respository_name" />
          <button type="submit">Buscar</button>
        </Form>
      </Section>
      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/29557187?v=4"
            alt="repositório"
          />
          <div>
            <strong>DanielSCustodio/Course-Trybe</strong>
            <p>Exercícios feitos durante o material de explicação do course</p>
          </div>
          <span>ᐳ</span>
        </a>
      </Repos>
    </>
  );
};
