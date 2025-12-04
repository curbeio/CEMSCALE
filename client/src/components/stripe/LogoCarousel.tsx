import { 
  SiGoogle, 
  SiAmazon, 
  SiMeta, 
  SiSalesforce, 
  SiHubspot, 
  SiZapier, 
  SiShopify, 
  SiMailchimp 
} from "react-icons/si";

const logos = [
  { name: "Google", Icon: SiGoogle },
  { name: "Amazon", Icon: SiAmazon },
  { name: "Meta", Icon: SiMeta },
  { name: "Salesforce", Icon: SiSalesforce },
  { name: "HubSpot", Icon: SiHubspot },
  { name: "Zapier", Icon: SiZapier },
  { name: "Shopify", Icon: SiShopify },
  { name: "Mailchimp", Icon: SiMailchimp },
];

export function LogoCarousel() {
  return (
    <section className="py-12 sm:py-16 border-y border-border/50">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-6 sm:gap-8 lg:gap-10 items-center justify-items-center">
          {logos.map((logo) => (
            <div 
              key={logo.name}
              className="flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
              data-testid={`logo-${logo.name.toLowerCase()}`}
              title={logo.name}
            >
              <logo.Icon className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
