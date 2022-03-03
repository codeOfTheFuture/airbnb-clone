import { createContext, useContext } from "react";

export interface SearchContext {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  adults: number;
  children: number;
  infants: number;
  pets: number;
  activeLocationBtn: boolean;
  activeCheckInBtn: boolean;
  activeCheckOutBtn: boolean;
  activeGuestsBtn: boolean;
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
  guests: 0,
  adults: 0,
  children: 0,
  infants: 0,
  pets: 0,
  activeLocationBtn: false,
  activeCheckInBtn: false,
  activeCheckOutBtn: false,
  activeGuestsBtn: false,
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
