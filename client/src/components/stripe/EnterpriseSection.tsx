import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const enterprises = [
  {
    id: "bmw",
    name: "BMW",
    headline: "Learn why BMW chose Stripe to power ecommerce and payments",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop",
    color: "from-blue-600 to-blue-800",
  },
  {
    id: "amazon",
    name: "Amazon",
    headline: "See how Amazon simplified cross-border payments with Stripe",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "maersk",
    name: "Maersk",
    headline: "See how Maersk tapped into new technology to make shipping easier",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=600&fit=crop",
    color: "from-sky-500 to-blue-600",
  },
  {
    id: "twilio",
    name: "Twilio",
    headline: "See how Twilio increased authorization rates by 10% with Stripe",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    color: "from-red-500 to-pink-600",
  },
];

export function EnterpriseSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % enterprises.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + enterprises.length) % enterprises.length);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 bg-muted/30">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <Badge variant="secondary" className="mb-4">Enterprise</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight">
              Trusted by the world's leading companies
            </h2>
          </div>
          
          <p className="text-muted-foreground max-w-md">
            Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {enterprises.map((enterprise) => (
                <div 
                  key={enterprise.id}
                  className="w-full flex-shrink-0"
                >
                  <Card className="relative overflow-hidden aspect-[16/9] lg:aspect-[21/9]">
                    <img 
                      src={enterprise.image}
                      alt={enterprise.name}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                      <Badge className={`bg-gradient-to-r ${enterprise.color} border-0 mb-4`}>
                        {enterprise.name}
                      </Badge>
                      <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 max-w-2xl">
                        {enterprise.headline}
                      </h3>
                      <Button 
                        variant="outline" 
                        className="rounded-full text-white border-white/30 bg-white/10 hover:bg-white/20"
                        data-testid={`button-read-story-${enterprise.id}`}
                      >
                        Read story <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {enterprises.map((enterprise, index) => (
                <button
                  key={enterprise.id}
                  onClick={() => setActiveIndex(index)}
                  className={`w-12 h-1 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-primary' : 'bg-border'
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={prevSlide}
                data-testid="button-prev-slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full"
                onClick={nextSlide}
                data-testid="button-next-slide"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {enterprises.map((enterprise, index) => (
            <button
              key={enterprise.id}
              onClick={() => setActiveIndex(index)}
              className={`p-4 rounded-xl transition-all text-left ${
                index === activeIndex 
                  ? 'bg-card border border-border' 
                  : 'hover:bg-muted/50'
              }`}
              data-testid={`button-enterprise-${enterprise.id}`}
            >
              <div className="font-semibold text-sm">{enterprise.name}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
