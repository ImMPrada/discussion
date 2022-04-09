import { createContext } from 'react'
import { posts, profiles } from '../../mocks';
import { Post, ProfileData } from '../../types'

interface DataContextTypes {
  posts: Post[],
  profiles: ProfileData[],
}

export const DataContext = createContext<DataContextTypes | null>(null);

export const DataProvider = ({ children }: any) => {


  const contextVal = {
    posts,
    profiles,
  }

  return (
    <DataContext.Provider value={contextVal}>
      {children}
    </DataContext.Provider>
  )
}