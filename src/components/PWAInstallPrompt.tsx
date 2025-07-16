
import React from 'react';
import { Download, X, Smartphone } from 'lucide-react';

interface PWAInstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

const PWAInstallPrompt: React.FC<PWAInstallPromptProps> = ({ onInstall, onDismiss }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-scale-in">
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="https://i.postimg.cc/wMPW5PVM/20250717-004001-0000.png" 
              alt="UniConverter" 
              className="h-16 w-16 rounded-2xl shadow-lg"
            />
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Install UniConverter
          </h2>
          
          <p className="text-gray-600 mb-6">
            Install our app for a better experience. Works offline and loads faster!
          </p>

          <div className="flex flex-col space-y-3">
            <button
              onClick={onInstall}
              className="flex items-center justify-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Download className="h-5 w-5" />
              <span>Install App</span>
            </button>
            
            <button
              onClick={onDismiss}
              className="text-gray-500 hover:text-gray-700 transition-colors py-2"
            >
              Maybe Later
            </button>
          </div>

          <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Smartphone className="h-4 w-4" />
              <span>Works Offline</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Download className="h-4 w-4" />
              <span>Fast Loading</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;
