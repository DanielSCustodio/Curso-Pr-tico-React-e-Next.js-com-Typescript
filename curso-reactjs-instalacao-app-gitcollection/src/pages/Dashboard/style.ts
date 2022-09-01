import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 28px;
  color: #c9d1d9;
  max-width: 950px;
  line-height: 56px;
`;

export const Form = styled.form`
  display: flex;
  margin-top: 2rem;
  max-width: 700px;

  input {
    flex: 1;
    height: 3rem;
    padding: 0 24px;
    border: 2px solid #fff;
    border-radius: 5px 0 0 5px;
    color: #0d1117;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
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
  background-color: #0d1117;
  padding: 3rem;
  border-radius: 6px;
  border: 1px solid #30363d;
  margin-top: 5rem;
  width: 70%;
  margin: 0 auto;
  margin-top: 2rem;

  a {
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
      font-size: 20px;
    }
  }
`;
