import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './PartnerCTA.css';

export function PartnerCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="cta-section">
      <div className="cta-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="cta-card"
        >
          {/* Background Pattern */}
          <div className="cta-bg-pattern">
            <svg width="100%" height="100%">
              <pattern id="cta-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="var(--gold-primary)" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="cta-content">
            <div className="cta-text-group">
              <h2 className="cta-title">
                Partner With <span>Marmosters</span>
              </h2>
              <p className="cta-text">
                Join our network of trusted partners across continents.
              </p>
            </div>
            
            <button className="cta-btn">
              <span>START A CONVERSATION</span>
              <ArrowRight className="cta-arrow-icon" size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}