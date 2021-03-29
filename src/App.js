import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

import GlobalStyle from './styles/global';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Header />
      <Routes />
    </Router>
  </>
);

export default App;
