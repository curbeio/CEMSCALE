import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import PrivacyPolicy from "@/pages/privacy-policy";
import Terms from "@/pages/terms";
import SmsPolicy from "@/pages/sms-policy";
import AcceptableUse from "@/pages/acceptable-use";
import RefundPolicy from "@/pages/refund-policy";
import Blog from "@/pages/blog";
import Resources from "@/pages/resources";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/sms-policy" component={SmsPolicy} />
      <Route path="/acceptable-use" component={AcceptableUse} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/blog" component={Blog} />
      <Route path="/resources" component={Resources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
