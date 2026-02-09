import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Mission.css';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="mission-section">
      <div className="mission-container">
        <div className="mission-grid">
          
          {/* Left: Text Content */}
          <motion.div
            className="mission-content-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="mission-title">
              About <span>Marmosters</span>
            </h2>
            
            {/* ТЕКСТ ДЛЯ ПК (Полный) */}
            <div className="text-desktop">
              <p className="mission-text">
                Marmosters combines decades of expertise in global commodity trading with a forward-thinking approach to sustainability.
              </p>
              <p className="mission-text">
                Our mission is to bridge continents with agricultural products and energy resources while maintaining the highest standards of quality. Every partnership is a step towards a prosperous tomorrow.
              </p>
            </div>

            {/* ТЕКСТ ДЛЯ МОБИЛЬНЫХ (Сокращенный до сути) */}
            <div className="text-mobile">
              <p className="mission-text">
                We bridge continents with sustainable agriculture and energy. Decades of trading expertise meet a commitment to a transparent, prosperous future.
              </p>
            </div>
          </motion.div>

          {/* Right: Oilseed Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} // Чуть уменьшил сдвиг для плавности
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mission-image-wrapper"
          >
            <img
              src="https://images.unsplash.com/photo-1621679613573-ca4a937fdd5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXBlc2VlZCUyMGNhbm9sYSUyMG9pbHNlZWQlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDY0MjUzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Oilseed rapeseed canola"
              className="mission-img"
            />
            <div className="mission-image-overlay" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}