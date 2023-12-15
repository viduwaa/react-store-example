import { StoreItem } from "../components/StoreItem.tsx";
import ItemData from "../data/ItemData.json";



export function Store() {
  return (
    <>
      <h1 className="text-center">Store</h1>
      <div className="grid-wrap items-center justify-center">
        {ItemData.map((item) => (
          <div key={item.id} className="flex flex-col p-5 h-[370px]">
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
}
