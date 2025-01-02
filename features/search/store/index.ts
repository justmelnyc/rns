import {create} from 'zustand'

interface SearchState {
    searchIsOpen: boolean;
    toggleSearch: () => void;
}

export const useSearchStore = create<SearchState>((set) => ({
    searchIsOpen: false,
    toggleSearch: () => set((state) => ({searchIsOpen: !state.searchIsOpen})),
}))
