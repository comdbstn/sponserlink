import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] bg-clip-text text-transparent">
              스폰서링크
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="nav-link">서비스</a>
            <a href="#process" className="nav-link">이용방법</a>
            <a href="#contact" className="nav-link">문의하기</a>
            <button className="button-primary">
              시작하기
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--background-alt)] transition-colors"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`hamburger-line top-0 ${isMobileMenuOpen ? 'rotate-45 top-2.5' : ''}`}></span>
              <span className={`hamburger-line top-2.5 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`hamburger-line top-5 ${isMobileMenuOpen ? '-rotate-45 top-2.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <nav className="flex flex-col space-y-4 py-6">
            <a href="#services" className="nav-link-mobile">서비스</a>
            <a href="#process" className="nav-link-mobile">이용방법</a>
            <a href="#contact" className="nav-link-mobile">문의하기</a>
            <button className="button-primary w-full">
              시작하기
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header 