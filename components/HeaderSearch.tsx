import { useRef } from "react";
import { useHeaderContext } from "../Context/HeaderContext";
import SearchBtn from "./SearchBtn";

const HeaderSearch: React.FC = () => {
  const {
    activeSearch,
    activeLocationBtn,
    activeCheckInBtn,
    activeCheckOutBtn,
    activeGuestsBtn,
    setActiveSearch,
    setActiveLocationBtn,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
    setActiveGuestsBtn
  } = useHeaderContext();

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleBtnClick = (id: number) => {
    setActiveSearch(true);
    if (id === 0) {
      setActiveLocationBtn(true);
      searchInputRef.current?.focus();
    } else if (id === 1) setActiveCheckInBtn(true);
    else if (id === 2) setActiveCheckOutBtn(true);
    else setActiveGuestsBtn(true);
  };

  return (
    <form
      className={`hidden md:flex justify-between h-16 mt-5 rounded-full bg-white text-gray-700 text-sm w-[900px] max-w-2xl lg:max-w-3xl ${activeSearch && "bg-gray-100"
        }`}
    >
      <SearchBtn
        id={0}
        label={"Location"}
        text={"Where are you going?"}
        activeSearch={activeSearch}
        btnActive={activeLocationBtn}
        searchInputRef={searchInputRef}
        handleClick={handleBtnClick}
      />
      <SearchBtn
        id={1}
        label={"Check in"}
        text={"Add dates"}
        activeSearch={activeSearch}
        btnActive={activeCheckInBtn}
        searchInputRef={searchInputRef}
        handleClick={handleBtnClick}
      />
      <SearchBtn
        id={2}
        label={"Check out"}
        text={"Add Dates"}
        activeSearch={activeSearch}
        btnActive={activeCheckOutBtn}
        searchInputRef={searchInputRef}
        handleClick={handleBtnClick}
      />
      <SearchBtn
        id={3}
        label={"Guests"}
        text={"Add guests"}
        activeSearch={activeSearch}
        btnActive={activeGuestsBtn}
        searchInputRef={searchInputRef}
        handleClick={handleBtnClick}
      />
    </form>
  );
};

export default HeaderSearch;
