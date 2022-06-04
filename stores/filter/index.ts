import create from "zustand";



export const useFilter = create((set) => {
  const initialState = {
    isOpen: false,
  };     


  return {
    state: {
      ...initialState,
    },
    toggleModal: () => set(({ state }:any) => {state.isOpen = !state.isOpen;}),
  };
});