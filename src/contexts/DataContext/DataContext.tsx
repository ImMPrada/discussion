import { createContext, useState } from 'react'
import { posts, profiles } from '../../mocks';
import { Post, ProfileData } from '../../types'

interface DataContextTypes {
  allPosts: Post[] | null,
  setAllPosts: React.Dispatch<React.SetStateAction<Post[] | null>>,
  profiles: ProfileData[],
}

export const DataContext = createContext<DataContextTypes | null>(null);

export const DataProvider = ({ children }: any) => {
  const [allPosts, setAllPosts] = useState<Post[] | null>(posts)


  const contextVal = {
    allPosts,
    setAllPosts,
    profiles,
  }

  return (
    <DataContext.Provider value={contextVal}>
      {children}
    </DataContext.Provider>
  )
}