import React, { useState, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Lazy load components for better performance
const Overview = lazy(() => import('./components/Overview'));
const Leaderboard = lazy(() => import('./components/Leaderboard'));
const Usage = lazy(() => import('./components/Usage'));

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'leaderboard', label: 'Leaderboard' },
    { id: 'usage', label: 'Usage' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'usage':
        return <Usage />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        tabs={tabs} 
      />
      
      <main className="pt-20">
        {activeTab === 'overview' && <Hero onTabChange={setActiveTab} />}
        
        <div className="container mx-auto px-4 py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Suspense fallback={
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              }>
                {renderTabContent()}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
