import { create } from "zustand";

const useBeerStore = create((set) => ({
  beersList: [],
  setBeersList: (list) =>
    set((state) => ({
      beersList: [...state.beersList, ...list],
    })),
}));

export default useBeerStore;
