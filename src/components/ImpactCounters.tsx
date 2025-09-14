"use client";

import AnimatedCounter from "@/components/AnimatedCounter";

export default function ImpactCounters() {
  const impactData = [
    {
      number: 1200,
      suffix: "+",
      label: "Children Educated",
      description: "Given access to quality education and learning materials",
      icon: "📚",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: 3500,
      suffix: "+",
      label: "Meals Served",
      description: "Nutritious meals provided to hungry children",
      icon: "🍽️",
      color: "from-green-500 to-green-600"
    },
    {
      number: 5000,
      suffix: "+",
      label: "Lives Impacted",
      description: "Children and families supported through our programs",
      icon: "❤️",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-red-800 via-orange-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            Our Impact So Far
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Every donation creates a ripple effect of positive change in the lives of underprivileged children
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {impactData.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl mb-4">
                {item.icon}
              </div>
              
              {/* Animated Counter */}
              <div className="mb-4">
                <AnimatedCounter
                  end={item.number}
                  suffix={item.suffix}
                  duration={2500}
                  delay={index * 300}
                  className={`text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                />
              </div>

              {/* Label */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 font-poppins">
                {item.label}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-8 font-poppins">
            Current Year Progress
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Education Progress */}
            <div className="text-center">
              <div className="text-white/90 mb-2">Education Goal</div>
              <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-blue-500 h-full rounded-full animate-pulse" 
                  style={{ width: '75%' }}
                ></div>
              </div>
              <div className="text-white text-sm">75% Complete</div>
            </div>

            {/* Nutrition Progress */}
            <div className="text-center">
              <div className="text-white/90 mb-2">Nutrition Goal</div>
              <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-green-400 to-green-500 h-full rounded-full animate-pulse" 
                  style={{ width: '85%' }}
                ></div>
              </div>
              <div className="text-white text-sm">85% Complete</div>
            </div>

            {/* Support Progress */}
            <div className="text-center">
              <div className="text-white/90 mb-2">Support Goal</div>
              <div className="bg-white/20 rounded-full h-3 mb-2 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-red-400 to-red-500 h-full rounded-full animate-pulse" 
                  style={{ width: '68%' }}
                ></div>
              </div>
              <div className="text-white text-sm">68% Complete</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-xl text-white/95 mb-4">
            Help us reach our goals and create even more impact!
          </p>
          <div className="inline-flex items-center gap-2 text-white/80">
            <span>Every donation counts</span>
            <span className="animate-pulse">❤️</span>
          </div>
        </div>
      </div>
    </section>
  );
}