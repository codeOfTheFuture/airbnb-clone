import { useRef } from "react";
import { useHeaderContext } from "../Context/HeaderContext";
import useClickOutside from "../hooks/useClickOutside";
import SearchBtn from "./SearchBtn";

const HeaderSearch: React.FC = () => {
  const {
    scrollPosition,
    activeSearch,
    activeLocationBtn,
    activeCheckInBtn,
    activeCheckOutBtn,
    activeGuestsBtn,
    setActiveSearch,
    setActiveLocationBtn,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
    setActiveGuestsBtn,
  } = useHeaderContext();

  const searchFormRef = useRef<HTMLFormElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  enum SearchBtns {
    Location,
    CheckIn,
    CheckOut,
    Guests,
  }

  const searchBtnReset = (): void => {
    setActiveLocationBtn(false);
    setActiveCheckInBtn(false);
    setActiveCheckOutBtn(false);
    setActiveGuestsBtn(false);
  };

  const handleSearchBtnClick = (id: number) => {
    searchBtnReset();
    setActiveSearch(true);
    if (id === SearchBtns.Location) {
      setActiveLocationBtn(true);
      searchInputRef.current?.focus();
    }
    if (id === SearchBtns.CheckIn) setActiveCheckInBtn(true);
    if (id === SearchBtns.CheckOut) setActiveCheckOutBtn(true);
    if (id === SearchBtns.Guests) setActiveGuestsBtn(true);
  };

  useClickOutside(searchFormRef, () => {
    setActiveSearch(false);
    setActiveLocationBtn(false);
    setActiveCheckInBtn(false);
    setActiveCheckOutBtn(false);
    setActiveGuestsBtn(false);
  });

  return (
    <form
      className={`hidden md:flex justify-between h-16 mt-5 rounded-full bg-white text-gray-700 text-sm w-[900px] max-w-2xl lg:max-w-3xl ${activeSearch && "bg-gray-100"
        } ${scrollPosition > 0 && "border border-gray-300"}`}
      ref={searchFormRef}
    >
      <SearchBtn
        id={SearchBtns.Location}
        label={"Location"}
        text={"Where are you going?"}
        activeSearch={activeSearch}
        btnActive={activeLocationBtn}
        searchInputRef={searchInputRef}
        handleSearchBtnClick={handleSearchBtnClick}
      />
      <SearchBtn
        id={SearchBtns.CheckIn}
        label={"Check in"}
        text={"Add dates"}
        activeSearch={activeSearch}
        btnActive={activeCheckInBtn}
        searchInputRef={searchInputRef}
        handleSearchBtnClick={handleSearchBtnClick}
      />
      <SearchBtn
        id={SearchBtns.CheckOut}
        label={"Check out"}
        text={"Add Dates"}
        activeSearch={activeSearch}
        btnActive={activeCheckOutBtn}
        searchInputRef={searchInputRef}
        handleSearchBtnClick={handleSearchBtnClick}
      />
      <SearchBtn
        id={SearchBtns.Guests}
        label={"Guests"}
        text={"Add guests"}
        activeSearch={activeSearch}
        btnActive={activeGuestsBtn}
        searchInputRef={searchInputRef}
        handleSearchBtnClick={handleSearchBtnClick}
      />
    </form>
  );
};

export default HeaderSearch;
