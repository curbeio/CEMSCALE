import { motion } from "framer-motion";

import dashboardFlyer from "@assets/Flyers_servicios-01_1764870214057.png";
import leadsFlyer from "@assets/Flyers_servicios-02_1764870214057.png";
import marketingFlyer from "@assets/Flyers_servicios-03_1764870214057.png";
import offlineFlyer from "@assets/Flyers_servicios-04_1764870214057.png";

const services = [
  {
    id: "dashboard",
    name: "Dashboard",
    tagline: "We bring clarity to scattered data.",
    description: "Centralize information and transform scattered data into a clear, organized vision for decision-making.",
    image: dashboardFlyer,
    color: "#7E4EF2",
    bgColor: "from-[#7E4EF2]/20 via-[#7E4EF2]/10 to-transparent",
  },
  {
    id: "leads",
    name: "Leads",
    tagline: "We focus data into actionable insights.",
    description: "Convert data into actionable insights, facilitating effective identification and management of business opportunities.",
    image: leadsFlyer,
    color: "#7CFD98",
    bgColor: "from-[#7CFD98]/20 via-[#7CFD98]/10 to-transparent",
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "We enable businesses to scale intelligently.",
    description: "Drive businesses to grow intelligently and strategically, connecting tools and channels.",
    image: marketingFlyer,
    color: "#6B8CFF",
    bgColor: "from-[#6B8CFF]/20 via-[#6B8CFF]/10 to-transparent",
  },
  {
    id: "offline-form",
    name: "Offline Form",
    tagline: "We connect every channel into one seamless ecosystem.",
    description: "Integrate physical and digital channels into a unified ecosystem, ensuring continuity in the customer experience.",
    image: offlineFlyer,
    color: "#7CFD98",
    bgColor: "from-[#7CFD98]/20 via-[#7CFD98]/10 to-transparent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      <div className="absolute inset-0 stripe-hero-gradient opacity-50" />
      
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{ 
              backgroundColor: 'rgba(107, 140, 255, 0.1)', 
              color: '#6B8CFF',
              border: '1px solid rgba(107, 140, 255, 0.2)'
            }}
          >
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
            Complete Data Solutions for
            <span className="stripe-text-gradient block sm:inline"> Modern Businesses</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Four integrated solutions that work together to transform how you collect, analyze, and act on your business data.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              data-testid={`card-service-${service.id}`}
            >
              <div className={`absolute -inset-2 bg-gradient-to-b ${service.bgColor} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative bg-card dark:bg-card/80 rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 
                      className="text-xl sm:text-2xl font-bold text-white mb-1"
                      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
                    >
                      {service.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium">
                      {service.tagline}
                    </p>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed flex-1">
                    {service.description}
                  </p>
                  
                  <button
                    className="mt-4 inline-flex items-center text-sm font-semibold transition-colors group/btn"
                    style={{ color: service.color }}
                    data-testid={`button-learn-${service.id}`}
                  >
                    Learn more
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
