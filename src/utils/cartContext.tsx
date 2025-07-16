'use client';

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import type { Game } from './endpoint'; 

interface CartContextType {
  cart: Game[];
  addToCart: (game: Game) => void;
  removeFromCart: (gameId: string) => void;
  isItemInCart: (gameId: string) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Game[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (game: Game) => {
    const newCart = [...cart, game];
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const removeFromCart = (gameId: string) => {
    const newCart = cart.filter(item => item.id !== gameId);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const isItemInCart = (gameId: string) => cart.some(item => item.id === gameId);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isItemInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};