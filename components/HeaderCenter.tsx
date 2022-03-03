import { SearchIcon } from "@heroicons/react/solid";
import { useHeaderContext } from "../Context/HeaderContext";
import NavLink from "./NavLink";

interface HeaderCenterProps {
  startSearchClick?: () => void;
}

enum NavLinks {
  PlacesToStay,
  Experiences,
  OnlineExperiences,
}

const HeaderCenter: React.FC<HeaderCenterProps> = ({ startSearchClick }) => {
  const { scrollPosition, startSearchOpen, setStartSearchOpen } =
    useHeaderContext();

  return scrollPosition === 0 || startSearchOpen ? (
    <div
      className={`flex justify-center items-center my-4 2xl:my-0 sm:col-span-2 2xl:col-span-1 2xl:col-start-2 gap-5 ${startSearchOpen ? "text-gray-800 hover:text-gray-700" : "text-white"
        } text-lg`}
    >
      <NavLink id={NavLinks.PlacesToStay} text={"Places to stay"} />
      <NavLink id={NavLinks.Experiences} text={"Experiences"} />
      <NavLink id={NavLinks.OnlineExperiences} text={"Online Experiences"} />
    </div>
  ) : (
    <button
      onClick={startSearchClick}
      className='flex items-center justify-between xl:ml-48 w-80 h-12 rounded-full shadow-lg p-2 border border-gray-200 cursor-pointer'
    >
      <span className='ml-3'>Start your search</span>
      <div className='flex items-center justify-center w-8 h-8 rounded-full bg-[#FF385C]'>
        <SearchIcon className='w-4 h-4 text-white' />
      </div>
    </button>
  );
};

export default HeaderCenter;
