import create from "zustand";

const useAppStorage = create((set) => {
  const storageKey = "appStorage";
  const savedState = JSON.parse(localStorage.getItem(storageKey));

  const initialState = savedState || [];

  const saveState = (state) => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  };

  return {
    state: initialState,
    addCombination: (combination) =>
      set((state) => {
        const newState = [...state, combination];
        saveState(newState);
        return newState;
      }),
    removeCombination: (index) =>
      set((state) => {
        const newState = [...state];
        newState.splice(index, 1);
        saveState(newState);
        return newState;
      }),
    updateCombination: (index, combination) =>
      set((state) => {
        const newState = [...state];
        newState[index] = combination;
        saveState(newState);
        return newState;
      }),
  };
});

export default useAppStorage;
