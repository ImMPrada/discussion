import { ReactNode } from 'react';
import { User } from '../../types';

export interface AuthContextTypes {
  currentUser: User;
  login: (params: LoginParams) => void;
  logout: () => any;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export interface LoginParams {
  nickname: string;
  password: string;
}
