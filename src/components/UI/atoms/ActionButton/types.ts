import { ReactNode, ButtonHTMLAttributes } from 'react';

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  text: string;
  color?: 'danger' | 'primary';
}
