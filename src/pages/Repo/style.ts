import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  @media (max-width: 720px) {
    margin-top: 2rem;
    width: 90%;
    overflow-x: hidden;
  }

  h1 {
    color: #c9d1d9;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 1.5rem;
    }
  }
  button {
    background: #21262d;
    color: #c9d1d9;
    transition: color 0.2s;
    padding: 5px 16px;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid #30363d;
    border-radius: 6px;

    &:hover {
      background-color: #30363d;
      border-color: #6e7681;
    }
  }
`;

export const RepoInfo = styled.section`
  color: #c9d1d9;
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;

  @media (max-width: 720px) {
    width: 90%;
    overflow-x: hidden;
  }

  header {
    display: flex;
    align-items: center;
    @media (max-width: 720px) {
      justify-content: space-around;
    }

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      @media (max-width: 720px) {
        width: 60px;
        height: 60px;
      }
    }

    div {
      margin-left: 1.5rem;
      strong {
        font-size: 20px;
        @media (max-width: 720px) {
          font-size: 1rem;
        }
      }
      p {
        font-size: 1rem;
        color: #a8a8b3;
        @media (max-width: 720px) {
          font-size: 14px;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;
    @media (max-width: 720px) {
      justify-content: space-around;
    }
  }

  li {
    & + li {
      margin-left: 5rem;
      @media (max-width: 720px) {
        margin-left: 2rem;
      }
    }
    strong {
      display: block;
      font-size: 2rem;
      @media (max-width: 720px) {
        font-size: 1.5rem;
      }
    }

    span {
      display: block;
      margin-top: 0.25rem;
      color: #a8a8b3;
    }
  }
`;

export const Issues = styled.section`
  margin: 0 auto;
  margin-top: 5rem;
  margin-bottom: 2rem;
  max-width: 70%;
  color: #c9d1d9;

  @media (max-width: 720px) {
    max-width: 90%;
    overflow-x: hidden;
  }
  h2 {
    margin: 2rem 0;
    text-transform: uppercase;
  }
  a {
    background-color: #0d1117;
    border: 1px solid #30363d;
    padding: 1.5rem;
    border-radius: 6px;
    width: 100%;
    display: flex;
    align-items: center;
    transition: transform 0.5s;
    @media (max-width: 720px) {
      padding: 1rem;
      transition: none;
    }

    &:hover {
      transform: translateX(6px);
    }

    & + a {
      margin-top: 1rem;
    }

    div {
      margin: 0 1rem;
      flex: 1;
      strong {
        font-size: 1rem;
      }
      p {
        font-size: 1rem;
        color: #a8a8b3;
      }
    }

    span {
      margin-left: auto;
      color: #a8a8b3;
    }
  }
`;
