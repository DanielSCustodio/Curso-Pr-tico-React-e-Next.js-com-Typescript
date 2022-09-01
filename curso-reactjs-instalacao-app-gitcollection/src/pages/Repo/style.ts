import styled from 'styled-components';

export const Header = styled.header`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;

  a {
    color: #c9d1d9;
    transition: color 0.2s;

    &:hover {
      color: #58a6ff;
    }
  }
`;

export const RepoInfo = styled.section`
  color: #c9d1d9;
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 1.5rem;
      strong {
        font-size: 20px;
      }
      p {
        font-size: 1rem;
        color: #a8a8b3;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 2.5rem;
  }

  li {
    & + li {
      margin-left: 5rem;
    }
    strong {
      display: block;
      font-size: 2rem;
    }

    span {
      display: block;
      margin-top: 0.25rem;
      color: #a8a8b3;
    }
  }
`;
