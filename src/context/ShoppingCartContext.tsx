import { ReactNode, createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantitiy: number;
};

type ShoppingCartContext = {
  getItemQuantitiy: (id: number) => number;
  increaeCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export  function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, SetCartItems] = useState<CartItem[]>([]);

  function getItemQuantitiy(id: number) {
    return cartItems.find((item) => item.id === id)?.quantitiy || 0;
  }

  function increaeCartQuantity(id: number) {
    SetCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantitiy: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantitiy: item.quantitiy + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    SetCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantitiy === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantitiy: item.quantitiy - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    SetCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantitiy,
        increaeCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
