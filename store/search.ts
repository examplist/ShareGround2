import { create } from 'zustand';

export interface Item {
  id: string;
  title: string;
}

export interface SearchStore {
  list: Item[];
  add: (list: Item[]) => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  list: [],
  add: (list: Item[]) => set(() => ({ list })),
}));
