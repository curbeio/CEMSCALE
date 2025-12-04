import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CreditCard, 
  BarChart3, 
  Users, 
  Building2,
  Shield,
  Globe,
  Zap,
  FileText,
  Calculator,
  Wallet,
  Check,
  ArrowRight
} from "lucide-react";

const productCategories = [
  { 
    id: "payments",
    name: "Payments", 
    icon: CreditCard,
    description: "Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI.",
    products: [
      { name: "Payments", href: "#" },
      { name: "Tax", href: "#" },
      { name: "Radar", href: "#" },
      { name: "Terminal", href: "#" },
    ]
  },
  { 
    id: "billing",
    name: "Billing", 
    icon: BarChart3,
    description: "Manage flat rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations.",
    products: [
      { name: "Billing", href: "#" },
      { name: "Invoicing", href: "#" },
      { name: "RevRec", href: "#" },
      { name: "Sigma", href: "#" },
    ]
  },
  { 
    id: "connect",
    name: "Connect", 
    icon: Users,
    description: "Integrate payments into your platform or marketplace for end-to-end payments experiences.",
    products: [
      { name: "Connect", href: "#" },
      { name: "Payouts", href: "#" },
      { name: "Terminal", href: "#" },
      { name: "Elements", href: "#" },
    ]
  },
  { 
    id: "issuing",
    name: "Issuing", 
    icon: Building2,
    description: "Launch, manage, and scale a commercial card program without any setup fees.",
    products: [
      { name: "Issuing", href: "#" },
      { name: "Connect", href: "#" },
      { name: "Treasury", href: "#" },
      { name: "Capital", href: "#" },
    ]
  },
];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("payments");
  const category = productCategories.find(c => c.id === activeCategory)!;

  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">Products</Badge>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
            A fully integrated suite of financial and payments products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {productCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              className="rounded-full gap-2"
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-category-${cat.id}`}
            >
              <cat.icon className="h-4 w-4" />
              {cat.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <category.icon className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold">{category.name}</h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-product-description">
              {category.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {category.products.map((product) => (
                <a
                  key={product.name}
                  href={product.href}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  data-testid={`link-product-${product.name.toLowerCase()}`}
                >
                  {product.name}
                  <ArrowRight className="h-3 w-3" />
                </a>
              ))}
            </div>

            <Button className="rounded-full gap-2" data-testid="button-learn-more">
              Learn more <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="order-1 lg:order-2">
            {activeCategory === "payments" && <PaymentsPreview />}
            {activeCategory === "billing" && <BillingPreview />}
            {activeCategory === "connect" && <ConnectPreview />}
            {activeCategory === "issuing" && <IssuingPreview />}
          </div>
        </div>
      </div>
    </section>
  );
}

function PaymentsPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-6 stripe-card-shadow-sm">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=64&h=64&fit=crop" 
              alt="Product"
              className="w-12 h-12 object-cover rounded-lg"
            />
          </div>
          <div>
            <h4 className="font-semibold">Wood Chair 001</h4>
            <p className="text-2xl font-semibold">$149</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-2 block">Pay with</label>
            <div className="grid grid-cols-4 gap-2">
              {["Card", "Apple Pay", "Google Pay", "Klarna"].map((method, i) => (
                <button
                  key={method}
                  className={`p-2 rounded-lg border text-xs font-medium transition-colors ${
                    i === 0 ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Email</label>
            <input 
              type="email" 
              className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-2 block">Card information</label>
            <div className="border border-border rounded-lg overflow-hidden">
              <input 
                type="text" 
                className="w-full px-3 py-2 bg-background text-sm border-b border-border"
                placeholder="1234 1234 1234 1234"
              />
              <div className="flex">
                <input 
                  type="text" 
                  className="flex-1 px-3 py-2 bg-background text-sm border-r border-border"
                  placeholder="MM / YY"
                />
                <input 
                  type="text" 
                  className="flex-1 px-3 py-2 bg-background text-sm"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>

          <Button className="w-full" size="lg" data-testid="button-pay">
            Pay $149
          </Button>
        </div>
      </Card>
    </div>
  );
}

function BillingPreview() {
  const plans = [
    { name: "Standard", users: "Up to 5 users", price: "$49", popular: false },
    { name: "Professional", users: "Up to 25 users", price: "$149", popular: true },
    { name: "Enterprise", users: "Unlimited users", price: "$299", popular: false },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-50" />
      
      <div className="relative grid gap-4">
        {plans.map((plan) => (
          <Card 
            key={plan.name}
            className={`p-4 stripe-card-shadow-sm ${plan.popular ? 'ring-2 ring-primary' : ''}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold">{plan.name}</h4>
                  {plan.popular && (
                    <Badge className="text-xs">Popular</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{plan.users}</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-semibold">{plan.price}</p>
                <p className="text-xs text-muted-foreground">/month</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function ConnectPreview() {
  const orders = [
    { id: "#9125", name: "Hanako Yamada", status: "Processing", amount: "$150.00" },
    { id: "#9124", name: "Jacques Muller", status: "Completed", amount: "$200.00" },
    { id: "#9123", name: "John Appleseed", status: "On Hold", amount: "$178.00" },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-yellow-500/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative p-4 stripe-card-shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-semibold">Orders</h4>
          <Badge variant="secondary">Today</Badge>
        </div>
        
        <div className="space-y-3">
          {orders.map((order) => (
            <div 
              key={order.id}
              className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                  {order.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium">{order.name}</p>
                  <p className="text-xs text-muted-foreground">{order.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{order.amount}</p>
                <Badge 
                  variant="secondary" 
                  className={`text-xs ${
                    order.status === 'Completed' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-600' :
                    order.status === 'Processing' ? 'bg-blue-50 dark:bg-blue-950 text-blue-600' :
                    'bg-amber-50 dark:bg-amber-950 text-amber-600'
                  }`}
                >
                  {order.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function IssuingPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl opacity-50" />
      
      <div className="relative space-y-4">
        <Card className="p-6 stripe-card-shadow-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="flex justify-between items-start mb-8">
            <div className="w-12 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded" />
            <span className="text-xs opacity-70">STRIPE</span>
          </div>
          <p className="font-mono text-lg tracking-widest mb-4">•••• •••• •••• 4242</p>
          <div className="flex justify-between">
            <div>
              <p className="text-xs opacity-70">Cardholder</p>
              <p className="text-sm">Jane Diaz</p>
            </div>
            <div>
              <p className="text-xs opacity-70">Expires</p>
              <p className="text-sm">12/27</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-4 stripe-card-shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Available Balance</p>
              <p className="text-2xl font-semibold">$25,432.00</p>
            </div>
            <Button size="sm" data-testid="button-add-funds">Add funds</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
