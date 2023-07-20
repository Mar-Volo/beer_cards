import { create } from "zustand";

const useBeerStore = create((set) => ({
  beerList: [],
  loadedBeers: [],
  setBeerList: (list) =>
    set((state) => ({
      beerList: list,
      loadedBeers: [...state.loadedBeers, ...list],
    })),
}));

export default useBeerStore;


