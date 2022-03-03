import { useReducer } from "react";
import { HeaderContext, initialState } from "../Context/HeaderContext";

interface Action {
  type: string;
  payload: any;
}

const ACTIONS = {
  SET_LOADING: "SET_LOADING",
  SET_SCROLL_POSITION: "SET_SCROLL_POSITION",
  SET_START_SEARCH_OPEN: "SET_START_SEARCH_OPEN",
  SET_ACTIVE_SEARCH: "SET_ACTIVE_SEARCH",
  SET_SEARCH_BUTTON_ENTER: "SET_SEARCH_BUTTON_ENTER",
}

const reducer = (state: HeaderContext, action: Action): HeaderContext => {
  switch (action.type) {
    case ACTIONS.SET_SCROLL_POSITION:
      return {
        ...state,
        scrollPosition: action.payload
      }
    case ACTIONS.SET_START_SEARCH_OPEN:
      return {
        ...state,
        startSearchOpen: action.payload,
        activeSearch: true,
        activeLocationBtn: true
      }
    case ACTIONS.SET_ACTIVE_SEARCH:
      return {
        ...state,
        activeSearch: action.payload,
      }
    case ACTIONS.SET_SEARCH_BUTTON_ENTER:
      return {
        ...state,
        searchButtonEnter: action.payload
      }
    default:
      return state;
  }
}


export const HeaderProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  const setScrollPosition = (scrollPosition: number): void => {
    dispatch({ type: ACTIONS.SET_SCROLL_POSITION, payload: scrollPosition });
  }

  const setStartSearchOpen = (openSearchMenu: boolean): void => {
    dispatch({ type: ACTIONS.SET_START_SEARCH_OPEN, payload: openSearchMenu });
  }

  const setActiveSearch = (activeSearch: boolean): void => {
    dispatch({ type: ACTIONS.SET_ACTIVE_SEARCH, payload: activeSearch });
  }

  const setSearchButtonEnter = (mouseEnter: boolean): void => {
    dispatch({ type: ACTIONS.SET_SEARCH_BUTTON_ENTER, payload: mouseEnter });
  }

  const value = {
    ...state,
    setScrollPosition,
    setStartSearchOpen,
    setActiveSearch,
    setSearchButtonEnter,
  }

  return (
    <HeaderContext.Provider value={value} >
      {!state.loading && children}
    </HeaderContext.Provider>
  )
}