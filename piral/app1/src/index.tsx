import * as React from 'react';
import { Link } from 'react-router-dom';
import { SetRoute } from 'piral';
import type { PiletApi } from 'app-shell';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.registerPage('/webchat', Page);

  app.showNotification('Hello from Piral!', {
    autoClose: 2000,
  });

  app.registerMenu(() => <Link to="/webchat">Page</Link>);
  app.registerTile(() => <div>Welcome to Piral!</div>, {
    initialColumns: 2,
    initialRows: 2,
  });

  // Define the route using SetRoute
  return <SetRoute path="/webchat" component={Page} />

}
