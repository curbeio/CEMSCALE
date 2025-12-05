import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "50M+", label: "verified B2B contacts", suffix: "" },
  { value: "95", label: "data accuracy guaranteed", suffix: "%" },
  { value: "12M+", label: "companies in our database", suffix: "" },
  { value: "150+", label: "countries with coverage", suffix: "" },
];

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 bg-[#030014]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 text-white">
            AI-powered data at scale
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto">
            Our AI processes millions of signals to deliver verified, enriched data. 
            Precision targeting powered by machine learning.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold bg-gradient-to-r from-[#6b4cff] to-[#a78bfa] bg-clip-text text-transparent mb-2" 
                data-testid={`stat-value-${index}`}
              >
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm lg:text-base text-[#a59ecb]" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
