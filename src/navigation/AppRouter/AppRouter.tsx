
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ROUTES } from '../routes'
import PublicRoutes from '../PublicRoutes';

const { MAIN, POST } = ROUTES

const AppRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path={ [ ...Object.values(MAIN), ...Object.values(POST) ] }>
          <PublicRoutes />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter
