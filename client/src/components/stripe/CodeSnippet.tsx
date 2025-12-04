import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Copy } from "lucide-react";

const codeExamples = {
  javascript: `const cemscale = require('@cemscale/sdk');

const client = cemscale.init('cs_api_key_...');

const lead = await client.leads.create({
  name: 'John Smith',
  email: 'john@company.com',
  source: 'marketing_campaign',
});`,
  python: `from cemscale import CemScale

client = CemScale(api_key="cs_api_key_...")

lead = client.leads.create(
  name="John Smith",
  email="john@company.com",
  source="marketing_campaign",
)`,
  ruby: `require 'cemscale'
CemScale.api_key = 'cs_api_key_...'

lead = CemScale::Lead.create({
  name: 'John Smith',
  email: 'john@company.com',
  source: 'marketing_campaign',
})`,
  curl: `curl https://api.cemscale.com/v1/leads \\
  -H "Authorization: Bearer cs_api_key_..." \\
  -d name="John Smith" \\
  -d email="john@company.com" \\
  -d source="marketing_campaign"`,
};

type Language = keyof typeof codeExamples;

export function CodeSnippet() {
  const [language, setLanguage] = useState<Language>("javascript");
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(codeExamples[language]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 sm:py-24 lg:py-32 xl:py-40">
      <div className="max-w-7xl xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Developer Experience</Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold tracking-tight mb-4">
              Built for developers
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              CemScale's APIs and SDKs are designed with a focus on developer experience. 
              Start integrating in minutes with comprehensive documentation and intuitive libraries.
            </p>
            
            <ul className="space-y-3 mb-8">
              {[
                "Comprehensive API documentation",
                "SDKs for popular languages",
                "Webhook support for real-time sync",
                "Sandbox environment for testing",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <Button className="rounded-full gap-2" data-testid="button-view-docs">
              View documentation
            </Button>
          </div>

          <Card className="bg-slate-900 text-slate-100 overflow-hidden stripe-card-shadow">
            <div className="flex items-center gap-1 px-4 py-3 border-b border-slate-700">
              {(Object.keys(codeExamples) as Language[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                    language === lang
                      ? 'bg-slate-700 text-white'
                      : 'text-slate-400 hover:text-white'
                  }`}
                  data-testid={`button-lang-${lang}`}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
              
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto text-slate-400 hover:text-white"
                onClick={copyCode}
                data-testid="button-copy-code"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            
            <div className="p-4 overflow-x-auto">
              <pre className="text-sm font-mono leading-relaxed">
                <code>{codeExamples[language]}</code>
              </pre>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
