import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TransparentCombination = {
  direction: string;
  color: string;
  percentage: string;
};

type TransparentStorageType = {
  transparent: TransparentCombination[];
  settings: Record<string, unknown>;
  addTransparentCombination: (combination: TransparentCombination) => void;
  removeCombination: (type: "transparent", index: number) => void;
  updateCombination: (
    type: "transparent",
    index: number,
    combination: TransparentCombination
  ) => void;
  updateSettings: (newSettings: Record<string, unknown>) => void;
};

export const useTransparentStorage = create(
  persist<TransparentStorageType>(
    (set) => ({
      transparent: [],
      settings: {},
      addTransparentCombination: (combination: TransparentCombination) => {
        set((state) => ({
          ...state,
          transparent: [...state.transparent, combination],
        }));
      },
      removeCombination: (type, index) => {
        set((state) => ({
          ...state,
          [type]: state.transparent.filter((_, i) => i !== index),
        }));
      },
      updateCombination: (type, index, combination) => {
        set((state) => {
          const newCombination = combination as TransparentCombination;

          const newState = { ...state };
          newState[type][index] = newCombination;

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
