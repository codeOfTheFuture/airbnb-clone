import HeaderCenter from "./HeaderCenter";
import HeaderLogo from "./HeaderLogo";
import HeaderMobile from "./HeaderMobile";
import HeaderRight from "./HeaderRight";
import Navbar from "./Navbar";

const Header: React.FC = () => {
  return (
    <header className='flex items-start justify-center sm:bg-black sm:h-48 w-full relative sm:static'>
      <Navbar />
      <HeaderMobile />
    </header>
  )
}
export default Header;