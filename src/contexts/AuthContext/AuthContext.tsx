import { createContext } from 'react'
import { currentUser } from '../../mocks';
import { ProfileData } from '../../types'

interface AuthContextTypes {
  currentUser: ProfileData,
}

export const AuthContext = createContext<AuthContextTypes | null>(null);

export const AuthProvider = ({ children }: any) => {


  const contextVal = {
    currentUser,
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}