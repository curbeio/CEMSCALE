import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "4", label: "integrated solutions working together", suffix: "" },
  { value: "99.9", label: "data accuracy guaranteed", suffix: "%" },
  { value: "10x", label: "faster insights from unified data", suffix: "" },
  { value: "24/7", label: "real-time data synchronization", suffix: "" },
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
      className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-muted/30"
    >
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            CemScale makes data unification as seamless as business growth
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our platform connects all your business touchpoints into one intelligent ecosystem, transforming scattered data into strategic decisions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
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
              <div className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold stripe-text-gradient mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}{stat.suffix}
              </div>
              <p className="text-sm lg:text-base text-muted-foreground" data-testid={`stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
