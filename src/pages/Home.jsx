import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/sections/Hero';
import { Mission } from '../components/sections/Mission';
import { CompanyExperience } from '../components/sections/CompanyExperience';
import { Products } from '../components/sections/Products';
import { PartnerCTA } from '../components/sections/PartnerCTA';
import { LogisticsRegions } from '../components/sections/LogisticsRegions';

export default function Home() {
  const location = useLocation();

  // Этот эффект сработает, если мы перешли с другой страницы (например, с Контактов)
  // и в state передали targetId (см. логику в Header)
  useEffect(() => {
    if (location.state && location.state.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        // Небольшая задержка, чтобы страница успела отрисоваться
        setTimeout(() => {
          const headerOffset = 100; // Отступ для шапки
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero heroImage="https://images.unsplash.com/photo-1564584812691-eab58e10a7f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjB3aGVhdCUyMGZpZWxkJTIwc3Vuc2V0JTIwZHJhbWF0aWN8ZW58MXx8fHwxNzcwNTk0ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"/>
      
      {/* Якорь для About (Mission) */}
      <div id="about">
        <Mission />
      </div>

      <CompanyExperience />
      
      {/* Якорь для Products */}
      <div id="products">
        <Products 
          grainImage="https://images.unsplash.com/photo-1529511582893-2d7e684dd128?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sunflowerImage="https://images.unsplash.com/photo-1763431542929-a151b710f0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5mbG93ZXIlMjBmaWVsZCUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3MDU5MzczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          rapeseedImage="https://images.unsplash.com/photo-1663224544362-c2f15dad6e7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXBlc2VlZCUyMGllbGxvdyUyMGZpZWxkJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc3MDU5MzczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          energyImage="https://images.unsplash.com/photo-1589007716619-42656585dd85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fertilizerImage="https://st2.depositphotos.com/16122460/44388/i/450/depositphotos_443886512-stock-photo-mineral-fertilizer-woman-planting-young.jpg"
          chemicalUreaImage="/urea.jpeg"
        />
      </div>
      
      {/* Якорь для Logistics */}
      <div id="logistics">
        <LogisticsRegions />
      </div>

      <PartnerCTA />
    </>
  );
}