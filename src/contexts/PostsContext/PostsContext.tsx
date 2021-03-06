import { createContext, useState, useContext } from 'react'
import { AuthContext } from '../AuthContext';
import { AuthContextTypes } from '../AuthContext/types';
import { Post } from '../../types'
import { PostsContextTypes, PostsProviderProps, PostPayload } from './types';
import { get, post, del } from '../../utils/http'

export const PostsContext = createContext<PostsContextTypes | null>(null);

export const PostsProvider = ({ children }: PostsProviderProps) => {
  const [allPosts, setAllPosts] = useState<Post[]>([])
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;

  const getPosts = async () => {
    
    const posts = await get(`${process.env.REACT_APP_API_URL}/api/posts`) as Post[];
    setAllPosts(posts)
  }

  const createPost = async (payload: PostPayload) => {
    if (!currentUser) return;

    const result = await post(`${process.env.REACT_APP_API_URL}/api/posts`, {...payload, userId: currentUser.id}) as Post;
   
    setAllPosts([...allPosts, result])
  }

  const updatePost = (id: number, payload: Post) => {

    const postIndex = allPosts.findIndex(post => post.id === id)
    if (postIndex === -1) return

    const postUpdated = {...allPosts[postIndex], ...payload}
    const allPostsTemporal = [...allPosts]
    allPostsTemporal[postIndex] = postUpdated
    setAllPosts(allPostsTemporal)
  }

  const deletePost = async (id: number) => {
   
    await del(`${process.env.REACT_APP_API_URL}/api/posts/${id}`);
    const posts = await get(`${process.env.REACT_APP_API_URL}/api/posts`) as Post[];

    setAllPosts(posts)
  }

  const responsePost = async (id: number) => {
    const i = allPosts.findIndex(post => post.id === id)

    const allPostsTemporal = [...allPosts]

    allPostsTemporal[i].thread.push({
      id: 1,
      createdAt: new Date().toISOString(),
      content: '',
      userId: 1,
      reactionsScore: 0,
      thread: [],
      receiverId: id,
      user: {
        id: 1,
        nickname: currentUser?.nickname || '',
        avatar: currentUser?.avatar || '',
      }
    })

    setAllPosts(allPostsTemporal)
  }

  const contextVal: PostsContextTypes= {
    allPosts,
    getPosts,
    createPost,
    updatePost,
    deletePost,
    responsePost,
  }

  return (
    <PostsContext.Provider value={contextVal}>
      {children}
    </PostsContext.Provider>
  )
}