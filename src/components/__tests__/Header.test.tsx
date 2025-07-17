import { render, screen } from '@testing-library/react';
import Header from '../Header';
import '@testing-library/jest-dom';

describe('Header Component', () => {
  it('should render the logo and cart link correctly', () => {
    render(<Header />);
    const logoLink = screen.getByRole('link', { name: /GamerShop/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');

    const cartLink = screen.getByRole('link', { name: /Shopping Cart/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink).toHaveAttribute('href', '/cart');
  });
});