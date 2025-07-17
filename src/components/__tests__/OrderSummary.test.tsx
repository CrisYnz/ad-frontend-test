import { render, screen } from '@testing-library/react';
import OrderSummary from '../OrderSummary';
import { useCart } from '@/utils/cartContext';
import '@testing-library/jest-dom';


jest.mock('@/utils/cartContext', () => ({
  useCart: jest.fn(),
}));

describe('OrderSummary Component', () => {
  it('should display the correct total price and item count when cart has items', () => {
    const mockCart = [
      { id: '1', name: 'Game A', price: 10.00, genre: 'RPG', image: '', description: '', isNew: false },
      { id: '2', name: 'Game B', price: 25.50, genre: 'Action', image: '', description: '', isNew: true },
    ];

    (useCart as jest.Mock).mockReturnValue({
      cart: mockCart,
    });

    render(<OrderSummary />);

    expect(screen.getByText('$35.50')).toBeInTheDocument();

    expect(screen.getByText('Game A')).toBeInTheDocument();
    expect(screen.getByText('$10.00')).toBeInTheDocument();
    expect(screen.getByText('Game B')).toBeInTheDocument();
    expect(screen.getByText('$25.50')).toBeInTheDocument();

    expect(screen.getByText(/2 items/i)).toBeInTheDocument();
  });

  it('should display 0 when the cart is empty', () => {
    (useCart as jest.Mock).mockReturnValue({
      cart: [],
    });

    render(<OrderSummary />);
    expect(screen.getByText('$0.00')).toBeInTheDocument();
    expect(screen.getByText(/0 items/i)).toBeInTheDocument();
  });
});