export interface Post {
  postId: number;
  userId: number;
  date: string;
  content: string;
  main: boolean | null;
  responses?: any;
}
