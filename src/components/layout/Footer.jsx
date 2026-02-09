import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Footer.css';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Функция для обработки кликов по секциям (как в Хедере)
  const handleSectionClick = (sectionId) => {
    if (location.pathname === '/') {
      // Если мы на главной, просто скроллим
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
      // Если мы НЕ на главной, переходим на главную и передаем ID для скролла
      navigate('/', { state: { targetId: sectionId } });
    }
  };

  // Функция для перехода на обычные страницы (Privacy, Terms)
  const handlePageClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Скролл вверх новой страницы
  };

  // Маппинг названий ссылок на ID секций
  const sectorsLinks = [
    { label: 'Agricultural Commodities', id: 'products' }, // Ведет к блоку Products
    { label: 'Energy Resources', id: 'products' },         // Ведет к блоку Products
    { label: 'Logistics Services', id: 'logistics' }       // Ведет к блоку Logistics
  ];

  // Маппинг юридических ссылок
  const legalLinks = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms of Service', path: '/terms-of-service' }
  ];

  return (
    <footer className="footer-section">
      {/* Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="footer-brand">
              Marmosters
            </h3>
            <p className="footer-desc">
              Connecting markets, delivering excellence. Your trusted partner 
              in agricultural commodities and energy resources for more than 10 years.
            </p>
          </motion.div>

          {/* Quick Links (Sectors) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="footer-heading">
              SECTORS
            </h4>
            <ul className="footer-links-list">
              {sectorsLinks.map((item) => (
                <li key={item.label}>
                  <button 
                    onClick={() => handleSectionClick(item.id)}
                    className="footer-link"
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      padding: 0, 
                      font: 'inherit', 
                      cursor: 'pointer', 
                      textAlign: 'left' 
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <h4 className="footer-heading">
              CONNECT
            </h4>
            <div className="footer-contacts">

              <div className="contact-item center">
                <Phone size={20} className="contact-icon" style={{ marginTop: 0 }} />
                <p className="contact-text">
                  +48 577 480 689
                </p>
              </div>

              <div className="contact-item center">
                <Mail size={20} className="contact-icon" style={{ marginTop: 0 }} />
                <p className="contact-text">
                  info@marmosters.com
                </p>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Bar (Legal Links) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="footer-bottom"
        >
          <p className="copyright-text">
            © 2026 Marmosters. All rights reserved.
          </p>
          <div className="bottom-links">
            {legalLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handlePageClick(link.path)}
                className="bottom-link"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  padding: 0, 
                  font: 'inherit', 
                  cursor: 'pointer' 
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}