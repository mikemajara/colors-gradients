import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SimpleCombination = {
  direction: string;
  color1: string;
  color2: string;
};

export type CompositeCombination = {
  direction: string;
  color1: string;
  percentage1: string;
  color2: string;
  percentage2: string;
};

type AppStorage = {
  simple: SimpleCombination[];
  composite: CompositeCombination[];
  settings: Record<string, unknown>;
  addSimpleCombination: (combination: SimpleCombination) => void;
  addCompositeCombination: (combination: CompositeCombination) => void;
  removeCombination: (type: "simple" | "composite", index: number) => void;
  updateCombination: (
    type: "simple" | "composite",
    index: number,
    combination: SimpleCombination | CompositeCombination
  ) => void;
  updateSettings: (newSettings: Record<string, unknown>) => void;
};

export const useAppStorage = create(
  persist<AppStorage>(
    (set) => ({
      simple: [],
      composite: [],
      settings: {},
      addSimpleCombination: (combination: SimpleCombination) => {
        set((state) => ({
          ...state,
          simple: [...state.simple, combination],
        }));
      },
      addCompositeCombination: (combination: CompositeCombination) => {
        set((state) => ({
          ...state,
          composite: [...state.composite, combination],
        }));
      },
      removeCombination: (type, index) => {
        set((state) => ({
          ...state,
          [type]:
            type === "simple"
              ? state.simple.filter((_, i) => i !== index)
              : state.composite.filter((_, i) => i !== index),
        }));
      },
      updateCombination: (type, index, combination) => {
        set((state) => {
          const newCombination =
            type === "simple"
              ? (combination as SimpleCombination)
              : (combination as CompositeCombination);

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
      name: "app-storage",
    }
  )
);
