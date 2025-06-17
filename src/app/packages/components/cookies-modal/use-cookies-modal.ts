import { create } from 'zustand';

export interface IUseHeaderSearchState {
  height: number;
  setHeight: (value: number) => void;
}

export const useCookiesModal = create<IUseHeaderSearchState>(set => ({
  height: 0,
  setHeight: (value: number) => set({ height: value }),
}));
