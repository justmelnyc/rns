"use client";
import {create} from 'zustand'

interface UIState  {
    darkMode: boolean;
    toggleDarkMode: () => void;
    dialogs: Record<string, boolean>; // A record of dialog keys and their open/close state
    openDialog: (key: string) => void;
    closeDialog: (key: string) => void;
    toggleDialog: (key: string) => void;
}

interface ThemeState {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    darkMode: false,
    toggleDarkMode: () => set((state) => {
        localStorage.setItem('darkMode', JSON.stringify(!state.darkMode))
        document.body.classList.toggle('dark', !state.darkMode)
        return { darkMode: !state.darkMode }
    }),
    dialogs: {}, // Initially, no dialogs are open
    openDialog: (key) => set((state) => ({ dialogs: { ...state.dialogs, [key]: true } })),
    closeDialog: (key) => set((state) => ({ dialogs: { ...state.dialogs, [key]: false } })),
    toggleDialog: (key) =>
        set((state) => ({
            dialogs: { ...state.dialogs, [key]: !state.dialogs[key] },
        })),
}))

export const useThemeStore = create<ThemeState>()(
    (set) => ({
        isDarkMode: false,
        toggleDarkMode: () =>
            set((state) => {
                const newMode = !state.isDarkMode;
                if (newMode) {
                    document.body.classList.add("dark");
                } else {
                    document.body.classList.remove("dark");
                }
                return { isDarkMode: newMode };
            }),
    })
);

export const dialogKeys = {
    disclaimer: 'disclaimer',
    cookie: 'cookie',
    newsletter: 'newsletter',
    cart: 'cart',
    filters: 'filters',
    search: 'search',
    sort: 'sort',
    product: 'product',
    checkout: 'checkout',
    payment: 'payment',
    address: 'address',
    shipping: 'shipping',
}

