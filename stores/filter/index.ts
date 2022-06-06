import create from "zustand";

interface BearState {
  bears: number;
  isOpen: boolean;  
}

export const useStore = create<BearState>((set) => {
  
  return {
  bears: 0,
  isOpen: false,
  toggleModal: () => set((state) => ({ isOpen: !state.isOpen})),
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}
});