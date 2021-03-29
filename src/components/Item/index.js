/* eslint-disable react/prop-types */
import * as S from './styles';

const Item = ({
  name,
  company,
  role,
  id,
}) => (
  <S.Container to={id}>
    <h2>{name}</h2>
    <p>{company}</p>
    <p>{role}</p>
  </S.Container>
);

export default Item;
