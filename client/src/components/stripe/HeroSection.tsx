import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Play, 
  Users, 
  Mail, 
  Phone,
  BarChart3,
  Activity,
  Bell,
  CheckCircle2,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

function useLiveCounter(baseValue: number, increment: number = 1, interval: number = 3000) {
  const [value, setValue] = useState(baseValue);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => v + increment);
    }, interval);
    return () => clearInterval(timer);
  }, [increment, interval]);
  
  return value;
}

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  
  return (
    <div className="flex items-end gap-0.5 h-8">
      {data.map((value, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm transition-all duration-300"
          style={{
            height: `${((value - min) / range) * 100}%`,
            minHeight: '4px',
            backgroundColor: color,
            opacity: 0.4 + (i / data.length) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

const activityPool = [
  // Leads - New acquisitions
  { type: 'lead', text: 'New lead from LinkedIn', icon: Users },
  { type: 'lead', text: 'Lead captured via website', icon: Users },
  { type: 'lead', text: 'New signup from Google Ads', icon: Users },
  { type: 'lead', text: 'Lead imported from CSV', icon: Users },
  { type: 'lead', text: 'Referral lead received', icon: Users },
  { type: 'lead', text: 'Lead from Facebook Ads', icon: Users },
  { type: 'lead', text: 'Webinar registration', icon: Users },
  { type: 'lead', text: 'Demo request submitted', icon: Users },
  { type: 'lead', text: 'Contact form submission', icon: Users },
  { type: 'lead', text: 'Lead from trade show', icon: Users },
  { type: 'lead', text: 'Inbound lead qualified', icon: Users },
  { type: 'lead', text: 'New enterprise inquiry', icon: Users },
  { type: 'lead', text: 'Lead from partner referral', icon: Users },
  { type: 'lead', text: 'Free trial started', icon: Users },
  { type: 'lead', text: 'Lead score updated: 92', icon: Users },
  { type: 'lead', text: 'High-intent lead detected', icon: Users },
  { type: 'lead', text: 'Lead from Instagram', icon: Users },
  { type: 'lead', text: 'Newsletter subscriber', icon: Users },
  { type: 'lead', text: 'Pricing page visitor', icon: Users },
  { type: 'lead', text: 'Lead enriched with data', icon: Users },
  
  // Email activities
  { type: 'email', text: 'Campaign sent to 2.4K', icon: Mail },
  { type: 'email', text: 'Email opened by Sarah M.', icon: Mail },
  { type: 'email', text: 'Link clicked in email', icon: Mail },
  { type: 'email', text: 'Email reply received', icon: Mail },
  { type: 'email', text: 'Sequence completed', icon: Mail },
  { type: 'email', text: 'Email bounced - updated', icon: Mail },
  { type: 'email', text: 'Newsletter sent: 15K', icon: Mail },
  { type: 'email', text: 'A/B test winner selected', icon: Mail },
  { type: 'email', text: 'Follow-up scheduled', icon: Mail },
  { type: 'email', text: 'Email forwarded', icon: Mail },
  { type: 'email', text: 'Template saved', icon: Mail },
  { type: 'email', text: 'Drip campaign started', icon: Mail },
  { type: 'email', text: 'Unsubscribe processed', icon: Mail },
  { type: 'email', text: 'Email delivered: 98.5%', icon: Mail },
  { type: 'email', text: 'Personalization added', icon: Mail },
  { type: 'email', text: 'Email queued for send', icon: Mail },
  { type: 'email', text: 'Auto-reply detected', icon: Mail },
  { type: 'email', text: 'Meeting request sent', icon: Mail },
  { type: 'email', text: 'Proposal email opened', icon: Mail },
  { type: 'email', text: 'Cold outreach replied', icon: Mail },
  
  // Phone/Call activities
  { type: 'call', text: 'Outbound call - 4:32', icon: Phone },
  { type: 'call', text: 'Inbound call received', icon: Phone },
  { type: 'call', text: 'Voicemail left', icon: Phone },
  { type: 'call', text: 'Call scheduled', icon: Phone },
  { type: 'call', text: 'Discovery call done', icon: Phone },
  { type: 'call', text: 'Demo call completed', icon: Phone },
  { type: 'call', text: 'Follow-up call made', icon: Phone },
  { type: 'call', text: 'Call transferred', icon: Phone },
  { type: 'call', text: 'Conference call started', icon: Phone },
  { type: 'call', text: 'Call recording saved', icon: Phone },
  { type: 'call', text: 'Callback requested', icon: Phone },
  { type: 'call', text: 'Call notes added', icon: Phone },
  { type: 'call', text: 'Sales call - 12:45', icon: Phone },
  { type: 'call', text: 'Support call resolved', icon: Phone },
  { type: 'call', text: 'Call outcome: Interested', icon: Phone },
  { type: 'call', text: 'International call made', icon: Phone },
  { type: 'call', text: 'Call transcript ready', icon: Phone },
  { type: 'call', text: 'Missed call logged', icon: Phone },
  { type: 'call', text: 'Call sentiment: Positive', icon: Phone },
  { type: 'call', text: 'Next steps scheduled', icon: Phone },
  
  // Deals/Sales
  { type: 'deal', text: 'Deal closed - $12,500', icon: CheckCircle2 },
  { type: 'deal', text: 'New deal created', icon: CheckCircle2 },
  { type: 'deal', text: 'Deal moved to negotiation', icon: CheckCircle2 },
  { type: 'deal', text: 'Proposal sent - $45K', icon: CheckCircle2 },
  { type: 'deal', text: 'Contract signed', icon: CheckCircle2 },
  { type: 'deal', text: 'Deal won - $28,000', icon: CheckCircle2 },
  { type: 'deal', text: 'Upsell opportunity', icon: CheckCircle2 },
  { type: 'deal', text: 'Renewal processed', icon: CheckCircle2 },
  { type: 'deal', text: 'Quote approved', icon: CheckCircle2 },
  { type: 'deal', text: 'Deal stage updated', icon: CheckCircle2 },
  { type: 'deal', text: 'Revenue forecasted', icon: CheckCircle2 },
  { type: 'deal', text: 'Deal value increased', icon: CheckCircle2 },
  { type: 'deal', text: 'Commission calculated', icon: CheckCircle2 },
  { type: 'deal', text: 'Invoice generated', icon: CheckCircle2 },
  { type: 'deal', text: 'Payment received', icon: CheckCircle2 },
  { type: 'deal', text: 'Enterprise deal closed', icon: CheckCircle2 },
  { type: 'deal', text: 'Multi-year contract', icon: CheckCircle2 },
  { type: 'deal', text: 'Deal assigned to rep', icon: CheckCircle2 },
  { type: 'deal', text: 'Discount approved', icon: CheckCircle2 },
  { type: 'deal', text: 'Cross-sell completed', icon: CheckCircle2 },
  
  // CRM/Data activities
  { type: 'data', text: 'Contact updated', icon: Users },
  { type: 'data', text: 'Company merged', icon: Users },
  { type: 'data', text: 'Data enriched', icon: Users },
  { type: 'data', text: 'Duplicate removed', icon: Users },
  { type: 'data', text: 'Tag added: Enterprise', icon: Users },
  { type: 'data', text: 'Segment updated', icon: Users },
  { type: 'data', text: 'List imported: 500', icon: Users },
  { type: 'data', text: 'Contact verified', icon: Users },
  { type: 'data', text: 'Industry classified', icon: Users },
  { type: 'data', text: 'Revenue data added', icon: Users },
  { type: 'data', text: 'Social profile linked', icon: Users },
  { type: 'data', text: 'Location geocoded', icon: Users },
  { type: 'data', text: 'Timezone detected', icon: Users },
  { type: 'data', text: 'Job title updated', icon: Users },
  { type: 'data', text: 'Company size verified', icon: Users },
  { type: 'data', text: 'Tech stack identified', icon: Users },
  { type: 'data', text: 'Intent signal detected', icon: Users },
  { type: 'data', text: 'Buying stage updated', icon: Users },
  { type: 'data', text: 'Account scored: A+', icon: Users },
  { type: 'data', text: 'Custom field added', icon: Users },
  
  // Marketing activities
  { type: 'marketing', text: 'Campaign launched', icon: Mail },
  { type: 'marketing', text: 'Ad clicked: 342', icon: Mail },
  { type: 'marketing', text: 'Landing page visit', icon: Mail },
  { type: 'marketing', text: 'Form submitted', icon: Mail },
  { type: 'marketing', text: 'Retargeting pixel fired', icon: Mail },
  { type: 'marketing', text: 'UTM tracked', icon: Mail },
  { type: 'marketing', text: 'Content downloaded', icon: Mail },
  { type: 'marketing', text: 'Video watched: 85%', icon: Mail },
  { type: 'marketing', text: 'Event registered', icon: Mail },
  { type: 'marketing', text: 'Social share tracked', icon: Mail },
  { type: 'marketing', text: 'Blog post viewed', icon: Mail },
  { type: 'marketing', text: 'Case study read', icon: Mail },
  { type: 'marketing', text: 'ROI calculated', icon: Mail },
  { type: 'marketing', text: 'Attribution updated', icon: Mail },
  { type: 'marketing', text: 'Conversion tracked', icon: Mail },
  { type: 'marketing', text: 'Lead source: Organic', icon: Mail },
  { type: 'marketing', text: 'Campaign ROI: 340%', icon: Mail },
  { type: 'marketing', text: 'MQL created', icon: Mail },
  { type: 'marketing', text: 'SQL qualified', icon: Mail },
  { type: 'marketing', text: 'Nurture started', icon: Mail },
  
  // Automation/Workflow
  { type: 'auto', text: 'Workflow triggered', icon: Activity },
  { type: 'auto', text: 'Task auto-created', icon: Activity },
  { type: 'auto', text: 'Alert sent to team', icon: Activity },
  { type: 'auto', text: 'Lead auto-assigned', icon: Activity },
  { type: 'auto', text: 'SLA timer started', icon: Activity },
  { type: 'auto', text: 'Reminder scheduled', icon: Activity },
  { type: 'auto', text: 'Status auto-updated', icon: Activity },
  { type: 'auto', text: 'Notification sent', icon: Activity },
  { type: 'auto', text: 'Integration synced', icon: Activity },
  { type: 'auto', text: 'Webhook fired', icon: Activity },
  { type: 'auto', text: 'API call successful', icon: Activity },
  { type: 'auto', text: 'Zapier triggered', icon: Activity },
  { type: 'auto', text: 'Slack notification', icon: Activity },
  { type: 'auto', text: 'Calendar event added', icon: Activity },
  { type: 'auto', text: 'Follow-up queued', icon: Activity },
  { type: 'auto', text: 'Score recalculated', icon: Activity },
  { type: 'auto', text: 'Territory assigned', icon: Activity },
  { type: 'auto', text: 'Round-robin applied', icon: Activity },
  { type: 'auto', text: 'Escalation triggered', icon: Activity },
  { type: 'auto', text: 'Report generated', icon: Activity },
  
  // Team/User activities
  { type: 'team', text: 'Note added by Mike', icon: Users },
  { type: 'team', text: 'Task completed', icon: Users },
  { type: 'team', text: 'Meeting scheduled', icon: Users },
  { type: 'team', text: 'Comment added', icon: Users },
  { type: 'team', text: 'File attached', icon: Users },
  { type: 'team', text: 'Deal reassigned', icon: Users },
  { type: 'team', text: 'Collaboration invite', icon: Users },
  { type: 'team', text: 'Approval requested', icon: Users },
  { type: 'team', text: 'Feedback received', icon: Users },
  { type: 'team', text: '@mention received', icon: Users },
  { type: 'team', text: 'Goal updated', icon: Users },
  { type: 'team', text: 'Pipeline reviewed', icon: Users },
  { type: 'team', text: 'Forecast submitted', icon: Users },
  { type: 'team', text: 'Activity logged', icon: Users },
  { type: 'team', text: 'Performance alert', icon: Users },
  { type: 'team', text: 'Quota achieved: 112%', icon: Users },
  { type: 'team', text: 'Training completed', icon: Users },
  { type: 'team', text: 'Best practice shared', icon: Users },
  { type: 'team', text: 'Template created', icon: Users },
  { type: 'team', text: 'Dashboard viewed', icon: Users },
  
  // Analytics/Insights
  { type: 'insight', text: 'Trend detected', icon: Activity },
  { type: 'insight', text: 'Anomaly alert', icon: Activity },
  { type: 'insight', text: 'Prediction updated', icon: Activity },
  { type: 'insight', text: 'Churn risk: Low', icon: Activity },
  { type: 'insight', text: 'Growth opportunity', icon: Activity },
  { type: 'insight', text: 'Win rate: 34%', icon: Activity },
  { type: 'insight', text: 'Avg deal size: $18K', icon: Activity },
  { type: 'insight', text: 'Sales velocity up', icon: Activity },
  { type: 'insight', text: 'Pipeline health: Good', icon: Activity },
  { type: 'insight', text: 'Engagement score: 87', icon: Activity },
];

function LiveActivityFeed({ onNewActivity }: { onNewActivity?: () => void }) {
  const [activities, setActivities] = useState(() => {
    const initial = [];
    for (let i = 0; i < 3; i++) {
      const activity = activityPool[Math.floor(Math.random() * activityPool.length)];
      initial.push({ ...activity, id: i, time: i === 0 ? '2s ago' : i === 1 ? '15s ago' : '1m ago' });
    }
    return initial;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const newActivity = activityPool[Math.floor(Math.random() * activityPool.length)];
      setActivities(prev => [
        { ...newActivity, id: Date.now(), time: 'now' },
        ...prev.slice(0, 2).map(a => ({ ...a, time: a.time === 'now' ? '2s ago' : a.time === '2s ago' ? '15s ago' : '1m ago' }))
      ]);
      onNewActivity?.();
    }, 2000);
    
    return () => clearInterval(interval);
  }, [onNewActivity]);

  return (
    <div className="space-y-2">
      {activities.map((activity, i) => (
        <div 
          key={activity.id}
          className={`flex items-center gap-3 p-2 rounded-lg bg-white/5 dark:bg-white/5 transition-all duration-500 ${
            i === 0 ? 'animate-fade-up' : ''
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6B8CFF]/20 to-[#7E4EF2]/20 flex items-center justify-center">
            <activity.icon className="w-4 h-4 text-[#6B8CFF]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-foreground truncate">{activity.text}</p>
            <p className="text-xs text-muted-foreground">{activity.time}</p>
          </div>
          {activity.time === 'now' && (
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
          )}
        </div>
      ))}
    </div>
  );
}

function FloatingPanel({ 
  children, 
  className = "",
  delay = 0,
  floatDuration = 8,
  floatDelay = 0,
  highlight = false,
}: { 
  children: React.ReactNode; 
  className?: string;
  delay?: number;
  floatDuration?: number;
  floatDelay?: number;
  highlight?: boolean;
}) {
  return (
    <div 
      className={`relative animate-fade-up group ${className}`}
      style={{ 
        animationDelay: `${delay}s`,
        animation: `fade-up 0.6s ease-out ${delay}s both, float-gentle ${floatDuration}s ease-in-out ${floatDelay}s infinite`,
      }}
    >
      {/* Glass panel */}
      <div className={`relative rounded-2xl bg-white/70 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-2xl shadow-black/5 dark:shadow-black/20 overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#6B8CFF]/5 group-hover:border-[#6B8CFF]/20 group-hover:-translate-y-1 ${
        highlight ? 'ring-2 ring-[#7CFD98]/30 animate-highlight-pulse' : ''
      }`}>
        {/* Top highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        {children}
      </div>
    </div>
  );
}

function DashboardPreviewPanel() {
  const leads = useLiveCounter(12847, 1, 5000);
  const chartData = [35, 45, 38, 52, 48, 60, 55, 72, 68, 85, 78, 92];
  
  return (
    <FloatingPanel delay={0.3} floatDuration={10} floatDelay={0} className="w-full max-w-md">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6B8CFF] to-[#7E4EF2] flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-foreground">Overview</span>
          </div>
          <Badge className="bg-[#7CFD98]/20 text-[#7CFD98] border-0">Live</Badge>
        </div>
        
        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Leads</p>
            <p className="text-xl font-bold text-foreground">{leads.toLocaleString()}</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+12%</span>
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Pipeline</p>
            <p className="text-xl font-bold text-foreground">$2.4M</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+8%</span>
            </div>
          </div>
          <div className="bg-muted/50 rounded-xl p-3">
            <p className="text-xs text-muted-foreground mb-1">Won</p>
            <p className="text-xl font-bold text-foreground">$847K</p>
            <div className="flex items-center gap-1 text-xs text-[#7CFD98]">
              <ArrowUpRight className="w-3 h-3" />
              <span>+24%</span>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="bg-muted/30 rounded-xl p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground">Conversion trend</span>
            <span className="text-xs font-medium text-[#7CFD98]">+18.4%</span>
          </div>
          <MiniChart data={chartData} color="#6B8CFF" />
        </div>
      </div>
    </FloatingPanel>
  );
}

function ActivityPanel() {
  const [highlight, setHighlight] = useState(false);
  
  const handleNewActivity = () => {
    setHighlight(true);
    setTimeout(() => setHighlight(false), 600);
  };

  return (
    <FloatingPanel delay={0.5} floatDuration={9} floatDelay={2} highlight={highlight} className="w-72">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-[#7E4EF2]" />
          <span className="text-sm font-medium text-foreground">Live Activity</span>
          <span className="ml-auto flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
            <span className="text-xs text-muted-foreground">3 active</span>
          </span>
        </div>
        <LiveActivityFeed onNewActivity={handleNewActivity} />
      </div>
    </FloatingPanel>
  );
}

const alertPool = [
  { title: 'High-value lead', subtitle: 'Score: 92 - Needs follow-up', color: '#FF805D', priority: 'high' },
  { title: 'Deal closing soon', subtitle: '$45,000 - Final review', color: '#FF805D', priority: 'high' },
  { title: 'Hot lead detected', subtitle: 'Enterprise - 3 page views', color: '#FF805D', priority: 'high' },
  { title: 'Renewal due', subtitle: 'Acme Corp - 7 days left', color: '#FF805D', priority: 'high' },
  { title: 'Meeting in 15min', subtitle: 'Demo call with Sarah', color: '#6B8CFF', priority: 'medium' },
  { title: 'Email replied', subtitle: 'John D. - Interested', color: '#7CFD98', priority: 'low' },
  { title: 'Task overdue', subtitle: 'Follow-up with TechCo', color: '#FF805D', priority: 'high' },
  { title: 'Quote expiring', subtitle: '$28K proposal - 2 days', color: '#FF805D', priority: 'high' },
  { title: 'New referral', subtitle: 'From partner: DataFlow', color: '#7CFD98', priority: 'low' },
  { title: 'Contract signed', subtitle: 'CloudBase Inc - $12K', color: '#7CFD98', priority: 'low' },
  { title: 'Lead score changed', subtitle: 'TechStart: 45 → 87', color: '#6B8CFF', priority: 'medium' },
  { title: 'Callback requested', subtitle: 'Mike from Acme - ASAP', color: '#FF805D', priority: 'high' },
  { title: 'Campaign performing', subtitle: 'ROI: 340% - 52 leads', color: '#7CFD98', priority: 'low' },
  { title: 'SLA warning', subtitle: 'Response due in 2h', color: '#FF805D', priority: 'high' },
  { title: 'Deal stage changed', subtitle: 'Negotiation → Closing', color: '#6B8CFF', priority: 'medium' },
  { title: 'Competitor mentioned', subtitle: 'Call with DataPro', color: '#FF805D', priority: 'high' },
  { title: 'Budget approved', subtitle: 'Enterprise deal - $85K', color: '#7CFD98', priority: 'low' },
  { title: 'Meeting scheduled', subtitle: 'Tomorrow 10am - Demo', color: '#6B8CFF', priority: 'medium' },
  { title: 'Churn risk detected', subtitle: 'GlobalTech - Low usage', color: '#FF805D', priority: 'high' },
  { title: 'Upsell opportunity', subtitle: 'Add 50 seats - $24K', color: '#7CFD98', priority: 'low' },
];

function NotificationPanel() {
  const [alert, setAlert] = useState(alertPool[0]);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const newAlert = alertPool[Math.floor(Math.random() * alertPool.length)];
      setAlert(newAlert);
      setIsNew(true);
      setTimeout(() => setIsNew(false), 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <FloatingPanel delay={0.7} floatDuration={11} floatDelay={4} className="w-64">
      <div className={`p-3 transition-all duration-300 ${isNew ? 'bg-white/10' : ''}`}>
        <div className="flex items-center gap-2">
          <div 
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isNew ? 'scale-110' : ''}`}
            style={{ backgroundColor: `${alert.color}20` }}
          >
            <Bell className="w-4 h-4" style={{ color: alert.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className={`text-sm font-medium text-foreground truncate transition-all duration-300 ${isNew ? 'translate-x-1' : ''}`}>
              {alert.title}
            </p>
            <p className="text-xs text-muted-foreground truncate">{alert.subtitle}</p>
          </div>
          {isNew && (
            <span className="w-2 h-2 rounded-full bg-[#7CFD98] animate-pulse" />
          )}
        </div>
      </div>
    </FloatingPanel>
  );
}

function LiveQuickStatPanel({ label, baseValue, icon: Icon, color, delay, floatDelay, interval = 4000 }: { 
  label: string; 
  baseValue: number; 
  icon: React.ElementType;
  color: string;
  delay: number;
  floatDelay: number;
  interval?: number;
}) {
  const [value, setValue] = useState(baseValue);
  const [flash, setFlash] = useState(false);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setValue(v => v + Math.floor(Math.random() * 3) + 1);
      setFlash(true);
      setTimeout(() => setFlash(false), 300);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  const formatValue = (v: number) => {
    if (v >= 1000) return `${(v / 1000).toFixed(1)}K`;
    return v.toString();
  };

  return (
    <FloatingPanel delay={delay} floatDuration={12} floatDelay={floatDelay} className="w-36">
      <div className="p-3 flex items-center gap-3">
        <div 
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${flash ? 'scale-110' : ''}`}
          style={{ backgroundColor: `${color}20` }}
        >
          <Icon className="w-5 h-5" style={{ color }} />
        </div>
        <div>
          <p className={`text-lg font-bold text-foreground transition-all duration-300 ${flash ? 'text-[#7CFD98]' : ''}`}>
            {formatValue(value)}
          </p>
          <p className="text-xs text-muted-foreground">{label}</p>
        </div>
      </div>
    </FloatingPanel>
  );
}

function AnimatedRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6B8CFF]/10 animate-ring-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7E4EF2]/10 animate-ring-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute w-[1000px] h-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7CFD98]/5 animate-ring-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Orbiting dots */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDuration: '20s' }}>
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#6B8CFF] rounded-full shadow-lg shadow-[#6B8CFF]/50" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 animate-orbit-reverse" style={{ animationDuration: '30s' }}>
        <div className="absolute top-0 left-1/2 w-3 h-3 bg-[#7E4EF2] rounded-full shadow-lg shadow-[#7E4EF2]/50" />
      </div>
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 animate-orbit" style={{ animationDuration: '15s' }}>
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-[#7CFD98] rounded-full shadow-lg shadow-[#7CFD98]/50" />
      </div>
    </div>
  );
}

function DataConnections() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.15 }}>
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6B8CFF" stopOpacity="0" />
          <stop offset="50%" stopColor="#6B8CFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#7E4EF2" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7CFD98" stopOpacity="0" />
          <stop offset="50%" stopColor="#7CFD98" stopOpacity="1" />
          <stop offset="100%" stopColor="#6B8CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Animated connection lines */}
      <line x1="10%" y1="20%" x2="40%" y2="35%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-line-flow" />
      <line x1="60%" y1="15%" x2="85%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-line-flow" style={{ animationDelay: '1s' }} />
      <line x1="20%" y1="70%" x2="50%" y2="55%" stroke="url(#line-gradient-2)" strokeWidth="1" className="animate-line-flow" style={{ animationDelay: '2s' }} />
      <line x1="70%" y1="80%" x2="90%" y2="60%" stroke="url(#line-gradient-2)" strokeWidth="1" className="animate-line-flow" style={{ animationDelay: '0.5s' }} />
      <line x1="5%" y1="50%" x2="30%" y2="45%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-line-flow" style={{ animationDelay: '1.5s' }} />
      
      {/* Connection nodes */}
      <circle cx="40%" cy="35%" r="3" fill="#6B8CFF" className="animate-pulse-node" />
      <circle cx="85%" cy="40%" r="4" fill="#7E4EF2" className="animate-pulse-node" style={{ animationDelay: '0.5s' }} />
      <circle cx="50%" cy="55%" r="3" fill="#7CFD98" className="animate-pulse-node" style={{ animationDelay: '1s' }} />
      <circle cx="30%" cy="45%" r="2" fill="#6B8CFF" className="animate-pulse-node" style={{ animationDelay: '1.5s' }} />
      <circle cx="70%" cy="25%" r="3" fill="#7E4EF2" className="animate-pulse-node" style={{ animationDelay: '2s' }} />
    </svg>
  );
}

function FloatingParticles() {
  const particles = [
    { x: '15%', y: '25%', size: 4, color: '#6B8CFF', delay: 0 },
    { x: '80%', y: '20%', size: 3, color: '#7E4EF2', delay: 1 },
    { x: '25%', y: '75%', size: 5, color: '#7CFD98', delay: 2 },
    { x: '85%', y: '70%', size: 3, color: '#6B8CFF', delay: 0.5 },
    { x: '50%', y: '85%', size: 4, color: '#7E4EF2', delay: 1.5 },
    { x: '10%', y: '50%', size: 3, color: '#7CFD98', delay: 2.5 },
    { x: '92%', y: '45%', size: 4, color: '#6B8CFF', delay: 3 },
    { x: '35%', y: '15%', size: 3, color: '#7E4EF2', delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-particle"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-background dark:via-background dark:to-background"
    >
      {/* Animated background elements */}
      <AnimatedRings />
      <DataConnections />
      <FloatingParticles />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6B8CFF]/20 rounded-full blur-3xl animate-aurora-1" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#7E4EF2]/15 rounded-full blur-3xl animate-aurora-2" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#7CFD98]/10 rounded-full blur-3xl animate-aurora-3" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left column - Text content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 shadow-lg shadow-black/5 border border-black/5 dark:border-white/10 text-sm font-medium mb-6 animate-fade-up"
            >
              <Sparkles className="h-4 w-4 text-[#6B8CFF]" />
              <span className="text-foreground">Your command center awaits</span>
            </div>
            
            {/* Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.1] mb-6 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
              data-testid="text-hero-headline"
            >
              <span className="text-foreground">See everything.</span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8CFF] via-[#7E4EF2] to-[#7CFD98] bg-clip-text text-transparent">
                Miss nothing.
              </span>
            </h1>
            
            <p 
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up"
              style={{ animationDelay: '0.2s' }}
              data-testid="text-hero-subheadline"
            >
              A unified command center for your entire sales operation. 
              Real-time insights, live activity feeds, and intelligent alerts 
              — all in one beautiful interface.
            </p>
            
            {/* CTA buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button 
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-gradient-to-r from-[#6B8CFF] to-[#7E4EF2] hover:opacity-90 border-0 shadow-lg shadow-[#6B8CFF]/25"
                data-testid="button-hero-start"
              >
                Launch Dashboard
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-lg gap-2 bg-white dark:bg-white/5 border-black/10 dark:border-white/10 shadow-lg shadow-black/5"
                data-testid="button-hero-demo"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Stats row */}
            <div 
              className="flex flex-wrap gap-8 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div>
                <p className="text-3xl font-bold text-foreground">50M+</p>
                <p className="text-sm text-muted-foreground">Contacts</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">95%</p>
                <p className="text-sm text-muted-foreground">Accuracy</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-foreground">2.4s</p>
                <p className="text-sm text-muted-foreground">Avg Response</p>
              </div>
            </div>
          </div>
          
          {/* Right column - Floating panels */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[600px]">
            {/* Main dashboard panel */}
            <div className="absolute top-0 left-4 lg:left-0 z-30">
              <DashboardPreviewPanel />
            </div>
            
            {/* Activity panel */}
            <div className="absolute top-24 -right-20 z-20">
              <ActivityPanel />
            </div>
            
            {/* Notification panel */}
            <div className="absolute bottom-20 left-0 z-10">
              <NotificationPanel />
            </div>
            
            {/* Quick stat panels */}
            <div className="absolute bottom-0 right-4 z-10 hidden lg:block">
              <LiveQuickStatPanel 
                label="Calls" 
                baseValue={247} 
                icon={Phone} 
                color="#7E4EF2" 
                delay={0.9}
                floatDelay={3}
                interval={3000}
              />
            </div>
            <div className="absolute top-0 right-0 z-10 hidden lg:block">
              <LiveQuickStatPanel 
                label="Emails" 
                baseValue={1247} 
                icon={Mail} 
                color="#6B8CFF" 
                delay={1.1}
                floatDelay={5}
                interval={2500}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
