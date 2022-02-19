import LocationDropdown from "./LocationDropdown";

const SearchDropdown: React.FC = () => {
  return (
    <div className='absolute bg-white w-auto h-auto rounded-3xl drop-shadow-lg top-[70px] left-0'>
      <LocationDropdown />
    </div>
  )
}

export default SearchDropdown;