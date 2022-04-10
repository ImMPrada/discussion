import React, { useContext, useEffect }  from 'react'
import {
  Route
} from "react-router-dom";
import { AuthProvider } from '../../contexts/AuthContext';
import { ROUTES } from '../routes'

import { PostsSection } from '../../components/UI/pages';


const { POST } = ROUTES

const PrivateRoutes = () => (
  <AuthProvider>
    <Route exact path={ POST.MAIN }>
      <PostsSection />
    </Route>
  </AuthProvider>
)

export default PrivateRoutes