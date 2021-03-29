/* eslint-disable react/prop-types */
import * as S from './styles';

const Item = ({
  name,
  company,
  role,
}) => (
  <S.Container>
    <h2>{name}</h2>
    <p>{company}</p>
    <p>{role}</p>
  </S.Container>
);

export default Item;
