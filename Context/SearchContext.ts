import { createContext, useContext } from "react";

export interface SearchContext {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guestsCount: number;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  petsCount: number;
  activeLocationBtn: boolean;
  activeCheckInBtn: boolean;
  activeCheckOutBtn: boolean;
  activeGuestsBtn: boolean;
  setGuestsCount: (count: number) => void;
  setAdultsCount: (count: number) => void;
  setChildrenCount: (count: number) => void;
  setInfantsCount: (count: number) => void;
  setPetsCount: (count: number) => void;
  setActiveLocationBtn: (active: boolean) => void;
  setActiveCheckInBtn: (active: boolean) => void;
  setActiveCheckOutBtn: (active: boolean) => void;
  setActiveGuestsBtn: (active: boolean) => void;
  setCheckInDate: (date: Date) => void;
  setCheckOutDate: (date: Date) => void;
  resetDates: () => void;
}

export const initialState = {
  location: "",
  checkIn: null,
  checkOut: null,
  guestsCount: 0,
  adultsCount: 0,
  childrenCount: 0,
  infantsCount: 0,
  petsCount: 0,
  activeLocationBtn: false,
  activeCheckInBtn: false,
  activeCheckOutBtn: false,
  activeGuestsBtn: false,
  setGuestsCount: () => {},
  setAdultsCount: () => {},
  setChildrenCount: () => {},
  setInfantsCount: () => {},
  setPetsCount: () => {},
  setActiveLocationBtn: () => {},
  setActiveCheckInBtn: () => {},
  setActiveCheckOutBtn: () => {},
  setActiveGuestsBtn: () => {},
  setCheckInDate: () => {},
  setCheckOutDate: () => {},
  resetDates: () => {},
};

export const SearchContext = createContext<SearchContext>(initialState);
export const useSearchContext = (): SearchContext => useContext(SearchContext);
