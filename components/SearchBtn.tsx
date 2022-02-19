import { SearchIcon } from "@heroicons/react/solid";
import { RefObject } from "react";
import { useHeaderContext } from "../Context/HeaderContext";
import SearchDropdown from "./SearchDropdown";

interface SearchBtnProps {
  id: number;
  label: string;
  text: string;
  activeSearch: boolean;
  btnActive: boolean;
  searchInputRef: RefObject<HTMLInputElement>;
  handleSearchBtnClick: (id: number) => void;
}

const SearchBtn: React.FC<SearchBtnProps> = (props) => {
  const {
    id,
    label,
    text,
    activeSearch,
    btnActive,
    searchInputRef,
    handleSearchBtnClick,
  } = props;

  const { searchButtonEnter, setSearchButtonEnter } = useHeaderContext();

  enum SearchBtns {
    Location,
    CheckIn,
    CheckOut,
    Guests,
  }

  return (
    <div
      className={`relative flex flex-grow hover:rounded-full cursor-pointer
      ${id === SearchBtns.Location && "p-4 w-1/5"}
      ${id === SearchBtns.Guests
          ? "flex-row justify-between items-center"
          : "flex-col justify-center items-start"
        }
      ${activeSearch &&
        (btnActive
          ? "bg-white shadow-2xl rounded-full hover:bg-white"
          : !searchButtonEnter
            ? "hover:bg-gray-200"
            : "bg-gray-100 rounded-full")
        }
      ${!searchButtonEnter && "hover:bg-gray-100"}`}
      onClick={() => handleSearchBtnClick(id)}
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
        <div className='ml-4'>
          <p className='font-semibold'>{label}</p>
          <p>{text}</p>
        </div>
      )}

      {id === SearchBtns.Guests && (
        <button
          className='flex justify-center items-center text-white bg-[#FF385C] group-hover:bg-[#DE3151] rounded-full m-2 p-3 z-10 font-semibold'
          onMouseEnter={() => setSearchButtonEnter(true)}
          onMouseLeave={() => setSearchButtonEnter(false)}
        >
          <SearchIcon className='w-7 h-7' />
          <span className={`${!activeSearch && "hidden"} group text-lg ml-2`}>
            Search
          </span>
        </button>
      )}

      {btnActive && <SearchDropdown />}
    </div>
  );
};

export default SearchBtn;
