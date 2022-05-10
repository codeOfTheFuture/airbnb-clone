import { SearchIcon } from "@heroicons/react/solid";

const HeaderMobile: React.FC = () => {
  return (
    <div className='flex absolute md:hidden w-full gap-2 justify-center items-center rounded-full p-1 bg-white'>
      <SearchIcon className='w-5 h-5 text-[#FF385C]' />
      <p className='flex items-center justify-start h-10 text-[#222]  cursor-pointer'>
        Where are you going?
      </p>
    </div>
  );
};

export default HeaderMobile;
