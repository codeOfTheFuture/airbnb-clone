import CalendarDropdown from "./CalendarDropdown";
import GuestsDropdown from "./GuestsDropdown";
import LocationDropdown from "./LocationDropdown";

enum SearchBtns {
  Location,
  CheckIn,
  CheckOut,
  Guests,
}

interface SearchDropdownProps {
  id: number;
}

const SearchDropdown: React.FC<SearchDropdownProps> = ({ id }) => {
  return (
    <div
      className={`absolute bg-white w-auto h-auto rounded-3xl cursor-default drop-shadow-lg top-[70px] ${id === SearchBtns.Location && "left-0"
        } ${(id === SearchBtns.CheckIn || id === SearchBtns.CheckOut) && 'right-6'} ${id === SearchBtns.Guests && "right-0"} `}
    >
      {id === SearchBtns.Location && <LocationDropdown />}
      {(id === SearchBtns.CheckIn || id === SearchBtns.CheckOut) && (
        <CalendarDropdown />
      )}
      {id === SearchBtns.Guests && <GuestsDropdown />}
    </div>
  );
};

export default SearchDropdown;
