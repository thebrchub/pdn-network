// src/pages/HomePage.tsx
import Navbar from '../components/ui/Navbar';
import Footer from '../components/ui/Footer';

import Hero from '../components/sections/Hero';
import Problem from '../components/sections/Problem';
import HowItWorks from '../components/sections/HowItWorks';
import Trust from '../components/sections/Trust';
import ReputationEconomy from '../components/sections/ReputationEconomy';
import Comparison from '../components/sections/Comparison';
import Freelancers from '../components/sections/Freelancers';
// import SocialProof from '../components/sections/SocialProof';
import FAQ from '../components/sections/FAQ';
import FinalCTA from '../components/sections/FinalCTA';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-light selection:bg-brand-accent selection:text-white flex flex-col">
      <Navbar />
      
      {/* Add top padding to account for the fixed navbar */}
      <main className="flex-grow pt-20">
        <Hero />
        <Problem />
        <HowItWorks />
        <Trust />
        <ReputationEconomy />
        <Comparison />
        {/* <SocialProof /> */}
        <Freelancers />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}