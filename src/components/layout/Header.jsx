import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Хуки для навигации
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Основная функция навигации
  const handleNavigation = (section) => {
    const sectionId = section.toLowerCase();
    setIsMobileMenuOpen(false); // Закрываем мобильное меню при клике

    // 1. Если кликнули "Contact" или кнопку "GET IN TOUCH"
    if (sectionId === 'contact' || sectionId === 'get in touch') {
      navigate('/contact');
      window.scrollTo(0, 0); // Скролл вверх новой страницы
      return;
    }

    // 2. Если мы находимся на главной странице ('/')
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100; // Высота шапки + небольшой отступ
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    } 
    // 3. Если мы на другой странице (например, /contact), переходим на главную и скроллим
    else {
      navigate('/', { state: { targetId: sectionId } });
    }
  };

  // Навигация для логотипа (всегда на главную, вверх)
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`nav-section ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container">
        
        {/* Logo - теперь кликабельный */}
        <div 
          className="logo-wrapper" 
          onClick={handleLogoClick} 
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-icon-box">
          <img 
              src="/favicon-96x96.png" 
              alt="Marmosters Logo" 
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
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, font: 'inherit' }}
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
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu-dropdown"
          >
            <ul className="mobile-nav-list">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item)}
                    className="mobile-nav-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left', font: 'inherit' }}
                  >
                    {item.toUpperCase()}
                  </button>
                </li>
              ))}
              <li className="mobile-cta-wrapper">
                <button 
                  className="mobile-cta-btn"
                  onClick={() => handleNavigation('contact')}
                >
                  GET IN TOUCH
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}