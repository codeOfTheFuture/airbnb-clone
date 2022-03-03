import { SearchIcon } from "@heroicons/react/solid";
import { RefObject } from "react";
import { useHeaderContext } from "../Context/HeaderContext";
import { useSearchContext } from "../Context/SearchContext";

interface SearchBtnProps {
  id: number;
  label: string;
  text: string;
  btnActive: boolean;
  searchInputRef: RefObject<HTMLInputElement>;
  handleSearchBtnClick: (e: any, id: number) => void;
  handleFormSubmit?: (e: any, id: number) => void;
}

const SearchBtn: React.FC<SearchBtnProps> = (props) => {
  const {
    id,
    label,
    text,
    btnActive,
    searchInputRef,
    handleSearchBtnClick,
    handleFormSubmit,
  } = props;

  const { searchButtonEnter, setSearchButtonEnter } = useHeaderContext();
  const {
    checkIn,
    checkOut,
    activeCheckInBtn,
    activeCheckOutBtn,
    setActiveCheckInBtn,
    setActiveCheckOutBtn,
    resetDates,
  } = useSearchContext();

  const { activeSearch, setActiveSearch } = useHeaderContext();


  enum SearchBtns {
    Location,
    CheckIn,
    CheckOut,
    Guests,
    Search,
  }

  const handleDateReset = (e: any): void => {
    e.stopPropagation();
    resetDates();
    setActiveCheckInBtn(true);
    setActiveCheckOutBtn(false);
  };

  return (
    <div
      className={`flex flex-grow hover:rounded-full cursor-pointer
      ${id === SearchBtns.Location && "p-2 w-[200px]"}
      ${id === SearchBtns.Guests
          ? "flex-row justify-between items-center min-w-[200px]"
          : "flex-col justify-center items-start"
        }
      ${activeSearch &&
        (btnActive
          ? "bg-white shadow-2xl rounded-full"
          : !searchButtonEnter
            ? "hover:bg-gray-200"
            : "bg-gray-100 rounded-full")
        }
      ${!searchButtonEnter && !btnActive && "hover:bg-gray-100"}`}
      onClick={(e: any) => handleSearchBtnClick(e, id)}
    >
      {id === SearchBtns.Location ? (
        <div className='flex flex-col ml-2'>
          <label
            className='font-semibold cursor-pointer'
            htmlFor='headerSearch'
          >
            Location
          </label>
          <input
            className='bg-transparent focus:outline-none'
            type='text'
            placeholder={text}
            ref={searchInputRef}
          />
        </div>
      ) : (
        <div className='ml-4 relative'>
          <p className='font-semibold'>{label}</p>
          {id === SearchBtns.CheckIn && checkIn && (
            <p>{checkIn.toLocaleDateString()}</p>
          )}
          {id === SearchBtns.CheckOut && checkOut && (
            <p>{checkOut.toLocaleDateString()}</p>
          )}
          {((id === SearchBtns.CheckIn && checkIn === null) ||
            (id === SearchBtns.CheckOut && checkOut === null)) && <p>{text}</p>}
          {id === SearchBtns.Guests && <p>{text}</p>}
          {((id === SearchBtns.CheckIn && checkIn && activeCheckInBtn) ||
            (id === SearchBtns.CheckOut && checkOut && activeCheckOutBtn)) && (
              <div
                className='flex justify-center items-center w-8 h-8 rounded-full text-sm font-bold absolute top-1 left-28 bg-gray-200 text-gray-500'
                onClick={(e: any) => handleDateReset(e)}
              >
                X
              </div>
            )}
        </div>
      )}

      {id === SearchBtns.Guests && (
        <button
          type='submit'
          className='flex justify-center items-center text-white bg-[#FF385C] group-hover:bg-[#DE3151] rounded-full ml-6 mr-2 p-3 font-semibold'
          onMouseEnter={() => setSearchButtonEnter(true)}
          onMouseLeave={() => setSearchButtonEnter(false)}
          onClick={(e: any) => handleFormSubmit!(e, SearchBtns.Search)}
        >
          <SearchIcon className='w-7 h-7' />
          <span className={`${!activeSearch && "hidden"} group text-lg ml-2`}>
            Search
          </span>
        </button>
      )}
    </div>
  );
};

export default SearchBtn;
