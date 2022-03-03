import { useHeaderContext } from "../Context/HeaderContext";
import HeaderCenter from "./HeaderCenter";
import HeaderLogo from "./HeaderLogo";
import HeaderRight from "./HeaderRight";

interface NavbarProps {
  startSearchClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ startSearchClick }) => {
  const { scrollPosition, startSearchOpen } = useHeaderContext();

  return (
    <nav
      className={`hidden ${scrollPosition > 0 && !startSearchOpen
          ? "md:flex justify-between"
          : "sm:grid sm:grid-cols-2 xl:grid-cols-3 sm:grid-flow-row-dense xl:grid-flow-col-dense"
        } w-11/12 lg:w-5/6 `}
    >
      <HeaderLogo />
      <HeaderCenter startSearchClick={startSearchClick} />
      <HeaderRight />
    </nav>
  );
};

export default Navbar;
