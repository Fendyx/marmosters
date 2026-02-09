import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion'; // Используем framer-motion
import { Wheat, Fuel } from 'lucide-react';
import './Products.css';

export function Products({ 
  grainImage, 
  sunflowerImage, 
  rapeseedImage, 
  energyImage 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const agriculturalProducts = [
    {
      name: "Grains",
      items: ["Corn", "Wheat"],
      image: grainImage,
      description: "High-quality cereals sourced from Europe's finest agricultural regions"
    },
    {
      name: "Oilseeds",
      items: ["Sunflower", "Rapeseed"],
      image: sunflowerImage,
      description: "Superior oilseed varieties for global food and industrial applications"
    }
  ];

  return (
    <section 
      ref={ref}
      className="divisions-section"
    >
      <div className="divisions-container">
        
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="divisions-header"
        >
          <h2 className="divisions-title">
            Our <span>Products</span>
          </h2>
          <p className="divisions-subtitle">
            Two complementary sectors powering global commerce and energy needs
          </p>
        </motion.div>

        {/* Agricultural Sector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="sector-block"
        >
          <div className="sector-header">
            <div className="sector-icon-box">
              <Wheat size={28} className="sector-icon" />
            </div>
            <h3 className="sector-name">
              Agricultural Sector
            </h3>
          </div>

          <div className="agri-grid">
            {agriculturalProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2, ease: "easeOut" }}
                className="product-card agri-card-height"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-bg-image"
                />
                <div className="card-overlay" />
                
                <div className="card-content">
                  <h4 className="card-title">
                    {product.name}
                  </h4>
                  <div className="card-badges">
                    {product.items.map((item) => (
                      <span key={item} className="badge">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="card-desc">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Energy Sector */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="sector-header">
            <div className="sector-icon-box">
              <Fuel size={28} className="sector-icon" />
            </div>
            <h3 className="sector-name">
              Energy Sector
            </h3>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="product-card energy-card-height"
          >
            <img
              src={energyImage}
              alt="Energy sector"
              className="card-bg-image"
            />
            <div className="card-overlay" />
            
            <div className="card-content energy-content-padding">
              <h4 className="card-title energy-title">
                Coal & Solid Fuels
              </h4>
              <div className="card-badges energy-badges">
                <span className="badge energy-badge">
                  HIGH-QUALITY COAL
                </span>
                <span className="badge energy-badge">
                  SOLID FUELS
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}