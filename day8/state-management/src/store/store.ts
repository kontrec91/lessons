import { create } from "zustand";


type State = {
    currentTheme: 'light' | 'dark';
    toggleCurrentTheme: () => void;
};


export const useThemeState = create<State>((set) => ({
    currentTheme: 'light',
    toggleCurrentTheme: () => set((state)=> ({
        ...state, 
        currentTheme:state.currentTheme === 'light'? 'dark':'light'
    }))
}))


