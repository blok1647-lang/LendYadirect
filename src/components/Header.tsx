import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Блокировка скролла при открытом меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
          isScrolled
            ? 'bg-white/75 backdrop-blur-[18px] shadow-[0_1px_0_rgba(26,98,255,0.08),0_4px_16px_rgba(0,0,0,0.04)] border-b border-[#1A62FF]/20'
            : 'bg-transparent border-b border-transparent'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(18px) saturate(180%)' : 'none',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div
            className={`flex items-center justify-between transition-all duration-250 ease-out ${
              isScrolled ? 'py-3 sm:py-4' : 'py-4 sm:py-6'
            }`}
          >
            {/* Logo */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#1A62FF] to-[#3A8BFF] flex items-center justify-center shadow-lg shadow-[#1A62FF]/20 group-hover:shadow-xl group-hover:shadow-[#1A62FF]/30 transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-base sm:text-lg">A</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold text-[#0E0E12] group-hover:text-[#1A62FF] transition-colors">
                AntonDirect
              </span>
            </button>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-10">
              <button
                onClick={scrollToTop}
                className="text-[15px] font-semibold text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1A62FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[15px] font-semibold text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1A62FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('benefits')}
                className="text-[15px] font-semibold text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1A62FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Кейсы
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-[15px] font-semibold text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1A62FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Отзывы
              </button>
              <button
                onClick={() => scrollToSection('footer')}
                className="text-[15px] font-semibold text-[#0E0E12]/70 hover:text-[#1A62FF] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1A62FF] after:transition-all after:duration-300 hover:after:w-full"
              >
                Контакты
              </button>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button className="px-7 py-3 rounded-2xl bg-gradient-to-r from-[#1A62FF] to-[#3A8BFF] text-white font-semibold shadow-lg shadow-[#1A62FF]/30 hover:shadow-xl hover:shadow-[#1A62FF]/40 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
                Заказать настройку
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-[#1A62FF]/10 rounded-xl transition-colors active:scale-95"
            >
              <svg
                className="w-6 h-6 text-[#0E0E12]"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-[#0E0E12]/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[85%] max-w-sm bg-white/95 backdrop-blur-2xl border-l border-[#1A62FF]/20 shadow-2xl lg:hidden"
            >
              {/* Close button */}
              <div className="flex items-center justify-between p-6 border-b border-[#1A62FF]/10">
                <span className="text-lg font-semibold text-[#0E0E12]">Меню</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-10 h-10 rounded-xl bg-[#1A62FF]/10 hover:bg-[#1A62FF]/20 flex items-center justify-center transition-colors active:scale-95"
                >
                  <X className="w-5 h-5 text-[#1A62FF]" />
                </button>
              </div>

              {/* Menu items */}
              <nav className="flex flex-col p-6 space-y-2">
                <button
                  onClick={scrollToTop}
                  className="w-full text-left px-4 py-4 rounded-2xl text-[#0E0E12] hover:bg-[#1A62FF]/10 hover:text-[#1A62FF] transition-all duration-200 font-semibold active:scale-98"
                >
                  Главная
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="w-full text-left px-4 py-4 rounded-2xl text-[#0E0E12] hover:bg-[#1A62FF]/10 hover:text-[#1A62FF] transition-all duration-200 font-semibold active:scale-98"
                >
                  Услуги
                </button>
                <button
                  onClick={() => scrollToSection('benefits')}
                  className="w-full text-left px-4 py-4 rounded-2xl text-[#0E0E12] hover:bg-[#1A62FF]/10 hover:text-[#1A62FF] transition-all duration-200 font-semibold active:scale-98"
                >
                  Кейсы
                </button>
                <button
                  onClick={() => scrollToSection('reviews')}
                  className="w-full text-left px-4 py-4 rounded-2xl text-[#0E0E12] hover:bg-[#1A62FF]/10 hover:text-[#1A62FF] transition-all duration-200 font-semibold active:scale-98"
                >
                  Отзывы
                </button>
                <button
                  onClick={() => scrollToSection('footer')}
                  className="w-full text-left px-4 py-4 rounded-2xl text-[#0E0E12] hover:bg-[#1A62FF]/10 hover:text-[#1A62FF] transition-all duration-200 font-semibold active:scale-98"
                >
                  Контакты
                </button>

                {/* CTA Button Mobile */}
                <div className="pt-4">
                  <button className="w-full px-6 py-4 rounded-2xl bg-gradient-to-r from-[#1A62FF] to-[#3A8BFF] text-white font-semibold shadow-xl shadow-[#1A62FF]/30 active:scale-98 transition-transform">
                    Заказать настройку
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}