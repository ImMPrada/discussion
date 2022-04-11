import { Post } from '../../types'
import { ReactNode } from 'react';

export interface PostsContextTypes {
  allPosts: Post[];
  getPosts: () => void;
  createPost: ( payload: PostPayload ) => void;
  updatePost: ( id: number, payload: Post ) => void;
  deletePost: ( id: number ) => void;
}

export interface PostsProviderProps {
  children: ReactNode;
}

export interface PostPayload {
  content: string;
  receiverId: number | null;
}
