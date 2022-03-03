import { createContext, useContext } from "react";

export interface HeaderContext {
  loading: boolean;
  scrollPosition: number;
  startSearchOpen: boolean;
  activeSearch: boolean;
  activeLocationBtn: boolean;
  activeCheckInBtn: boolean;
  activeCheckOutBtn: boolean;
  activeGuestsBtn: boolean;
  searchButtonEnter: boolean;
  setScrollPosition: (scrollPosition: number) => void;
  setStartSearchOpen: (openSearchMenu: boolean) => void;
  setActiveSearch: (activeSearch: boolean) => void;
  setSearchButtonEnter: (mouseEnter: boolean) => void;
}

export const initialState = {
  loading: false,
  scrollPosition: 0,
  startSearchOpen: false,
  activeSearch: false,
  activeLocationBtn: false,
  activeCheckInBtn: false,
  activeCheckOutBtn: false,
  activeGuestsBtn: false,
  searchButtonEnter: false,
  setScrollPosition: () => {},
  setStartSearchOpen: () => {},
  setActiveSearch: () => {},
  setSearchButtonEnter: () => {},
};

export const HeaderContext = createContext<HeaderContext>(initialState);

export const useHeaderContext = (): HeaderContext => useContext(HeaderContext);
