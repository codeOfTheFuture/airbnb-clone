import { GlobeAltIcon, MenuIcon } from "@heroicons/react/solid";
import { useHeaderContext } from "../Context/HeaderContext";

const HeaderRight: React.FC = () => {
  const { scrollPosition } = useHeaderContext();

  return (
    <div className='flex justify-end items-center'>
      <div
        className={`${scrollPosition === 0 ? "hover:bg-gray-900" : "hover:bg-gray-100"
          } p-4 rounded-full`}
      >
        <a
          className={`${scrollPosition === 0 ? "text-white" : "text-gray-800"}`}
          href='#'
        >
          Become a host
        </a>
      </div>

      <div
        className={`${scrollPosition === 0 ? "hover:bg-gray-900" : "hover:bg-gray-100"
          } p-4 rounded-full`}
      >
        <GlobeAltIcon
          className={`${scrollPosition === 0 ? "text-white" : "text-gray-800"
            } w-5 h-5 cursor-pointer`}
        />
      </div>

      <button
        className={`flex justify-center items-center bg-white rounded-full w-20 h-10 py-1 ml-2 ${scrollPosition > 0 && "border border-gray-200 hover:shadow-md"
          }`}
      >
        <MenuIcon className='w-8 h-8 ml-3 text-gray-700' />
        <svg
          viewBox='0 0 32 32'
          aria-hidden='true'
          role='presentation'
          focusable='false'
          style={{ display: "block" }}
          height={"100%"}
          width={"100%"}
          fill='gray'
        >
          <path d='m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z'></path>
        </svg>
      </button>
    </div>
  );
};

export default HeaderRight;
