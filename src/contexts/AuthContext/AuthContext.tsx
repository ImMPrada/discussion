import { createContext, useState, useEffect } from 'react'
import { 
  AuthContextTypes,
  AuthProviderProps,
  LoginParams,
} from './types'
import { User } from '../../types'
import { get } from '../../utils/http'

const UNKNOWN_USER_AVATAR = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
const UNKNOWN_USER_NICKNAME = 'JohnDoe'
const UNKNOWN_USER = {
  id: null,
  nickname: UNKNOWN_USER_NICKNAME,
  avatar: UNKNOWN_USER_AVATAR,
}


export const AuthContext = createContext<AuthContextTypes | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User>(UNKNOWN_USER)


  const login = async ({ nickname, password }: LoginParams) => {

    if( password !== 'Password1!') return 
    const user = await get(`${process.env.REACT_APP_API_URL}/api/users/${nickname}`) as any;

    setCurrentUser(user)
  }

  const logout = () => {

    setCurrentUser(UNKNOWN_USER)
    //redirect
  }

  const contextVal: AuthContextTypes = {
    currentUser,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}