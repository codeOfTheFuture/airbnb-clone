import { useRef } from "react";
import { useHeaderContext } from "../Context/HeaderContext";
import { useSearchContext } from "../Context/SearchContext";
import useClickOutside from "../hooks/useClickOutside";
import SearchBtn from "./SearchBtn";
import SearchDropdown from "./SearchDropdown";

const HeaderSearch: React.FC = () => {
  const { scrollPosition, activeSearch, setActiveSearch } = useHeaderContext();

  const {
    activeLocationBtn,
    activeCheckInBtn,
    activeCheckOutBtn,
    activeGuestsBtn,
    setActiveLocationBtn,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
    setActiveGuestsBtn,
  } = useSearchContext();

  const searchFormRef = useRef<HTMLFormElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  enum SearchBtns {
    Location,
    CheckIn,
    CheckOut,
    Guests,
    Search,
  }

  const searchBtnReset = (): void => {
    setActiveLocationBtn(false);
    setActiveCheckInBtn(false);
    setActiveCheckOutBtn(false);
    setActiveGuestsBtn(false);
  };

  const handleSearchBtnClick = (e: any, id: number) => {
    console.log('it works: ', id)
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

  const handleFormSubmit = (e: any, id: number) => {
    e.stopPropagation();
    e.preventDefault();
    if (!searchInputRef.current?.value) {
      searchBtnReset();
      setActiveSearch(true);
      setActiveLocationBtn(true);
      searchInputRef.current?.focus();
    }
  };

  useClickOutside(searchFormRef, () => {
    setActiveSearch(false);
    setActiveLocationBtn(false);
    setActiveCheckInBtn(false);
    setActiveCheckOutBtn(false);
    setActiveGuestsBtn(false);
  });

  console.log('active check in btn: ', activeCheckInBtn);

  return (
    <form
      className={`hidden md:flex relative justify-between h-16 mt-5 rounded-full
      bg-white text-gray-700 text-sm w-[850px] max-w-3xl md:max-w-none ${activeSearch && "bg-gray-100"
        } ${scrollPosition > 0 && "border border-gray-300"}`}
      ref={searchFormRef}
    >
      <div className='flex flex-col relative justify-center'>
        <SearchBtn
          id={SearchBtns.Location}
          label={"Location"}
          text={"Where are you going?"}
          btnActive={activeLocationBtn}
          searchInputRef={searchInputRef}
          handleSearchBtnClick={handleSearchBtnClick}
        />
        {activeLocationBtn && <SearchDropdown id={SearchBtns.Location} />}
      </div>
      <div className='flex flex-col flex-grow'>
        <div className='flex w-full h-full'>
          <SearchBtn
            id={SearchBtns.CheckIn}
            label={"Check in"}
            text={"Add dates"}
            btnActive={activeCheckInBtn}
            searchInputRef={searchInputRef}
            handleSearchBtnClick={handleSearchBtnClick}
          />

          <SearchBtn
            id={SearchBtns.CheckOut}
            label={"Check out"}
            text={"Add Dates"}
            btnActive={activeCheckOutBtn}
            searchInputRef={searchInputRef}
            handleSearchBtnClick={handleSearchBtnClick}
          />
        </div>
        {(activeCheckInBtn || activeCheckOutBtn) && (
          <SearchDropdown id={SearchBtns.CheckIn} />
        )}
      </div>
      <div className='flex flex-col relative justify-center'>
        <SearchBtn
          id={SearchBtns.Guests}
          label={"Guests"}
          text={"Add guests"}
          btnActive={activeGuestsBtn}
          searchInputRef={searchInputRef}
          handleSearchBtnClick={handleSearchBtnClick}
          handleFormSubmit={handleFormSubmit}
        />
        {activeGuestsBtn && <SearchDropdown id={SearchBtns.Guests} />}
      </div>
    </form>
  );
};

export default HeaderSearch;
