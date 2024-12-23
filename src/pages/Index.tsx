import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import InvestmentPlans from '@/components/InvestmentPlans';
import BlogPost from '@/components/BlogPost';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <InvestmentPlans />
      <BlogPost />
    </div>
  );
};

export default Index;