import Navbar from "./Navbar";
import HeaderMobile from "./HeaderMobile";
import HeaderSearch from "./HeaderSearch";
import { useHeaderContext } from "../Context/HeaderContext";


const Header: React.FC = () => {
  const { startSearchOpen } = useHeaderContext();

  return (
    <header
      className={`flex items-start justify-center pt-4 ${startSearchOpen ? "md:bg-white drop-shadow-xl" : "md:bg-black"
        }  md:h-56 2xl:h-44 w-full sticky top-0 left-0`}
    >
      <div className='flex flex-col w-full items-center relative md:static'>
        <Navbar />
        <HeaderSearch />
      </div>
      <HeaderMobile />
    </header>
  );
};
export default Header;
