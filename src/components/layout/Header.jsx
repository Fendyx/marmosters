import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Проверяем, главная ли это страница
  const isHomePage = location.pathname === '/';

  // Логика: Хедер должен быть "Solid" (белый фон, черный текст), если:
  // 1. Мы не на главной ИЛИ
  // 2. Мы проскроллили ИЛИ
  // 3. Открыто мобильное меню (чтобы крестик был виден на белом фоне)
  const isHeaderSolid = !isHomePage || isScrolled || isMobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Управление кнопкой "назад" на мобильных устройствах
  useEffect(() => {
    if (isMobileMenuOpen) {
      window.history.pushState({ mobileMenuOpen: true }, '');

      const handlePopState = (event) => {
        // Если нажали "Назад", закрываем меню
        setIsMobileMenuOpen(false);
      };

      window.addEventListener('popstate', handlePopState);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('popstate', handlePopState);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavigation = (section) => {
    const sectionId = section.toLowerCase();
    setIsMobileMenuOpen(false); 

    if (sectionId === 'contact' || sectionId === 'get in touch') {
      navigate('/contact');
      window.scrollTo(0, 0);
      return;
    }

    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } else {
      navigate('/', { state: { targetId: sectionId } });
    }
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo(0, 0);
    }
  };

  const navItems = ['About', 'Products', 'Logistics', 'Contact'];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        // Применяем класс 'scrolled' если header должен быть сплошным
        className={`nav-section ${isHeaderSolid ? 'scrolled' : ''}`}
      >
        <div className="nav-container">
          
          {/* Logo */}
          <div 
            className="logo-wrapper" 
            onClick={handleLogoClick} 
            style={{ cursor: 'pointer' }}
          >
            <div className="logo-icon-box">
              <img 
                src="/favicon-96x96.png" 
                alt="Logo" 
                className="logo-icon"
                style={{ width: '24px', height: '24px' }}
              />
            </div>
            <span className="logo-text">
              MARMOSTERS
            </span>
          </div>

          {/* Desktop Navigation */}
          <ul className="desktop-menu">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item)}
                  className="nav-item-link"
                >
                  {item.toUpperCase()}
                  <span className="link-underline" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA Button (Desktop) */}
          <button 
            className="nav-cta-btn"
            onClick={() => handleNavigation('contact')}
          >
            GET IN TOUCH
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Анимация смены иконки для плавности */}
            <AnimatePresence mode='wait'>
                {isMobileMenuOpen ? (
                    <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <X size={28} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Menu size={28} />
                    </motion.div>
                )}
            </AnimatePresence>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Fullscreen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-fullscreen"
          >
            <motion.ul 
              className="mobile-nav-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <button
                    onClick={() => handleNavigation(item)}
                    className="mobile-nav-link"
                  >
                    {item.toUpperCase()}
                  </button>
                </motion.li>
              ))}
              
              <motion.li 
                className="mobile-cta-wrapper"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <button 
                  className="mobile-cta-btn"
                  onClick={() => handleNavigation('contact')}
                >
                  GET IN TOUCH
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}