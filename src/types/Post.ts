export interface Post {
  postId: number;
  userId: number;
  date: string;
  content: string;
  responseTo: number | null;
}
