import { useShoppingCart } from "../context/ShoppingCartContext";
import ItemData from "../data/ItemData.json";
import { currencyFormat } from "../utilities/currencyFormat";

type ItemProps = {
  id: number;
  quantity:number;
};

export function CartItem({ id, quantity }: ItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = ItemData.find((i) => i.id === id);

  return (
    <>
      {item && (
        <ul>
          <li>
            <img src={item.imgUrl} alt="" />
            <div>
              <h2>
                {item.name} {quantity > 1 && <span>x{quantity}</span>}
              </h2>
              <h2>{currencyFormat(item.price)}</h2>
            </div>
            <div>
              <h2>{currencyFormat(item.price * quantity)}</h2>
				<button onClick={() => removeFromCart(item.id)}>x</button>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}
