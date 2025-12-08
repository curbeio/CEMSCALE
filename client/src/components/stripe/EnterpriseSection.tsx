import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

const enterprises = [
  {
    id: "fitness-chain",
    name: "Fitness Chain",
    headline: "How a major gym network unified member data across 50+ locations",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
    color: "from-[#a78bfa] to-[#6b4cff]",
  },
  {
    id: "education-group",
    name: "Education Group",
    headline: "See how this university streamlined student enrollment data by 300%",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    color: "from-[#6b4cff] to-[#7cffd4]",
  },
  {
    id: "retail-brand",
    name: "Retail Brand",
    headline: "Connecting offline and online customer journeys in real-time",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    color: "from-[#7cffd4] to-[#6b4cff]",
  },
  {
    id: "healthcare-network",
    name: "Healthcare Network",
    headline: "How patient data unification improved care coordination by 40%",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
    color: "from-[#ff805d] to-[#a78bfa]",
  },
];

export function EnterpriseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % enterprises.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % enterprises.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + enterprises.length) % enterprises.length);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <Badge className="mb-4 bg-[#6b4cff]/20 text-[#a78bfa] border-[#6b4cff]/30">
              <Building2 className="w-3 h-3 mr-1" />
              Success Stories
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              Trusted by growing businesses
            </h2>
          </div>
          
          <p className="text-sm sm:text-base text-[#a59ecb] max-w-md">
            See how businesses are transforming their operations with CemScale's unified data platform.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl sm:rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {enterprises.map((enterprise) => (
                <div 
                  key={enterprise.id}
                  className="w-full flex-shrink-0"
                >
                  <div className="relative overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] rounded-xl sm:rounded-2xl border border-[#1f1f35]">
                    <img 
                      src={enterprise.image}
                      alt={enterprise.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-12">
                      <Badge className={`bg-gradient-to-r ${enterprise.color} border-0 mb-3 sm:mb-4 text-xs sm:text-sm`}>
                        {enterprise.name}
                      </Badge>
                      <h3 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white mb-3 sm:mb-4 max-w-2xl leading-snug">
                        {enterprise.headline}
                      </h3>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="rounded-full text-white border-white/30 bg-white/10 hover:bg-white/20 text-xs sm:text-sm"
                        data-testid={`button-read-story-${enterprise.id}`}
                      >
                        Read story <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-4 sm:mt-6">
            <div className="flex gap-1.5 sm:gap-2">
              {enterprises.map((enterprise, index) => (
                <button
                  key={enterprise.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-8 sm:w-12 h-1 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-[#6b4cff]' : 'bg-[#1f1f35]'
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-transparent border-[#1f1f35] text-[#a59ecb] hover:bg-[#1a1a2e] hover:text-white h-9 w-9 sm:h-10 sm:w-10"
                onClick={prevSlide}
                data-testid="button-prev-slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full bg-transparent border-[#1f1f35] text-[#a59ecb] hover:bg-[#1a1a2e] hover:text-white h-9 w-9 sm:h-10 sm:w-10"
                onClick={nextSlide}
                data-testid="button-next-slide"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mini Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-8 sm:mt-10">
          {enterprises.map((enterprise, index) => (
            <button
              key={enterprise.id}
              onClick={() => setActiveIndex(index)}
              className={`p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all text-left ${
                index === activeIndex 
                  ? 'bg-[#0a0a1a] border border-[#6b4cff]/50' 
                  : 'hover:bg-[#0a0a1a]/50 border border-transparent'
              }`}
              data-testid={`button-enterprise-${enterprise.id}`}
            >
              <div className="font-medium text-xs sm:text-sm text-white">{enterprise.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
