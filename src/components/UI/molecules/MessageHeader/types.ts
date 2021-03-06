import { PostUser } from '../../../../types';

export interface MessageHeaderProps {
  isYou: boolean;
  user: PostUser;
  createdAt: string;
  postId: number;
  isReceiver: boolean;
}
