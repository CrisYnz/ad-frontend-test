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
    <div className="bg-white p-4 flex items-start gap-4 border-b-0.5 border-card-border">
      <div className="relative h-24 w-24 flex-shrink-0">
        <Image 
          src={item.image} 
          alt={item.name} 
          layout="fill" 
          objectFit="cover" 
          className="rounded-md"
        />
      </div>
      <div className="flex-grow flex flex-col h-full"> 
        
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-text-secondary">{item.genre}</p>
            <h3 className="text-lg font-bold text-text-primary mt-1">{item.name}</h3>
          </div>
        
          <button 
            onClick={() => removeFromCart(item.id)} 
            className="text-gray-400 hover:text-red-500 transition-colors flex-shrink-0"
            aria-label={`Remove ${item.name} from cart`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p className="text-sm text-text-secondary my-2 flex-grow">{item.description}</p>
        
        <div className="flex justify-between items-center">
          <div>
            {item.isNew && (
              <span className="bg-text-accent text-white text-xs font-bold px-2 py-1 rounded">New</span>
            )}
          </div>
          <p className="text-xl font-bold text-text-primary">${item.price.toFixed(2)}</p>
        </div>

      </div>
    </div>
  );
};

export default CartItem;