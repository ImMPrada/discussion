import { useContext } from 'react'
import {
  Route,
  useHistory
} from "react-router-dom";
import { AuthContext } from '../../contexts/AuthContext';
import { AuthContextTypes } from '../../contexts/AuthContext/types';
import { ROUTES } from '../routes'

import { PostsSection } from '../../components/UI/pages';


const { POST, MAIN } = ROUTES

const PrivateRoutes = () => {
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;
  const history = useHistory();
  if (!currentUser) {
    history.push(MAIN.SIGNIN)
  }

  return (
    <>
      <Route exact path={ POST.ROOT }>
        <PostsSection />
      </Route>
      <Route exact path={ POST.MAIN }>
        <PostsSection />
      </Route>
    </>
  )
}

export default PrivateRoutes