import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CarItem";
import { currencyFormat } from "../utilities/currencyFormat";
import ItemData from "../data/ItemData.json"

type Openprops = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export function ShoppingCart({ isOpen, toggleMenu }: Openprops) {
  const { cartItems } = useShoppingCart();
  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-40 w-[40%] transform overflow-y-auto bg-white shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div><h2>Total: {currencyFormat(
            cartItems.reduce((total,cartItem)=>{
              const item = ItemData.find(i => i.id === cartItem.id) 
              return total + (item?.price || 0) * cartItem.quantity
            },0)
          )}
            </h2></div>
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
