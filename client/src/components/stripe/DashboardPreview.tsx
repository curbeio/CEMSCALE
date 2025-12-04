import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Target,
  DollarSign,
  Users,
  Zap,
  CheckCircle2,
  Clock,
  Star
} from "lucide-react";

export function DashboardPreview() {
  const [displayLeads, setDisplayLeads] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  const totalLeads = 12847;
  const qualifiedLeads = 4256;
  const conversions = 1893;
  const pipelineValue = 2847500;
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!isLoading) {
      const interval = setInterval(() => {
        setDisplayLeads(prev => {
          const diff = totalLeads - prev;
          if (Math.abs(diff) < 50) return totalLeads;
          return prev + Math.floor(diff * 0.1);
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [isLoading]);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
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
      <div className="absolute -inset-4 bg-gradient-to-r from-[#6B8CFF]/20 via-[#7E4EF2]/20 to-[#7CFD98]/20 rounded-3xl blur-2xl opacity-50" />
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
                leads.cemscale.com
              </div>
            </div>
            <div className="text-sm text-muted-foreground">CEM Dashboard</div>
          </div>
        </div>
        
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-muted-foreground">Total Leads</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold" data-testid="text-total-leads">
                {formatNumber(displayLeads || totalLeads)}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">Active in pipeline</p>
            </div>
            <Badge variant="secondary" className="gap-1 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50">
              <TrendingUp className="h-3 w-3" />
              +47.3%
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <MetricCard 
              title="New Today" 
              value="847"
              icon={Zap}
              change="+23.5%"
              positive
            />
            <MetricCard 
              title="Qualified Leads" 
              value={formatNumber(qualifiedLeads)}
              icon={Target}
              subtitle="Ready to convert"
            />
            <MetricCard 
              title="Conversions" 
              value={formatNumber(conversions)}
              icon={CheckCircle2}
              change="+31.2%"
              positive
            />
            <MetricCard 
              title="Pipeline Value" 
              value={formatCurrency(pipelineValue)}
              icon={DollarSign}
              subtitle="Potential revenue"
            />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="md:col-span-1 lg:col-span-2">
              <div className="bg-muted/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Lead Growth</h3>
                  <Badge variant="secondary" className="gap-1 text-emerald-600 dark:text-emerald-400">
                    <ArrowUpRight className="h-3 w-3" />
                    +52.8%
                  </Badge>
                </div>
                
                <div className="h-40 flex items-end gap-1">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const baseHeight = 20 + (i * 2);
                    const variation = Math.sin(i * 0.5) * 15;
                    const height = Math.min(95, baseHeight + variation);
                    const isHighlight = i > 24;
                    return (
                      <div 
                        key={i}
                        className={`flex-1 rounded-t transition-all ${
                          isHighlight 
                            ? 'bg-[#7CFD98]' 
                            : 'bg-[#6B8CFF]/40'
                        }`}
                        style={{ height: `${height}%` }}
                      />
                    );
                  })}
                </div>
                
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>30 days ago</span>
                  <span>Today</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-muted/30 rounded-xl p-4">
                <h3 className="font-medium mb-3">Lead Status</h3>
                <div className="space-y-2">
                  <LeadStatusRow label="Hot Leads" count="2,847" color="orange" icon={Star} />
                  <LeadStatusRow label="Qualified" count="4,256" color="emerald" icon={CheckCircle2} />
                  <LeadStatusRow label="Nurturing" count="3,891" color="blue" icon={Clock} />
                  <LeadStatusRow label="New" count="1,853" color="purple" icon={Users} />
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

function LeadStatusRow({ 
  label, 
  count, 
  color,
  icon: Icon 
}: { 
  label: string; 
  count: string; 
  color: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const colorClasses: Record<string, string> = {
    emerald: 'text-emerald-500',
    blue: 'text-[#6B8CFF]',
    orange: 'text-[#FF805D]',
    purple: 'text-[#7E4EF2]',
  };
  
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon className={`w-4 h-4 ${colorClasses[color]}`} />
        <span className="text-sm">{label}</span>
      </div>
      <span className="text-sm font-medium">{count}</span>
    </div>
  );
}
