"use client";

import { initiateUPIPayment, trackDonation } from "@/lib/upi";

export default function HeroSection() {
  const handleDonateClick = () => {
    trackDonation(undefined, "hero-section");
    initiateUPIPayment(undefined, "Donation for children's education and food");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-700 to-red-800">
      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c23d76a5-1a61-4f50-983a-73ea24863b6c.png"
          alt="Underprivileged child holding a torn book and empty plate, showing the need for education and food support"
          className="w-full h-full object-cover opacity-60"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Slogan */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block font-poppins drop-shadow-2xl">
            Every Child Deserves
          </span>
          <span className="block text-yellow-300 font-poppins drop-shadow-2xl mt-2">
            Education & Food
          </span>
        </h1>

        {/* Subline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-8 font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
          Your small donation can give them a classroom and a meal
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={handleDonateClick}
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-full text-xl sm:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-yellow-400/50 min-w-[200px]"
          >
            Donate Now
          </button>
          
          <div className="text-white/80 text-sm sm:text-base">
            <span className="block">UPI Payment Available</span>
            <span className="block text-yellow-300">Instant & Secure</span>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span>Registered NGO</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <span>Tax Exempt 80G</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <span>100% Transparent</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}