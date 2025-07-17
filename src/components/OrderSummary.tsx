'use client';

import { useCart } from '@/utils/cartContext';

const OrderSummary = () => {
  const { cart } = useCart();

  const orderTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="bg-white rounded-lg p-6 border border-card-border">
      <h2 className="text-xl font-bold text-text-primary mb-2">Order Summary</h2>
      <p className="text-text-secondary mb-3">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
      
      <div className="space-y-2 mb-4 mt-6">
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-text-secondary">
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between items-center font-bold text-text-primary">
          <span>Order Total</span>
          <span>${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-text-accent text-white font-bold py-3 mt-6 rounded-lg hover:opacity-90 transition-opacity">
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;