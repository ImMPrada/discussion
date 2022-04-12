import { PostUser } from '../../../../types'
export interface MessageProps {
  user: PostUser;
  content: string;
  createdAt: string;
  postId: number;
  receiver: number | null;
}