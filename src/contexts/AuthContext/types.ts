import { ReactNode } from 'react';
import { User } from '../../types';

export interface AuthContextTypes {
  currentUser: User | null;
  getSessionStatus: () => void;
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
