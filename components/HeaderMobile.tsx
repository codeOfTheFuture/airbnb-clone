import { SearchIcon } from "@heroicons/react/solid";

const HeaderMobile: React.FC = () => {
  return (
    <div className='flex absolute top-4 md:hidden gap-2 justify-center items-center w-5/6 rounded-full p-1 bg-white'>
      <SearchIcon className='w-5 h-5 text-[#FF385C]' />
      <p className='flex items-center justify-start h-10 text-[#222]  cursor-pointer'>
        Where are you going?
      </p>
    </div>
  );
};

export default HeaderMobile;
