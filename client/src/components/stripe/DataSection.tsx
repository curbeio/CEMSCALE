import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Shield, 
  Zap, 
  Target, 
  Globe2, 
  Users,
  Building2,
  Mail,
  Phone,
  Linkedin,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const dataFeatures = [
  {
    icon: Database,
    title: "+50 Millones de Contactos",
    description: "Base de datos B2B actualizada diariamente con decisores de compra verificados.",
  },
  {
    icon: Shield,
    title: "Verificación en Tiempo Real",
    description: "Emails, teléfonos y datos validados antes de cada entrega. 95%+ de precisión garantizada.",
  },
  {
    icon: Target,
    title: "Segmentación Avanzada",
    description: "Filtra por industria, cargo, tamaño de empresa, ubicación, tecnologías y más de 50 criterios.",
  },
  {
    icon: Globe2,
    title: "Cobertura Global",
    description: "Leads de LATAM, USA, Europa y Asia. Expande tu mercado sin límites geográficos.",
  },
];

const dataPoints = [
  { icon: Building2, label: "Empresas", value: "12M+" },
  { icon: Users, label: "Decisores", value: "50M+" },
  { icon: Mail, label: "Emails verificados", value: "98%" },
  { icon: Phone, label: "Teléfonos directos", value: "45M+" },
];

const industries = [
  "Tecnología", "Finanzas", "Salud", "Manufactura", "Retail", 
  "Educación", "Real Estate", "Consulting", "Marketing", "Legal"
];

export function DataSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6B8CFF]/5 via-[#7E4EF2]/5 to-transparent" />
      
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 lg:mb-16">
          <Badge 
            className="mb-4 bg-[#7CFD98]/20 text-[#7CFD98] border-[#7CFD98]/30"
          >
            Data Premium
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4">
            La base de datos de leads
            <span className="stripe-text-gradient block"> más potente del mercado</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Accede a millones de contactos B2B verificados y actualizados. 
            Encuentra a tus clientes ideales con precisión quirúrgica.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <div>
            <div className="grid sm:grid-cols-2 gap-4">
              {dataFeatures.map((feature) => (
                <Card 
                  key={feature.title}
                  className="p-5 hover-elevate transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center mb-3">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-3xl blur-2xl opacity-50" />
            
            <Card className="relative p-6 lg:p-8 stripe-card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Nuestra Data en Números</h3>
                <Badge className="bg-[#7CFD98]/20 text-[#7CFD98]">Live</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {dataPoints.map((point) => (
                  <div key={point.label} className="bg-muted/50 rounded-xl p-4 text-center">
                    <point.icon className="h-6 w-6 mx-auto mb-2 text-[#6B8CFF]" />
                    <p className="text-2xl font-bold text-foreground">{point.value}</p>
                    <p className="text-xs text-muted-foreground">{point.label}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-sm text-muted-foreground mb-3">Industrias disponibles:</p>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <Badge key={industry} variant="secondary" className="text-xs">
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="p-6 lg:p-10 bg-gradient-to-r from-[#6B8CFF]/10 via-[#7E4EF2]/10 to-[#7CFD98]/10 border-primary/20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                ¿Por qué nuestra data es diferente?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7CFD98] mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Actualización constante:</strong> Nuestra base se actualiza diariamente con nuevos contactos y verificaciones.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7CFD98] mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Datos enriquecidos:</strong> Cargo, empresa, industria, tecnologías, redes sociales y más en cada contacto.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7CFD98] mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Intent data:</strong> Identificamos leads que están activamente buscando soluciones como la tuya.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#7CFD98] mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Cumplimiento GDPR:</strong> Toda nuestra data cumple con las regulaciones de privacidad internacionales.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center lg:text-right">
              <p className="text-4xl lg:text-5xl font-bold text-[#7CFD98] mb-2">95%+</p>
              <p className="text-lg text-muted-foreground mb-6">Precisión de datos garantizada</p>
              <Button size="lg" className="rounded-full gap-2">
                Solicitar Acceso <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
