import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Ship, Warehouse } from 'lucide-react';
import './LogisticsRegions.css';

export function LogisticsRegions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const regions = [
    {
      name: "Europe",
      icon: Warehouse,
      countries: [
        "Poland", "Bulgaria", "Germany", "Czech Republic", 
        "Hungary", "Slovakia", "Slovenia"
      ]
    },
    {
      name: "Central Asia",
      icon: Ship,
      countries: [
        "Kazakhstan", "Uzbekistan", "Turkmenistan", "Azerbaijan"
      ]
    },
  ];

  return (
    <section 
      ref={ref} 
      className="log-logistics-section"
    >
      <div className="log-logistics-container">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="log-logistics-header"
        >
          <h2 className="log-logistics-title">
            Our <span>Logistics</span> Network
          </h2>
          <p className="log-logistics-subtitle">
            Comprehensive coverage across Europe and Asia
          </p>
        </motion.div>

        {/* Regions Grid */}
        <div className="log-regions-grid">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="log-region-card"
            >
              <div className="log-region-card-header">
                <div className="log-region-icon-box">
                  <region.icon className="log-region-icon" />
                </div>
                <h3 className="log-region-name">
                  {region.name}
                </h3>
              </div>

              <div>
                <p className="log-countries-label">
                  COUNTRIES SERVED:
                </p>
                <div className="log-countries-wrapper">
                  {region.countries.map((country) => (
                    <span key={country} className="log-country-tag">
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="log-stats-grid"
        >
          {[
            { value: "500K+", label: "Tons Shipped Annually" },
            { value: "99.8%", label: "On-Time Delivery Rate" },
            { value: "24/7", label: "Logistics Support" }
          ].map((stat) => (
            <div key={stat.label} className="log-stat-card">
              <div className="log-stat-value">
                {stat.value}
              </div>
              <div className="log-stat-label">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}