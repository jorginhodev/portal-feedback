import logoImg from '../../assets/logo.svg';
import * as S from './styles';

const Header = () => (
  <S.Container>
    <S.Content>
      <h1>
        <img src={logoImg} alt="Logo Portal Feedback" />
        Portal Feedback
      </h1>
    </S.Content>
  </S.Container>
);

export default Header;
