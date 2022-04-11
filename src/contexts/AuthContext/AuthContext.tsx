import { createContext, useState } from 'react'
import { 
  AuthContextTypes,
  AuthProviderProps,
  LoginParams,
} from './types'
import { User } from '../../types'
import { users } from '../../mocks'


export const AuthContext = createContext<AuthContextTypes | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const getSessionStatus = () => {

  }

  const login = ({ nickname, password }: LoginParams) => {

    const userTemporal = users.find(user => user.nickname === nickname && user.password === password)
    if (!userTemporal) return

    setCurrentUser(userTemporal)
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