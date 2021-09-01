import React from 'react'
import ContactSection from '../components/homePage/ContactSection';
import FeatureSection from '../components/homePage/FeatureSection';
import IntroSection from '../components/homePage/IntroSection';
import PriceSection from '../components/homePage/PriceSection';
import StatisticSection from '../components/homePage/StatisticSection';

export default function Home() {
    return (
      <>        
        <IntroSection />
        <FeatureSection />
        <PriceSection />
        <StatisticSection />
        <ContactSection />
      </>
    );
}
