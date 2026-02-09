import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Award, Users, Globe2 } from 'lucide-react';
import './CompanyExperience.css';

export function CompanyExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const stats = [
    { icon: TrendingUp, value: "10+", label: "Years in Business" },
    { icon: Globe2, value: "10+", label: "Countries Served" },
    { icon: Users, value: "50+", label: "Trusted Partners" },
    { icon: Award, value: "99.8%", label: "Client Satisfaction" }
  ];

  return (
    <section ref={ref} className="experience-section">
      <div className="experience-container">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="experience-header"
        >
          <span className="experience-badge">Our Track Record</span>
          <h2 className="experience-title">
            Decades of <span>Excellence</span>
          </h2>
          <p className="experience-desc">
            Global commodity trading with a focus on reliability and sustainable growth.
          </p>
        </motion.div>

        {/* Grid вместо flex для точного контроля */}
        <div className="experience-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <stat.icon className="stat-icon" />
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
