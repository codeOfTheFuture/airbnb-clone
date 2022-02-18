import { useHeaderContext } from "../Context/HeaderContext"
import HeaderCenter from "./HeaderCenter"
import HeaderLogo from "./HeaderLogo"
import HeaderRight from "./HeaderRight"

interface NavbarProps {
  startSearchClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ startSearchClick }) => {
  const { scrollPosition } = useHeaderContext();

  return (
    <nav className={`hidden ${scrollPosition !== 0 ? 'md:flex justify-between' : 'md:grid md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row-dense lg:grid-flow-col-dense'} w-11/12 lg:w-5/6 `}>
      <HeaderLogo />
      <HeaderCenter startSearchClick={startSearchClick} />
      <HeaderRight />
    </nav>
  )
}

export default Navbar;