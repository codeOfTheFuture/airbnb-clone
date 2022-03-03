import Navbar from "./Navbar";

interface HeaderScrollProps {
  startSearchClick: () => void;
}

const HeaderScroll: React.FC<HeaderScrollProps> = ({ startSearchClick }) => {
  return (
    <header className='flex items-center md:bg-white md:h-20 w-full sticky top-0 left-0'>
      <div className='flex flex-col w-full justify-center items-center relative md:static'>
        <Navbar startSearchClick={startSearchClick} />
      </div>
    </header>
  );
};

export default HeaderScroll;
