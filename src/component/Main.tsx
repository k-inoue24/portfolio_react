import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Top from '../page/Top';
import Introduction from '../page/Introduction';
import Link from '../page/Link';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path="/" component={Top} exact />
          <Route path="/introduction" component={Introduction} />
          <Route path="/link" component={Link} />
          <Route component={Top} exact />
        </Switch>
      </main>
      )
    }
  }
export default Main;
