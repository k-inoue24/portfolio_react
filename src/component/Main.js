import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import routes from '../routes/routes';

class Main extends React.Component {
  render() {
    return (
        <div className="inner">
          <Switch>
          {routes.map((route, idx) => (
            <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={idx}
            />
          ))}
          </Switch>
        </div>
      )
    }
  }
export default Main;
