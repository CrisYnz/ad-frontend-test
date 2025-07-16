import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-background-footer py-6 flex justify-center items-center border-t border-gray-700">
      <Link href="/">
        <Image
          src="/logos/apply-digital-logo.svg"
          alt="Apply Digital Logo"
          width={120}
          height={40}
        />
      </Link>
    </footer>
  );
};

export default Footer;