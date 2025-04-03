import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white py-4 sticky top-0 shadow-sm z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#ff5a5a]">
          SPONSOR<span className="text-blue-500">LINK</span>
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900">홈</Link>
          <Link href="#services" className="text-gray-600 hover:text-gray-900">서비스</Link>
          <Link href="#process" className="text-gray-600 hover:text-gray-900">이용방법</Link>
          <Link href="#partners" className="text-gray-600 hover:text-gray-900">파트너사</Link>
          <Link href="#reviews" className="text-gray-600 hover:text-gray-900">고객후기</Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
        </nav>
        
        <Link 
          href="/contact" 
          className="bg-[#ff5a5a] text-white px-6 py-2 rounded-full hover:bg-[#ff4040] transition-colors duration-300"
        >
          문의하기
        </Link>
      </div>
    </header>
  );
};

export default Header; 