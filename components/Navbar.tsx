import HeaderCenter from "./HeaderCenter"
import HeaderLogo from "./HeaderLogo"
import HeaderRight from "./HeaderRight"

const Navbar: React.FC = () => {
  return (
    <nav className='hidden sm:grid sm:grid-cols-2 2xl:grid-cols-3 grid-flow-row-dense items-center w-5/6 mt-6'>
      <HeaderLogo />
      <HeaderCenter />
      <HeaderRight />
    </nav>
  )
}

export default Navbar;