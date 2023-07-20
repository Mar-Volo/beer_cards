import { create } from "zustand";

const useBeerStore = create((set) => ({
  beerList: [],
  selectedBeers: [],
  currentIndex: 0,
  loadedBeers: [],
  setBeerList: (list) =>
    set((state) => ({
      beerList: list,
      loadedBeers: [...state.loadedBeers, ...list],
    })),
  addBeers: (beers) =>
    set((state) => ({
      beerList: [...state.beerList, ...beers],
      loadedBeers: [...state.loadedBeers, ...beers],
    })),
  removeBeer: (beerId) =>
    set((state) => ({
      beerList: state.beerList.filter((beer) => beer.id !== beerId),
    })),
  setCurrentIndex: (index) => set({ currentIndex: index }),
  addSelectedBeer: (beerId) =>
    set((state) => ({ selectedBeers: [...state.selectedBeers, beerId] })),
  removeSelectedBeer: (beerId) =>
    set((state) => ({
      selectedBeers: state.selectedBeers.filter((id) => id !== beerId),
    })),
}));

export default useBeerStore;


