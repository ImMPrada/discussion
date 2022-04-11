import { createContext, useState, useContext } from 'react'
import { AuthContext } from '../AuthContext';
import { AuthContextTypes } from '../AuthContext/types';
import { posts } from '../../mocks';
import { Post } from '../../types'
import { PostsContextTypes, PostsProviderProps, PostPayload } from './types';


export const PostsContext = createContext<PostsContextTypes | null>(null);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;

  // Get todos los posts
  const getPosts = () => {

    setAllPosts(posts)
  }

  // Crear un post
  const createPost = (payload: PostPayload) => {
    if (!currentUser) return;


    const result = {
      id: allPosts.slice(-1)[0].id + 1,
      userId: currentUser.id,
      createdAt: new Date().toISOString(),
      reactionsScore: 0,
      thread: [],
      user: {
        nickname: currentUser.nickname,
        avatar: currentUser.avatar
      },
      ...payload
    }

    setAllPosts([...allPosts, result])
  }

  // Actualizar un post
  const updatePost = (id: number, payload: Post) => {

    const postIndex = allPosts.findIndex(post => post.id === id)
    if (postIndex === -1) return

    const postUpdated = {...allPosts[postIndex], ...payload}
    const allPostsTemporal = [...allPosts]
    allPostsTemporal[postIndex] = postUpdated
    setAllPosts(allPostsTemporal)
  }

  // Delete un post
  const deletePost = (id: number) => {

    const postIndex = allPosts.findIndex(post => post.id === id)
    if (postIndex === -1) return

    const allPostsTemporal = [...allPosts]
    allPostsTemporal.splice(postIndex, 1)
    setAllPosts(allPostsTemporal)
  }

  const contextVal: PostsContextTypes= {
    allPosts,
    getPosts,
    createPost,
    updatePost,
    deletePost,
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}