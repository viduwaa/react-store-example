import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemData from "../data/ItemData.json";
import { currencyFormat } from "../utilities/currencyFormat";
import { IoCloseSharp } from "react-icons/io5";

type ItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: ItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = ItemData.find((i) => i.id === id);

  return (
    <>
      {item && (
        <ul className="md:p-3 p-1">
          <li className="flex items-center md:gap-3 gap-1 border-b border-slate-800 w-full md:text-base text-[14px]">
            <img className="md:h-[150px] h-[75px] object-cover" src={item.imgUrl} alt="" />
            <div className=" me-auto">
              <h2>
                {item.name} {quantity > 1 && <span>x{quantity}</span>}
              </h2>
              <h2>{currencyFormat(item.price)}</h2>
            </div>
            <div className="flex items-center justify-center md:gap-3 gap-1">
              <h2>{currencyFormat(item.price * quantity)}</h2>
              <button
                className="w-5 h-5 hover:bg-red-600 bg-red-400 rounded-md"
                onClick={() => removeFromCart(item.id)}
              >
                <IoCloseSharp className="m-auto"/>
              </button>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
