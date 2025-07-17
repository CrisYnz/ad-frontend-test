'use client';

import { useCart } from '@/utils/cartContext';
import Link from 'next/link';
import CartItem from '@/components/CartItem';
import OrderSummary from '@/components/OrderSummary';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="bg-background-main min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="font-archivo font-medium text-base leading-4 tracking-normal text-text-primary hover:underline mb-6 inline-block">
          &larr; Back to Catalog
        </Link>

        <h1 className="text-3xl font-bold text-text-primary mb-4">Your Cart</h1>
        <p className="text-text-secondary mb-4">{cart.length} {cart.length === 1 ? 'item' : 'items'}</p>
        {cart.length === 0 ? (
          <p className="text-text-secondary">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            
            <div className="space-y-0">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div>
              <OrderSummary />
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;