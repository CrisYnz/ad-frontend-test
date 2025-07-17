import { render, screen, fireEvent } from '@testing-library/react';
import GameCard from '../GameCard';
import { useCart } from '@/utils/cartContext';
import '@testing-library/jest-dom';

jest.mock('@/utils/cartContext', () => ({
  useCart: jest.fn(),
}));

const mockGame = {
  id: '1',
  name: 'Cyberpunk 2077',
  genre: 'Action',
  price: 59.99,
  image: '/game-images/cyberpunk2077.jpeg',
  description: 'A test game.',
  isNew: true,
};

describe('GameCard Component', () => {

  it('should display "Add to Cart" and call addToCart when clicked', () => {
    const mockAddToCart = jest.fn();
    const mockRemoveFromCart = jest.fn();

    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      isItemInCart: () => false,
    });

    render(<GameCard game={mockGame} />);

    const button = screen.getByRole('button', { name: /Add to Cart/i });
    fireEvent.click(button);

    expect(mockAddToCart).toHaveBeenCalledWith(mockGame);
    expect(mockRemoveFromCart).not.toHaveBeenCalled();
  });

  it('should display "Remove" and call removeFromCart when clicked', () => {
    const mockAddToCart = jest.fn();
    const mockRemoveFromCart = jest.fn();

    (useCart as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
      removeFromCart: mockRemoveFromCart,
      isItemInCart: () => true,
    });

    render(<GameCard game={mockGame} />);

    const button = screen.getByRole('button', { name: /Remove/i });
    fireEvent.click(button);

    expect(mockRemoveFromCart).toHaveBeenCalledWith(mockGame.id);
    expect(mockAddToCart).not.toHaveBeenCalled();
  });
});