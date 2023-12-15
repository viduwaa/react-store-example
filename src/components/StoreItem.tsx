import { currencyFormat } from "../utilities/currencyFormat";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({  name, price, imgUrl }: StoreItemProps) {
  const quantity = 0;
  return (
    <>
      <img src={imgUrl} alt="" className="h-[200px] object-cover p-2" />
      <div className="m-2 flex flex-col items-center justify-around ">
        <h2 className="font-bold">{name}</h2>
        <h2>{currencyFormat(price)}</h2>
      </div>
      {quantity === 0 ? (
        <div>
          <button className="flex h-8 w-full items-center justify-center rounded-lg bg-teal-500 p-1">
            Add to Cart
          </button>{" "}
        </div>
      ) : (<>
        <div className="flex items-center justify-center">
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 p-1">
            <FaPlus />
          </button>
          <h2 className="mx-2">
            <span className="text-[20px] font-bold">5</span> in cart
          </h2>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 p-1">
            <FaMinus />
          </button>
        </div>
		<button className="flex mt-2 h-8 w-full items-center justify-center rounded-lg hover:bg-red-300 bg-red-400 p-1 transition-all duration-150">Remove</button>
		</>
      )}
    </>
  );
}
