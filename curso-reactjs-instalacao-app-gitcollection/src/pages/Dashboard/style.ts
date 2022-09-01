import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}
export const Title = styled.h1`
  font-size: 28px;
  color: #c9d1d9;
  max-width: 950px;
  line-height: 56px;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 2rem;
  max-width: 700px;

  input {
    background-color: #010409;
    flex: 1;
    font-size: 14px;
    height: 2.5rem;
    padding: 0 24px;
    border: 1px solid #30363d;
    border-radius: 5px 0 0 5px;
    color: #c9d1d9;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #5aa5fb;
      `}

    &::placeholder {
      color: #3c424a;
    }
  }

  button {
    width: 100px;
    background-color: #238636;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.5s;

    &:hover {
      background-color: #40c463;
    }
  }
`;

export const Section = styled.section`
  background-color: #0d1117;
  padding: 3rem;
  border-radius: 6px;
  border: 1px solid #30363d;
  margin-top: 5rem;
  width: 70%;
  margin: 0 auto;
`;

export const Repos = styled.section`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 70%;

  a {
    background-color: #0d1117;
    border: 1px solid #30363d;
    padding: 3rem;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: transform 0.5s;

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 1rem;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 1rem;
      flex: 1;

      strong {
        font-size: 20px;
        color: #c9d1d9;
      }

      p {
        font-size: 1rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    span {
      color: white;
      font-size: 1rem;
    }
  }
`;

export const Error = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  margin-top: 1rem;
  color: #c9d1d9;
`;
