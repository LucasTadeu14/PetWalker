import { createContext, type ReactNode, useState, useEffect, useRef } from "react";


export interface ProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
}

interface CartContextData {
  cart: CartProps[];
  cartAmount: number;
  addItemCart: (newItem: ProductProps) => void;
  removeItemCart: (product: CartProps) => void;
  total: string;
}

interface CartProps {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
}

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextData);

function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [total, setTotal] = useState("");
  const isFirstRender = useRef(true);


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");

    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    const sum = cart.reduce((acc, item) => acc + item.total, 0);
    setTotal(
      sum.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    );
  }, [cart]);


  function addItemCart(newItem: ProductProps) {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      const cartList = cart.map((item, index) => {
        if (index === indexItem) {
          return {
            ...item,
            amount: item.amount + 1,
            total: (item.amount + 1) * item.price,
          };
        }
        return item;
      });

      setCart(cartList);
      return;
    }

    let data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((product) => [...product, data]);
  }

  function removeItemCart(product: CartProps) {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      const cartList = cart.map((item, index) => {
        if (index === indexItem) {
          return {
            ...item,
            amount: item.amount - 1,
            total: item.total - item.price,
          };
        }
        return item;
      });

      setCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        cartAmount: cart.length,
        addItemCart,
        removeItemCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
