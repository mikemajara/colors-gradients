import { create } from "zustand";
import { persist } from "zustand/middleware";

export type GradientCombination = {
  gradientType: string;
  direction: string;
  color: string;
  percentage: string;
  hidden: boolean;
};

type TransparentStorageType = {
  combinations: GradientCombination[];
  settings: Record<string, unknown>;
  addCombination: (combination: GradientCombination) => void;
  removeCombination: (index: number) => void;
  updateCombination: (index: number, combination: GradientCombination) => void;
  updateSettings: (newSettings: Record<string, unknown>) => void;
};

export const useTransparentStorage = create(
  persist<TransparentStorageType>(
    (set) => ({
      combinations: [],
      settings: {},
      addCombination: (combination) => {
        set((state) => ({
          ...state,
          combinations: [...state.combinations, { ...combination }],
        }));
      },
      removeCombination: (index) => {
        set((state) => {
          console.log(`current state: `, state);
          const newState = {
            ...state,
            combinations: state.combinations.filter((_, i) => i !== index),
          };
          console.log(`new state`, newState);
          return newState;
        });
      },
      updateCombination: (index, combination) => {
        set((state) => {
          const newCombination = combination as GradientCombination;

          const newState = { ...state };
          newState.combinations[index] = newCombination;

          return newState;
        });
      },
      updateSettings: (newSettings) => {
        set((state) => ({
          ...state,
          settings: { ...state.settings, ...newSettings },
        }));
      },
    }),
    {
      name: "transparent-storage",
    }
  )
);
