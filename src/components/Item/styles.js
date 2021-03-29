import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: white;
  padding: 2.5rem 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  color: var(--text-title);

  p {
    color: var(--text-body);
  }

  &:hover {
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.05);
  }
`;
