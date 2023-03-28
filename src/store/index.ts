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

export type TransparentCombination = {
  direction: string;
  color: string;
  percentage: string;
};

export type GenerationType = "simple" | "composite" | "transparent";

type AppStorage = {
  simple: SimpleCombination[];
  composite: CompositeCombination[];
  transparent: TransparentCombination[];
  settings: Record<string, unknown>;
  addSimpleCombination: (combination: SimpleCombination) => void;
  addCompositeCombination: (combination: CompositeCombination) => void;
  addTransparentCombination: (combination: TransparentCombination) => void;
  removeCombination: (type: GenerationType, index: number) => void;
  updateCombination: (
    type: GenerationType,
    index: number,
    combination:
      | SimpleCombination
      | CompositeCombination
      | TransparentCombination
  ) => void;
  updateSettings: (newSettings: Record<string, unknown>) => void;
};

export const useAppStorage = create(
  persist<AppStorage>(
    (set) => ({
      simple: [],
      composite: [],
      transparent: [],
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
      addTransparentCombination: (combination: TransparentCombination) => {
        set((state) => ({
          ...state,
          transparent: [...state.transparent, combination],
        }));
      },
      removeCombination: (type, index) => {
        set((state) => ({
          ...state,
          [type]:
            type === "simple"
              ? state.simple.filter((_, i) => i !== index)
              : type === "composite"
              ? state.composite.filter((_, i) => i !== index)
              : state.transparent.filter((_, i) => i !== index),
        }));
      },
      updateCombination: (type, index, combination) => {
        set((state) => {
          const newCombination =
            type === "simple"
              ? (combination as SimpleCombination)
              : type === "transparent"
              ? (combination as CompositeCombination)
              : (combination as TransparentCombination);

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
