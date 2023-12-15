import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";

export function NavBar() {
  return (
    <>
      <div className="container sticky m-auto flex h-[50px] items-center  bg-teal-500 p-8 drop-shadow-xl transition-all">
        <nav className="me-auto flex h-full items-center gap-10 text-[1.2rem]">
          <NavLink
            className="w-[60px] transition-all duration-200  hover:text-[20px] hover:text-gray-600"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="w-[60px] transition-all duration-200 hover:text-[20px] hover:text-gray-600"
            to="/store"
          >
            Store
          </NavLink>
          <NavLink
            className="w-[60px] transition-all duration-200 hover:text-[20px] hover:text-gray-600"
            to="/about"
          >
            About
          </NavLink>
        </nav>
        <div className="flex gap-5">
          <button className="relative z-0 rounded-full border-none border-black bg-[#f8fa77] p-2 transition-all hover:bg-white">
            <div className="absolute bottom-[-5px] right-[-10px] z-10 flex w-6 justify-center rounded-[50%] border-none bg-red-500">
              5
            </div>
            <FiShoppingCart size={25} />
          </button>
          <button className="relative z-0 rounded-full border-none border-black bg-[#f8fa77] p-2 transition-all hover:bg-white">
            <FaRegUser size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
