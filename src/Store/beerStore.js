import { create } from "zustand";

const useBeerStore = create((set) => ({
  beersList: [],
  setBeersList: (list) =>
    set((state) => {
      const uniqueBeers = list.filter(
        (beer) => !state.beersList.some((b) => b.id === beer.id)
      );
      return { beersList: [...state.beersList, ...uniqueBeers] };
    }),
}));

export default useBeerStore;
