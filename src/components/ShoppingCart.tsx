import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CarItem";
import { currencyFormat } from "../utilities/currencyFormat";
import ItemData from "../data/ItemData.json";
import { FaRegWindowClose } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";

type Openprops = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function ShoppingCart({ isOpen, toggleMenu }: Openprops) {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[100%] transform overflow-y-auto bg-white md:p-4 p-2 shadow-xl transition-transform duration-300 ease-in-out md:w-[60%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex">
          <h1 className="me-auto text-[32px] font-bold">Your Cart</h1>
          <button onClick={toggleMenu}>
            <FaRegWindowClose className="h-9 w-9" />
          </button>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="flex flex-col items-end font-bold mr-4">
            <h2>
              Total:{" "}
              {currencyFormat(
                cartItems.reduce((total, cartItem) => {
                  const item = ItemData.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0),
              )}
            </h2>
            <button className="flex items-center p-2 border bg-green-500 rounded-sm"><MdShoppingCartCheckout size={40}/></button>
          </div>
        </div>
      </div>

      {/* Offcanvas overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </>
  );
}
