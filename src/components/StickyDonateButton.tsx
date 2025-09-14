"use client";

import { useState, useEffect } from "react";
import { initiateUPIPayment, trackDonation, DONATION_AMOUNTS } from "@/lib/upi";

export default function StickyDonateButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showAmountSelector, setShowAmountSelector] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling 500px from top
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowAmountSelector(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleQuickDonate = () => {
    trackDonation(undefined, "sticky-button-quick");
    initiateUPIPayment(undefined, "Quick donation for children's education and food");
  };

  const handleAmountSelect = (amount: number, impact: string) => {
    trackDonation(amount, "sticky-button-amount");
    initiateUPIPayment(amount, `₹${amount} - ${impact}`);
    setShowAmountSelector(false);
  };

  const toggleAmountSelector = () => {
    setShowAmountSelector(!showAmountSelector);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Amount Selector Modal */}
      {showAmountSelector && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl p-4 w-72 border-2 border-yellow-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3 text-center">
            Choose Your Impact
          </h3>
          <div className="space-y-2">
            {DONATION_AMOUNTS.map((donation, index) => (
              <button
                key={index}
                onClick={() => handleAmountSelect(donation.amount, donation.impact)}
                className="w-full p-3 bg-gray-50 hover:bg-yellow-50 rounded-lg transition-all duration-200 text-left border hover:border-yellow-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-800">₹{donation.amount}</div>
                    <div className="text-xs text-gray-600">{donation.impact}</div>
                  </div>
                  <div className="text-lg">❤️</div>
                </div>
              </button>
            ))}
            
            {/* Custom Amount */}
            <button
              onClick={() => handleAmountSelect(0, "Custom amount donation")}
              className="w-full p-3 bg-gradient-to-r from-green-50 to-blue-50 hover:from-green-100 hover:to-blue-100 rounded-lg transition-all duration-200 text-center border-2 border-dashed border-green-300 hover:border-green-400"
            >
              <div className="font-bold text-green-700">Custom Amount</div>
              <div className="text-xs text-green-600">Enter your preferred amount</div>
            </button>
          </div>
          
          {/* Close Button */}
          <button
            onClick={() => setShowAmountSelector(false)}
            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Sticky Button */}
      <div className="flex flex-col items-end gap-2">
        {/* Quick Donate Button */}
        <button
          onClick={handleQuickDonate}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">❤️</span>
            <div>
              <div className="text-sm">Donate Now</div>
              <div className="text-xs opacity-80">UPI Payment</div>
            </div>
          </div>
        </button>

        {/* Amount Selector Button */}
        <button
          onClick={toggleAmountSelector}
          className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-2 px-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-300"
        >
          <div className="flex items-center gap-2">
            <span>💰</span>
            <span className="text-sm">Choose Amount</span>
          </div>
        </button>
      </div>

      {/* Floating Help Text */}
      <div className="absolute -left-32 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-xs opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Quick UPI donation
      </div>
    </div>
  );
}