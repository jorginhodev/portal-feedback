import styled from 'styled-components';

export const Container = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 40px;
  justify-content: center;
`;

export const Actions = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  button {
    height: 50px;
    width: 90px;
    border-radius: 10px;
    color: var(--shape);
    transition: 0.3s;

    &:nth-of-type(1) {
      background: var(--red);
      border: 2px solid var(--red);

      &:hover {
        background: transparent;
        color: var(--red);
      }
    }

    &:nth-of-type(2) {
      background: var(--blue);
      border: 2px solid var(--blue);

      &:hover {
        background: transparent;
        color: var(--blue);
      }
    }
  }
`;
