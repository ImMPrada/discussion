import {
  Route
} from "react-router-dom";
import { ROUTES } from '../routes';

import { 
  SignIn,
  SignUp,
  SignOut,
} from "../../components/UI/pages";


const { MAIN } = ROUTES

const PublicRoutes  = () => (
  <>
    <Route exact path={ MAIN.SIGNIN }>
      <SignIn />
    </Route>
    <Route exact path={ MAIN.SIGNUP }>
      <SignUp />
    </Route>
    <Route exact path={ MAIN.SIGNOUT }>
      <SignOut />
    </Route>
  </>
)

export default PublicRoutes