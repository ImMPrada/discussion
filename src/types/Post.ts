export interface Post {
  id: number;
  userId: number;
  createdAt: string;
  content: string;
  receiverId: number | null;
  reactionsScore: number;
  thread: Post[];
  user: PostUser;
}

export interface PostUser {
  nickname: string;
  avatar: string;  
}
