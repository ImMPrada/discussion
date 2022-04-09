import { createContext } from 'react'
import { currentUser } from '../../mocks';
import { AuthContextTypes } from '../../types'



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