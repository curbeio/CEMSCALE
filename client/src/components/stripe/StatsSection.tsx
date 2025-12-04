import { useEffect, useState, useRef } from "react";

const stats = [
  { value: "500M+", label: "API requests per day", suffix: "" },
  { value: "99.999", label: "historical uptime", suffix: "%" },
  { value: "90", label: "of U.S. adults have bought from businesses using Stripe", suffix: "%" },
  { value: "135+", label: "currencies and payment methods supported", suffix: "" },
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
      className="py-24 lg:py-32 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">
            Stripe makes moving money as easy and programmable as moving data
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
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
              <div className="text-4xl lg:text-6xl font-semibold stripe-text-gradient mb-2" data-testid={`stat-value-${index}`}>
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
