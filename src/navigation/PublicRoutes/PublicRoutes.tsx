import {
  Route
} from "react-router-dom";
import { ROUTES } from '../routes';

import { 
  SignIn,
  SignUp,
  SignOut,
  PostsSection,
} from "../../components/UI/pages";


const { MAIN, POST } = ROUTES

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
    <Route exact path={ POST.ROOT }>
      <PostsSection />
    </Route>
    <Route exact path={ POST.MAIN }>
      <PostsSection />
    </Route>
  </>
)

export default PublicRoutes