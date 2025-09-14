"use client";

import { initiateUPIPayment, trackDonation } from "@/lib/upi";

export default function Footer() {
  const handleFooterDonate = () => {
    trackDonation(undefined, "footer-section");
    initiateUPIPayment(undefined, "Footer donation for children's welfare");
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-blue-900 via-blue-800 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Foundation Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 font-poppins text-yellow-400">
              Muskurahat Foundation
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Dedicated to providing education and nutritious meals to underprivileged children. 
              Every donation creates a ripple effect of positive change, transforming lives and 
              building a brighter future for our communities.
            </p>
            
            {/* Registration Details */}
            <div className="bg-blue-800/50 rounded-lg p-4 mb-6">
              <h4 className="font-semibold text-yellow-300 mb-2">Legal Information</h4>
              <div className="text-sm text-blue-200 space-y-1">
                <p>📋 NGO Registration: MH/2018/NGO/12345</p>
                <p>🏛️ 12A Registration: AAAMM1234P20185</p>
                <p>💳 80G Certification: AAAMM1234PF20186</p>
                <p>🏦 FCRA Registration: 083781234</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border-l-4 border-yellow-400">
              <p className="text-blue-100 italic mb-2">
                "Because of your donation, children now dream bigger and reach higher. 
                Every rupee transforms a life."
              </p>
              <p className="text-yellow-300 text-sm font-semibold">- Muskurahat Team</p>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Get in Touch</h4>
            <div className="space-y-3 text-blue-100">
              <div className="flex items-start gap-3">
                <span className="text-yellow-300">📧</span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a 
                    href="mailto:contact@muskurahatfoundation.org"
                    className="text-blue-200 hover:text-yellow-300 transition-colors"
                  >
                    contact@muskurahatfoundation.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-yellow-300">📱</span>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a 
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-300 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-yellow-300">📞</span>
                <div>
                  <p className="font-semibold">Phone</p>
                  <a 
                    href="tel:+919876543210"
                    className="text-blue-200 hover:text-yellow-300 transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-yellow-300">📍</span>
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-blue-200 text-sm">
                    123 Hope Street, Education Colony<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-yellow-400">Connect With Us</h4>
            
            {/* Social Media */}
            <div className="space-y-2 mb-6">
              <a
                href="https://instagram.com/muskurahat_foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <span>📷</span>
                <span>@muskurahat_foundation</span>
              </a>
              <a
                href="https://facebook.com/muskurahatfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <span>📘</span>
                <span>Muskurahat Foundation</span>
              </a>
              <a
                href="https://twitter.com/muskurahat_ngo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <span>🐦</span>
                <span>@muskurahat_ngo</span>
              </a>
              <a
                href="https://linkedin.com/company/muskurahat-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-blue-200 hover:text-yellow-300 transition-colors"
              >
                <span>💼</span>
                <span>Muskurahat Foundation</span>
              </a>
            </div>

            {/* Quick Donate */}
            <div className="bg-yellow-400/10 rounded-lg p-4 border border-yellow-400/30">
              <h5 className="font-semibold text-yellow-300 mb-2">Quick Donation</h5>
              <p className="text-blue-200 text-sm mb-3">
                Make an instant UPI payment to support our cause
              </p>
              <button
                onClick={handleFooterDonate}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Donate via UPI
              </button>
            </div>
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="border-t border-blue-700 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-400">1200+</div>
              <div className="text-blue-200 text-sm">Children Educated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">3500+</div>
              <div className="text-blue-200 text-sm">Meals Served</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">5000+</div>
              <div className="text-blue-200 text-sm">Lives Impacted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">50+</div>
              <div className="text-blue-200 text-sm">Communities Reached</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} Muskurahat Foundation. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#transparency" className="hover:text-yellow-400 transition-colors">Financial Transparency</a>
              <a href="#annual-report" className="hover:text-yellow-400 transition-colors">Annual Report</a>
            </div>
          </div>
          
          {/* Trust Badges */}
          <div className="flex justify-center items-center gap-4 mt-4 pt-4 border-t border-gray-800">
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>Verified NGO</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              <span>80G Tax Benefit</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              <span>100% Transparent</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}