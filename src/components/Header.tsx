"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="font-playfair text-xl md:text-2xl font-bold text-[var(--primary)]">
          SPONSOR<span className="text-[var(--secondary)]">LINK</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 text-[var(--primary)]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">홈</Link>
          <Link href="#services" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">서비스</Link>
          <Link href="#process" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">이용방법</Link>
          <Link href="#partners" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">파트너사</Link>
          <Link href="#reviews" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">고객후기</Link>
          <Link href="#faq" className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]">FAQ</Link>
        </nav>
        
        {/* Contact button */}
        <Link 
          href="/contact" 
          className="hidden md:inline-block btn-primary"
        >
          문의하기
        </Link>
      </div>
      
      {/* Mobile navigation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <Link 
            href="/" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            홈
          </Link>
          <Link 
            href="#services" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            서비스
          </Link>
          <Link 
            href="#process" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            이용방법
          </Link>
          <Link 
            href="#partners" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            파트너사
          </Link>
          <Link 
            href="#reviews" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            고객후기
          </Link>
          <Link 
            href="#faq" 
            className="font-medium text-[var(--text-dark)] hover:text-[var(--primary)]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            href="/contact" 
            className="btn-primary text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            문의하기
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 