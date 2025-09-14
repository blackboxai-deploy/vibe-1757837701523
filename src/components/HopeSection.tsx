"use client";

import { initiateUPIPayment, trackDonation, DONATION_AMOUNTS } from "@/lib/upi";

export default function HopeSection() {
  const handleDonationClick = (amount: number, impact: string) => {
    trackDonation(amount, "hope-section");
    initiateUPIPayment(amount, `₹${amount} - ${impact}`);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-orange-500 via-yellow-100 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-poppins">
            From Despair to <span className="text-green-600">Hope</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every rupee you donate creates a meaningful change in a child's life. 
            See exactly how your contribution transforms lives.
          </p>
        </div>

        {/* Before and After Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Before - Struggle */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/313250f6-efc7-45c2-9549-dba701f81e50.png"
              alt="Children in need of education and support, sitting on the ground without proper learning materials"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/60fc6a94-7bf6-4e26-823c-27dae61c3f1f.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">Before Your Help</h3>
              <p className="text-sm opacity-90">Children struggling without basic needs</p>
            </div>
          </div>

          {/* After - Hope */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/add9b980-1c5a-4e61-b61b-39cac95c1e96.png"
              alt="Happy children smiling in a classroom with books and learning materials, showing the positive impact of education support"
              className="w-full h-64 sm:h-80 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ffbf4cc4-12cf-4ddb-80f8-e432f50a88b5.png";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-1">After Your Donation</h3>
              <p className="text-sm opacity-90">Children thriving with education and food</p>
            </div>
          </div>
        </div>

        {/* Donation Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DONATION_AMOUNTS.map((donation, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-orange-200"
            >
              {/* Amount */}
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  ₹{donation.amount.toLocaleString()}
                </div>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mx-auto rounded-full"></div>
              </div>

              {/* Impact */}
              <div className="text-center mb-6">
                <p className="text-gray-700 leading-relaxed font-medium">
                  {donation.impact}
                </p>
              </div>

              {/* Donate Button */}
              <button
                onClick={() => handleDonationClick(donation.amount, donation.impact)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-105 ${donation.color}`}
              >
                Donate ₹{donation.amount}
              </button>
            </div>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 font-poppins">
            Real Success Stories
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Story 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                📖
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Priya's Journey</h4>
              <p className="text-gray-600 text-sm">
                "Thanks to your donations, I now have books and can dream of becoming a teacher!"
              </p>
            </div>

            {/* Story 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                🍽️
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Raj's Meals</h4>
              <p className="text-gray-600 text-sm">
                "I no longer go to school hungry. The nutritious meals help me focus on studies."
              </p>
            </div>

            {/* Story 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                🎓
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Anita's Future</h4>
              <p className="text-gray-600 text-sm">
                "Your support gave me a chance to complete school. Now I'm helping other children!"
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 font-poppins">
              Ready to Create Hope?
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Join thousands of donors who are changing lives, one child at a time.
            </p>
            <button
              onClick={() => handleDonationClick(500, "Transform a child's life")}
              className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Changing Lives Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}