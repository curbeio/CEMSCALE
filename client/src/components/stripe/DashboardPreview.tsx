import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  CreditCard,
  DollarSign,
  Users,
  Clock
} from "lucide-react";
import type { DashboardMetrics, Invoice } from "@shared/schema";

export function DashboardPreview() {
  const { data: metrics, isLoading } = useQuery<DashboardMetrics>({
    queryKey: ["/api/dashboard/metrics"],
    refetchInterval: 5000,
  });

  const { data: invoices } = useQuery<Invoice>({
    queryKey: ["/api/dashboard/invoices"],
  });

  const [displayVolume, setDisplayVolume] = useState(0);
  
  useEffect(() => {
    if (metrics?.netVolume) {
      const interval = setInterval(() => {
        setDisplayVolume(prev => {
          const diff = metrics.netVolume - prev;
          if (Math.abs(diff) < 10) return metrics.netVolume;
          return prev + diff * 0.1;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [metrics?.netVolume]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  if (isLoading) {
    return (
      <div className="relative max-w-5xl mx-auto">
        <Card className="relative bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden stripe-card-shadow p-8">
          <div className="space-y-4">
            <Skeleton className="h-12 w-64" />
            <div className="grid grid-cols-4 gap-4">
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
              <Skeleton className="h-24" />
            </div>
            <Skeleton className="h-48" />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50" />
      
      <Card className="relative bg-card/95 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden stripe-card-shadow">
        <div className="bg-muted/50 border-b border-border px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex items-center justify-center gap-2">
              <div className="bg-background rounded-lg px-4 py-1.5 text-sm text-muted-foreground border border-border">
                dashboard.stripe.com
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Rocket Rides
            </div>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Today</p>
              <h2 className="text-3xl lg:text-4xl font-semibold" data-testid="text-net-volume">
                {formatCurrency(displayVolume || metrics?.netVolume || 0)}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Net volume</p>
            </div>
            <Badge variant="secondary" className="gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50">
              <TrendingUp className="h-3 w-3" />
              +{metrics?.volumeChange?.toFixed(1) || "20.3"}%
            </Badge>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard 
              title="Yesterday" 
              value={formatCurrency(metrics?.yesterdayVolume || 0)}
              icon={Clock}
              change="+15.2%"
              positive
            />
            <MetricCard 
              title="USD Balance" 
              value={formatCurrency(metrics?.usdBalance || 0)}
              icon={DollarSign}
              subtitle="Available to pay out"
            />
            <MetricCard 
              title="Payouts" 
              value={formatCurrency(metrics?.payouts || 0)}
              icon={CreditCard}
              subtitle="Expected today"
            />
            <MetricCard 
              title="New customers" 
              value={String(metrics?.newCustomers || 0)}
              icon={Users}
              change={`+${metrics?.customerChange?.toFixed(1) || "32.1"}%`}
              positive
            />
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Net volume from sales</h3>
                  <Badge variant="secondary" className="gap-1 text-emerald-600 dark:text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" />
                    +{metrics?.volumeChange?.toFixed(1) || "32.8"}%
                  </Badge>
                </div>
                
                <div className="h-40 flex items-end gap-1">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const height = Math.random() * 60 + 20;
                    const isHighlight = i > 24;
                    return (
                      <div 
                        key={i}
                        className={`flex-1 rounded-t transition-all ${
                          isHighlight 
                            ? 'bg-primary' 
                            : 'bg-primary/30'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
                
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Apr 20</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <h3 className="font-medium mb-3">Invoices</h3>
                <div className="space-y-2">
                  <InvoiceRow label="Paid" amount={formatCurrency(invoices?.paid || 25000)} color="emerald" />
                  <InvoiceRow label="Open" amount={formatCurrency(invoices?.open || 20000)} color="blue" />
                  <InvoiceRow label="Past due" amount={formatCurrency(invoices?.pastDue || 1000)} color="red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

function MetricCard({ 
  title, 
  value, 
  icon: Icon, 
  change, 
  positive,
  subtitle 
}: { 
  title: string; 
  value: string; 
  icon: React.ComponentType<{ className?: string }>;
  change?: string;
  positive?: boolean;
  subtitle?: string;
}) {
  return (
    <div className="bg-muted/30 rounded-xl p-4">
      <div className="flex items-center justify-between mb-2">
        <Icon className="h-4 w-4 text-muted-foreground" />
        {change && (
          <span className={`text-xs flex items-center gap-0.5 ${
            positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-600 dark:text-red-400'
          }`}>
            {positive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
            {change}
          </span>
        )}
      </div>
      <p className="font-semibold text-lg">{value}</p>
      <p className="text-xs text-muted-foreground">{subtitle || title}</p>
    </div>
  );
}

function InvoiceRow({ label, amount, color }: { label: string; amount: string; color: string }) {
  const colorClasses: Record<string, string> = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    red: 'bg-red-500',
  };
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className={`w-2 h-2 rounded-full ${colorClasses[color]}`} />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm font-medium">{amount}</span>
    </div>
  );
}
