import { motion } from "framer-motion";

import dashboardFlyer from "@assets/Flyers_servicios-01_1764870214057.png";
import leadsFlyer from "@assets/Flyers_servicios-02_1764870214057.png";
import marketingFlyer from "@assets/Flyers_servicios-03_1764870214057.png";
import offlineFlyer from "@assets/Flyers_servicios-04_1764870214057.png";

const services = [
  {
    id: "telephony",
    name: "Telephony",
    tagline: "Communication without limits.",
    description: "Cloud telephony system integrated with your platform. Call recording, intelligent IVR and real-time analytics.",
    image: dashboardFlyer,
    color: "#a78bfa",
  },
  {
    id: "marketing",
    name: "Marketing",
    tagline: "Automate and scale your reach.",
    description: "Email, SMS, WhatsApp and social media in one platform. Automated campaigns that convert.",
    image: marketingFlyer,
    color: "#6b4cff",
  },
  {
    id: "crm",
    name: "Engagement",
    tagline: "Every customer, under control.",
    description: "Manage relationships, interaction history and visual sales pipeline. Everything in one place.",
    image: offlineFlyer,
    color: "#7cffd4",
  },
  {
    id: "leads",
    name: "Leads",
    tagline: "Convert more, lose less.",
    description: "Automated capture, qualification and nurturing. Intelligent scoring to prioritize high-value opportunities.",
    image: leadsFlyer,
    color: "#ff805d",
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
    <section className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(107, 76, 255, 0.1) 0%, transparent 70%)',
          }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span 
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 bg-[#6b4cff]/10 text-[#a78bfa] border border-[#6b4cff]/20"
          >
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Everything you need to
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#a78bfa] bg-clip-text text-transparent"> sell more</span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-3xl mx-auto">
            Telephony, Marketing, Engagement and Leads integrated to transform how you manage and convert opportunities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
              data-testid={`card-service-${service.id}`}
            >
              <div className="relative bg-[#0a0a1a]/80 rounded-2xl overflow-hidden border border-[#1f1f35] hover:border-[#6b4cff]/50 transition-all duration-300 h-full flex flex-col">
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
                  <p className="text-[#a59ecb] text-sm leading-relaxed flex-1">
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
