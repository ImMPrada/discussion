import { PostUser } from '../../../../types'
export interface MessageProps {
  user: PostUser;
  userId: number;
  content: string;
  createdAt: string;
}