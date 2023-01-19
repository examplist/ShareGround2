import { create } from 'zustand';

type Status = 'loading' | 'fetched' | 'failed';

export interface AuthState {
  status: Status;
  id: string | null;
  name: string | null;
  photo: string | null;
}

export const authStatus = {
  loading: 'loading',
  fetched: 'fetched',
  failed: 'failed',
};

export interface AuthStore extends AuthState {
  changeAll: (status: AuthState) => void;
  changeName: (name: string) => void;
  changePhoto: (photo: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  status: 'loading',
  id: null,
  name: null,
  photo: null,

  changeAll: ({ status, id, name, photo }: AuthState) =>
    set(() => ({ status, id, name, photo })),
  changeName: (name: string) => set(() => ({ name })),
  changePhoto: (photo: string) => set(() => ({ photo })),
}));
