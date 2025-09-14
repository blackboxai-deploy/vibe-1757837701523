// UPI Payment Utility Functions for Muskurahat Foundation

export interface UPIPaymentDetails {
  pa: string; // Payment Address
  pn: string; // Payee Name
  cu: string; // Currency
  am?: string; // Amount
  tn?: string; // Transaction Note
  mc?: string; // Merchant Code
}

export const MUSKURAHAT_UPI: UPIPaymentDetails = {
  pa: "muskurahatfoun1@ptyes",
  pn: "Muskurahat Foundation",
  cu: "INR"
};

/**
 * Generate UPI payment intent URL
 * @param amount - Amount in rupees (optional)
 * @param note - Transaction note (optional)
 * @returns Complete UPI intent URL
 */
export function generateUPIIntent(amount?: number, note?: string): string {
  const params = new URLSearchParams({
    pa: MUSKURAHAT_UPI.pa,
    pn: MUSKURAHAT_UPI.pn,
    cu: MUSKURAHAT_UPI.cu
  });

  if (amount && amount > 0) {
    params.append("am", amount.toString());
  }

  if (note) {
    params.append("tn", encodeURIComponent(note));
  }

  return `upi://pay?${params.toString()}`;
}

/**
 * Handle UPI payment with fallback options
 * @param amount - Donation amount
 * @param purpose - Purpose of donation
 */
export function initiateUPIPayment(amount?: number, purpose?: string): void {
  const note = purpose || "Donation for education and food";
  const upiUrl = generateUPIIntent(amount, note);
  
  // Try to open UPI app
  const link = document.createElement("a");
  link.href = upiUrl;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  
  // Fallback for devices that don't support UPI
  link.addEventListener("click", () => {
    setTimeout(() => {
      // Check if UPI app opened successfully
      if (document.visibilityState === "visible") {
        // UPI app didn't open, show fallback
        showUPIFallback(amount, note);
      }
    }, 1000);
  });
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Show UPI payment fallback options
 * @param amount - Amount to donate
 * @param note - Transaction note
 */
function showUPIFallback(amount?: number, note?: string): void {
  const fallbackMessage = `
    UPI Payment Details:
    
    UPI ID: ${MUSKURAHAT_UPI.pa}
    Name: ${MUSKURAHAT_UPI.pn}
    ${amount ? `Amount: ₹${amount}` : ""}
    ${note ? `Note: ${note}` : ""}
    
    You can also scan the QR code or copy the UPI ID to make payment through any UPI app.
  `;
  
  alert(fallbackMessage);
}

/**
 * Predefined donation amounts with their impact
 */
export const DONATION_AMOUNTS = [
  {
    amount: 100,
    impact: "Buy notebooks and stationery for a child",
    color: "bg-yellow-400 hover:bg-yellow-500"
  },
  {
    amount: 500,
    impact: "Feed a child for an entire month",
    color: "bg-orange-400 hover:bg-orange-500"
  },
  {
    amount: 1000,
    impact: "Send a child to school for education",
    color: "bg-green-400 hover:bg-green-500"
  },
  {
    amount: 2500,
    impact: "Support a child's education for 3 months",
    color: "bg-blue-400 hover:bg-blue-500"
  }
];

/**
 * Track donation analytics (can be integrated with analytics services)
 * @param amount - Donation amount
 * @param source - Source of donation (button, section, etc.)
 */
export function trackDonation(amount?: number, source?: string): void {
  // Analytics tracking can be added here
  console.log("Donation initiated:", { amount, source, timestamp: new Date() });
  
  // Can integrate with Google Analytics, Facebook Pixel, etc.
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "donation_initiated", {
      event_category: "engagement",
      event_label: source || "unknown",
      value: amount || 0
    });
  }
}