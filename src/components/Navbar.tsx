import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function NavBar() {
  const { toggleMenu, cartQuantity } = useShoppingCart();

  return (
    <>
      <div className="sticky flex h-[50px] items-center  bg-[#4EC6B2] p-2 drop-shadow-xl transition-all md:p-8">
        <nav
          id="navlink"
          className="  md:m-auto  flex h-full md:w-[80%] justify-around w-full items-center md:justify-around gap-3 text-[1.2rem] md:gap-10"
        >
          <div className="flex h-full w-full items-center md:gap-3 gap-5 md:m-auto ml-3">
            <NavLink
              className="transition-all duration-200 hover:text-[20px] hover:text-gray-600 md:w-[60px]"
              to="/store"
            >
              Store
            </NavLink>
            <NavLink
              className="transition-all duration-200 hover:text-[20px] hover:text-gray-600 md:w-[60px]"
              to="/about"
            >
              About
            </NavLink>
          </div>
          <div className="flex gap-5">
            {cartQuantity > 0 && (
              <>
                <button
                  data-hs-overlay="#hs-overlay-right"
                  type="button"
                  onClick={toggleMenu}
                  className="relative z-0 rounded-full border-none border-black bg-[#f8fa77] p-2 transition-all hover:bg-white "
                >
                  <div className="absolute bottom-[-5px] right-[-10px] z-10 flex w-6 justify-center rounded-[50%] border-none bg-red-500">
                    {cartQuantity}
                  </div>
                  <FiShoppingCart size={25} />
                </button>
              </>
            )}
            <a href="https://github.com/viduwaa">
              <button className="relative z-0 rounded-full border-none border-black bg-[#f8fa77] p-2 transition-all hover:bg-white">
                <FaRegUser size={25} />
              </button>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
