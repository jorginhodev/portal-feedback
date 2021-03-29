import { Switch, Route } from 'react-router-dom';

import List from '../pages/List';
import Details from '../pages/Details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={List} />
    <Route path="/:id" component={Details} />
  </Switch>
);

export default Routes;
