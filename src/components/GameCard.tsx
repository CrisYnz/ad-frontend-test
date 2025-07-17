'use client';

import Image from 'next/image';
import { useCart } from '@/utils/cartContext';
import type { Game } from '@/utils/endpoint';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  const { addToCart, removeFromCart, isItemInCart } = useCart();
  const inCart = isItemInCart(game.id);

  const handleCartAction = () => {
    if (inCart) {
      removeFromCart(game.id);
    } else {
      addToCart(game);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border-0.5 border-card-border flex flex-col">
      
      <div className="p-4">
        <div className="relative h-60 w-full rounded-t-2x1 overflow-hidden">
          <Image
            src={game.image}
            alt={game.name}
            layout="fill"
            objectFit="cover"
          />
          {game.isNew && (
            <span className="absolute top-2 left-2 bg-new-tag text-xs font-bold px-2 py-1 rounded">
              New
            </span>
          )}
        </div>
      </div>
      
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <p className="text-sm text-gray-500">{game.genre}</p>
        <div className="flex justify-between items-start mt-1 flex-grow">
          <h3 className="text-lg font-bold text-text-primary">{game.name}</h3>
          <p className="text-xl font-bold text-text-primary text-right">${game.price.toFixed(2)}</p>
        </div>
        <div className="mt-4">
          <button
            onClick={handleCartAction}
            className={`w-full px-4 py-2 rounded-md font-semibold text-sm transition-colors ${
              inCart
                ? 'bg-red-500 text-white'
                : 'bg-white text-text-primary border-0.5 border-button-border'
            }`}
          >
            {inCart ? 'Remove' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;