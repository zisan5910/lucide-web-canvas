
import React, { useState, useEffect } from 'react';
import { Calculator, ArrowLeftRight, Download, X, Smartphone } from 'lucide-react';
import UnitConverter from './components/UnitConverter';
import PWAInstallPrompt from './components/PWAInstallPrompt';

function App() {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallPrompt(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallPrompt(false);
      }
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    localStorage.setItem('installPromptDismissed', 'true');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {showInstallPrompt && (
        <PWAInstallPrompt 
          onInstall={handleInstall}
          onDismiss={handleDismiss}
        />
      )}
      
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/wMPW5PVM/20250717-004001-0000.png" 
                alt="UniConverter Logo" 
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">UniConverter</h1>
                <p className="text-sm text-gray-600">Universal Unit Converter</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowLeftRight className="h-6 w-6 text-primary" />
              <Calculator className="h-6 w-6 text-secondary" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <UnitConverter />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-gray-600">
              © 2024 UniConverter - Universal Unit Converter
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Works offline • Install as PWA for better experience
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
