export interface MessageBodyProps {
  message: string;
  receiver: number | null;
  onClick: (payload: any) => void;
}