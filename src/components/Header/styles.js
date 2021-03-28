import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem;

  h1 {
    color: #fff;
    display: flex;
    justify-content: center;

    img {
      width: 48px;
      margin-right: 0.5rem;
    }
  }
`;
