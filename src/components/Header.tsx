
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-background-header sticky top-0 z-50 py-4 px-6 md:px-10 lg:px-16 flex justify-between items-center shadow-md">
      <Link href="/" className="text-2xl font-bold text-text-accent">
        GamerShop
      </Link>

      <Link href="/cart">
        <Image 
          src="/icons/cart-icon.svg"
          alt="Shopping Cart"
          width={28}
          height={28}
        />
      </Link>
    </header>
  );
};

export default Header;