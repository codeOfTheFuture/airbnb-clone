import { ChevronRightIcon } from "@heroicons/react/outline";

const LocationDropdown: React.FC = () => {
  return (
    <div className='flex flex-col justify-around w-[450px] h-[175px] p-6'>
      <h2 className='font-bold'>GO ANYWHERE, ANYTIME</h2>
      <button className='flex justify-between items-center border border-gray-200 rounded-full px-4 py-2 w-[25rem] h-[4rem] shadow-md hover:shadow-lg'>
        <span className='text-xl font-semibold text-[#BC1A6E]'>I&apos;m flexible</span>
        <ChevronRightIcon className='w-10 h-10 text-[#BC1A6E]' />
      </button>
    </div>
  )
}

export default LocationDropdown;