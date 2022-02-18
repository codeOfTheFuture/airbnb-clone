import { SearchIcon } from "@heroicons/react/solid";
import { RefObject } from "react";
import { useHeaderContext } from "../Context/HeaderContext";

interface SearchBtnProps {
  id: number;
  label: string;
  text: string;
  activeSearch: boolean;
  btnActive: boolean;
  searchInputRef: RefObject<HTMLInputElement>;
  handleClick: (id: number) => void;
}

const SearchBtn: React.FC<SearchBtnProps> = (props) => {
  const {
    id,
    label,
    text,
    activeSearch,
    btnActive,
    searchInputRef,
    handleClick
  } = props;

  const { searchButtonEnter, setSearchButtonEnter } = useHeaderContext();

  return (
    <div
      className={`flex flex-grow hover:rounded-full cursor-pointer
      ${id === 0 && "p-4 w-1/5"}
      ${id === 3
          ? "flex-row justify-between items-center"
          : "flex-col justify-center items-start"
        }
      ${activeSearch &&
        (btnActive ? "bg-white shadow-2xl rounded-full" : "bg-gray-100 rounded-full")
        }
      ${!searchButtonEnter && "hover:bg-gray-100"}`}
      onClick={() => handleClick(id)}
    >
      {id === 0 ? (
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
      {id === 3 && (
        <button className='flex justify-center items-center text-white bg-[#FF385C] hover:bg-[#DE3151] rounded-full m-2 p-3 z-10 font-semibold'>
          <SearchIcon
            className='w-7 h-7'
            onMouseEnter={() => setSearchButtonEnter(true)}
            onMouseLeave={() => setSearchButtonEnter(false)}
          />
          <span className={`${!activeSearch && "hidden"} text-lg ml-2`}>
            Search
          </span>
        </button>
      )}
    </div>
  );
};

export default SearchBtn;
