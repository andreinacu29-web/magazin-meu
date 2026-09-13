"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  items: Product[];
  addToCart: (product: Product) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);

  function addToCart(product: Product) {
    setItems((prev) => [...prev, product]);
  }

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}