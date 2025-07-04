
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ExitConfirmationPopup = () => {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      setShowExitPopup(true);
      return (e.returnValue = '');
    };

    const handlePopState = () => {
      setShowExitPopup(true);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const handleStayClick = () => {
    setShowExitPopup(false);
  };

  const handleExitClick = () => {
    window.close();
  };

  if (!showExitPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 relative">
        <button
          onClick={handleStayClick}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>

        <div className="text-center">
          {/* App Logo */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 overflow-hidden">
            <img 
              src="https://i.postimg.cc/pTH1nLQb/Picsart-25-07-04-21-11-45-514.png" 
              alt="Print Poka Logo" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Exit Message */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Are you sure you want to leave?</h2>
          <p className="text-gray-600 text-sm mb-6">Your shopping session will be lost if you exit now.</p>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button 
              onClick={handleStayClick}
              className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl"
            >
              Stay in App
            </Button>
            
            <Button 
              onClick={handleExitClick}
              variant="outline"
              className="w-full py-3 rounded-xl border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Exit App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExitConfirmationPopup;
