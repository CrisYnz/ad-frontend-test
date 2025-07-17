'use client';

import Image from 'next/image';
import { useCart } from '@/utils/cartContext';
import type { Game } from '@/utils/endpoint';

interface CartItemProps {
  item: Game;
}

const CartItem = ({ item }: CartItemProps) => {
  const { removeFromCart } = useCart();

  return (
    <div className="
      bg-white p-4 flex flex-col border-b-0.5 border-card-border
      md:h-[196px] md:p-0 md:px-[16px] md:py-[20px] md:flex-row md:gap-[24px]
    ">
      
      <div className="
        flex items-start justify-between
        md:block md:w-auto md:h-auto
      ">
        <div className="
          relative w-[259px] h-[136px]
          md:w-[256px] md:h-[156px] md:p-[12px] md:bg-gray-100
        ">
          <div className="relative w-full h-full">
            <Image 
              src={item.image} 
              alt={item.name} 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        <button 
          onClick={() => removeFromCart(item.id)} 
          className="text-gray-400 hover:text-red-500 md:hidden"
          aria-label={`Remove ${item.name} from cart`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="
        mt-4 flex-grow flex flex-col
        md:mt-0
      ">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-text-secondary">{item.genre}</p>
            <h3 className="text-lg font-bold text-text-primary mt-1">{item.name}</h3>
          </div>
          <button 
            onClick={() => removeFromCart(item.id)} 
            className="hidden md:block text-gray-400 hover:text-red-500"
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-sm text-text-secondary my-2 flex-grow">{item.description}</p>
        <div className="flex justify-end items-center">
          <div>
            {item.isNew && (
              <span className="bg-text-accent text-white text-xs font-bold px-2 py-1 rounded">New</span>
            )}
          </div>
          <p className="text-xl font-bold text-text-primary ml-4">${item.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;