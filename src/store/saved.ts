import { create } from "zustand";
import { persist } from "zustand/middleware";
import { GradientCombination } from "./transparent";

export type Settings = Record<string, unknown>;

export type SavedCombination = {
  combinations: GradientCombination[];
  settings: Settings;
};

type SavedStorageType = {
  saved: SavedCombination[];
  addSavedCombination: (
    combination: GradientCombination[],
    settings: Settings
  ) => void;
  removeCombination: (type: "saved", index: number) => void;
};

export const useSavedStorage = create(
  persist<SavedStorageType>(
    (set) => ({
      saved: [],
      addSavedCombination: (combinations, settings) => {
        set((state) => ({
          ...state,
          saved: [...state.saved, { ...{ combinations, settings } }],
        }));
      },
      removeCombination: (type, index) => {
        set((state) => ({
          ...state,
          [type]: state.saved.filter((_, i) => i !== index),
        }));
      },
    }),
    {
      name: "saved-storage",
    }
  )
);
