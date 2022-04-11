
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ROUTES } from '../routes'
import PrivateRoutes from '../PrivateRoutes';
import PublicRoutes from '../PublicRoutes';

const { MAIN, POST } = ROUTES

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ [ ...Object.values(POST) ] }>
          <PrivateRoutes />
        </Route>
        <Route exact path={ [ ...Object.values(MAIN) ] }>
          <PublicRoutes />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
