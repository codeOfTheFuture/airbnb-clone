import { useHeaderContext } from "../Context/HeaderContext";

interface NavLinkProps {
  id: number;
  text: string;
}

enum NavLinks {
  PlacesToStay,
  Experiences,
  OnlineExperiences,
}

const NavLink: React.FC<NavLinkProps> = ({ id, text }) => {
  const { startSearchOpen } = useHeaderContext();

  return (
    <div
      className={`flex flex-col items-center relative ${id > NavLinks.PlacesToStay && "group"
        }`}
    >
      <a
        className={`${startSearchOpen ? "hover:text-gray-600" : "hover:text-gray-100"
          } cursor-pointer`}
      >
        {text}
      </a>
      <div
        className={`${startSearchOpen ? "bg-black" : "bg-white"
          } absolute top-9 ${id === NavLinks.PlacesToStay
            ? "w-[20px]"
            : "hidden group-hover:block w-[5px]"
          } h-[2px]`}
      ></div>
    </div>
  );
};

export default NavLink;
