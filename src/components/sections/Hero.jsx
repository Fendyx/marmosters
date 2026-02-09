import React from 'react';
import { motion } from 'framer-motion'; // Изменили импорт здесь
import { ArrowRight } from 'lucide-react';
import './Hero.css'; 

export function Hero() {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-bg-wrapper">
        <img
          src="/marmosters_hero.gif"
          alt="Golden wheat fields"
          className="hero-image"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="hero-anim-wrapper"
          >
            <p className="hero-subtitle">
              "ENERGY | LAND | PEOPLE"
            </p>
            <h1 className="hero-title">
              <span>Marmosters</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="hero-description"
          >
            Connecting continents through agricultural commodities
            and sustainable energy solutions
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="hero-btn"
          >
            EXPLORE OUR SOLUTIONS
            <ArrowRight className="hero-arrow-icon" size={20} />
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="scroll-indicator-wrapper"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="mouse-icon"
        >
          <div className="mouse-dot" />
        </motion.div>
      </motion.div>
    </section>
  );
}