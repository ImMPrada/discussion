import { createContext, useState } from 'react'
import { 
  AuthContextTypes,
  AuthProviderProps,
  LoginParams,
} from './types'
import { User } from '../../types'
import { get } from '../../utils/http'


export const AuthContext = createContext<AuthContextTypes | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const getSessionStatus = () => {

  }

  const login = async ({ nickname, password }: LoginParams) => {

    if( password !== 'Password1!') return 
    const user = await get(`${process.env.REACT_APP_API_URL}/api/users/${nickname}`) as any;

    setCurrentUser(user)
  }

  const logout = () => {

    setCurrentUser(null)
    //redirect
  }

  const contextVal: AuthContextTypes = {
    currentUser,
    getSessionStatus,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}