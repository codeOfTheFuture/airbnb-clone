import { useReducer } from "react";
import { initialState, SearchContext } from "../Context/SearchContext";

const ACTIONS = {
  SET_LOCATION: 'SET_LOCATION',
  SET_CHECK_IN_DATE: 'SET_CHECK_IN_DATE',
  SET_CHECK_OUT_DATE: 'SET_CHECK_OUT_DATE',
  SET_GUESTS: 'SET_GUESTS',
  SET_ADULTS: 'SET_ADULTS',
  SET_CHILDREN: 'SET_CHILDREN',
  SET_INFANTS: 'SET_INFANTS',
  SET_PETS: 'SET_PETS',
  SET_ACTIVE_LOCATION_BTN: 'SET_ACTIVE_LOCATION_BTN',
  SET_ACTIVE_CHECK_IN_BTN: 'SET_ACTIVE_CHECK_IN_BTN',
  SET_ACTIVE_CHECK_OUT_BTN: 'SET_ACTIVE_CHECK_OUT_BTN',
  SET_ACTIVE_GUESTS_BTN: 'SET_ACTIVE_GUESTS_BTN',
  RESET_DATES: 'RESET_DATES',
}

const reducer = (state: SearchContext, action: any): SearchContext => {
  switch (action.type) {
    case ACTIONS.SET_CHECK_IN_DATE:
      return {
        ...state,
        checkIn: action.payload
      }
    case ACTIONS.SET_CHECK_OUT_DATE:
      return {
        ...state,
        checkOut: action.payload
      }
    case ACTIONS.SET_ACTIVE_LOCATION_BTN:
      return {
        ...state,
        activeLocationBtn: action.payload
      }
    case ACTIONS.SET_ACTIVE_CHECK_IN_BTN:
      return {
        ...state,
        activeCheckInBtn: action.payload
      }
    case ACTIONS.SET_ACTIVE_CHECK_OUT_BTN:
      return {
        ...state,
        activeCheckOutBtn: action.payload
      }
    case ACTIONS.SET_ACTIVE_GUESTS_BTN:
      return {
        ...state,
        activeGuestsBtn: action.payload
      }
    case ACTIONS.RESET_DATES:
      return {
        ...state,
        checkIn: action.payload,
        checkOut: action.payload,
      }
    default:
      return state;
  }
}

const SearchProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLocation = (location: string): void => {
    dispatch({ type: ACTIONS.SET_LOCATION, payload: location })
  }

  const setCheckInDate = (date: Date): void => {
    dispatch({ type: ACTIONS.SET_CHECK_IN_DATE, payload: date })
  }

  const setCheckOutDate = (date: Date): void => {
    dispatch({ type: ACTIONS.SET_CHECK_OUT_DATE, payload: date })
  }

  const setGuests = (guests: number): void => {
    dispatch({ type: ACTIONS.SET_GUESTS, payload: guests })
  }

  const setAdults = (adults: number): void => {
    dispatch({ type: ACTIONS.SET_ADULTS, payload: adults })
  }

  const setChildren = (children: number): void => {
    dispatch({ type: ACTIONS.SET_CHILDREN, payload: children })
  }

  const setInfants = (infants: number): void => {
    dispatch({ type: ACTIONS.SET_INFANTS, payload: infants })
  }

  const setPets = (pets: number): void => {
    dispatch({ type: ACTIONS.SET_PETS, payload: pets });
  }

  const setActiveLocationBtn = (active: boolean): void => {
    dispatch({ type: ACTIONS.SET_ACTIVE_LOCATION_BTN, payload: active });
  }

  const setActiveCheckInBtn = (active: boolean): void => {
    dispatch({ type: ACTIONS.SET_ACTIVE_CHECK_IN_BTN, payload: active });
  }

  const setActiveCheckOutBtn = (active: boolean): void => {
    dispatch({ type: ACTIONS.SET_ACTIVE_CHECK_OUT_BTN, payload: active });
  }

  const setActiveGuestsBtn = (active: boolean): void => {
    console.log('set active guests: ', active);
    dispatch({ type: ACTIONS.SET_ACTIVE_GUESTS_BTN, payload: active });
  }

  const resetDates = (): void => {
    dispatch({ type: ACTIONS.RESET_DATES, payload: null });
  }

  const value = {
    ...state,
    setLocation,
    setCheckInDate,
    setCheckOutDate,
    setGuests,
    setAdults,
    setChildren,
    setInfants,
    setPets,
    setActiveLocationBtn,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
    setActiveGuestsBtn,
    resetDates
  }

  console.log(value);

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider;