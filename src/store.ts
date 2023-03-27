import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Combination = {
  direction: string;
  color1: string;
  color2: string;
};

export type AppState = Combination[];

type AppStorage = {
  state: AppState;
  addCombination: (combination: Combination) => void;
  removeCombination: (index: number) => void;
  updateCombination: (index: number, combination: Combination) => void;
};

export const useAppStorage = create(
  persist<AppStorage>(
    (set) => ({
      state: [],
      addCombination: (combination: Combination) => {
        set((state) => ({ state: [...state.state, combination] }));
      },
      removeCombination: (index: number) => {
        set((state) => ({
          state: state.state.filter((_, i) => i !== index),
        }));
      },
      updateCombination: (index: number, combination: Combination) => {
        set((state) => {
          const newState = [...state.state];
          newState[index] = combination;
          return { state: newState };
        });
      },
    }),
    {
      name: "app-storage",
    }
  )
);
