import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Home from './components/Home';
import SaleList from './components/SaleList';
import AuctionDetail from './components/AuctionDetail';
import Jual from './components/Jual';
import Profil from './components/Profil';
import PageSkeleton from './components/PageSkeleton';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network fetch when changing tabs
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600); // 600ms loading effect for modern feel
    
    return () => clearTimeout(timer);
  }, [currentTab]);

  // Determine if we should show the bottom navigation
  const hideBottomNav = currentTab === 'auctionDetail';
  
  // Header should only be shown on the home page as per mockups
  const showHeader = currentTab === 'home';

  return (
    <div className="min-h-screen bg-zinc-50 max-w-md mx-auto relative shadow-2xl overflow-hidden flex flex-col select-none">
      
      {showHeader && !isLoading && <Header />}
      
      <main key={currentTab} className={`flex-1 overflow-hidden flex flex-col ${!hideBottomNav ? 'pb-[60px]' : ''}`}>
        {isLoading ? (
          <PageSkeleton />
        ) : (
          <>
            {currentTab === 'home' && <Home setCurrentTab={setCurrentTab} />}
            {currentTab === 'sale' && <SaleList setCurrentTab={setCurrentTab} />}
            {currentTab === 'auctionDetail' && <AuctionDetail setCurrentTab={setCurrentTab} />}
            {currentTab === 'jual' && <Jual setCurrentTab={setCurrentTab} />}
            {currentTab === 'profil' && <Profil setCurrentTab={setCurrentTab} />}
            
            {/* Placeholder for other tabs if any */}
            {['auction'].includes(currentTab) && (
              <div className="flex-1 flex flex-col items-center justify-center text-zinc-400 font-medium p-4 text-center">
                <p>Halaman {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)} (Segera Hadir)</p>
                <button 
                  onClick={() => setCurrentTab('home')}
                  className="mt-4 text-red-600 font-bold text-sm hover:underline"
                >
                  Kembali ke Home
                </button>
              </div>
            )}
          </>
        )}
      </main>

      {!hideBottomNav && (
        <BottomNav currentTab={currentTab} setCurrentTab={setCurrentTab} />
      )}
    </div>
  );
}

export default App;
