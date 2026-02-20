import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { SmsConsentDisclosure, SmsOptInCheckbox } from "./SmsConsentDisclosure";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle2, MessageSquareText, Mail, Phone, Shield } from "lucide-react";

export function ServicesSection() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [consentSms, setConsentSms] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async () => {
      const phoneDigits = phone.replace(/\D/g, "");
      const phoneE164 = phoneDigits.length === 10 ? `+1${phoneDigits}` : undefined;
      const res = await apiRequest("POST", "/api/lead", {
        name,
        email,
        phone: phoneE164,
        company: company || undefined,
        message: message || undefined,
        consentSms,
        consentEmail: true,
        pageUrl: window.location.href,
      });
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length > 0 && !consentSms) {
      setConsentError("SMS consent is required when providing a phone number.");
      return;
    }
    setConsentError("");
    mutation.mutate();
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setConsentSms(false);
    setConsentError("");
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden bg-[#030014]">
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px]"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(107, 76, 255, 0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4 bg-[#7cffd4]/10 text-[#7cffd4] border border-[#7cffd4]/20">
            <MessageSquareText className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Ready to transform your
            <span className="block bg-gradient-to-r from-[#6b4cff] to-[#7cffd4] bg-clip-text text-transparent"> customer engagement?</span>
          </h2>
          <p className="text-lg text-[#a59ecb] max-w-2xl mx-auto mb-4">
            Fill out the form below and our team will reach out to schedule a personalized demo for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 flex flex-col gap-5">
              <h3 className="text-lg font-semibold text-white">Why CEMSCALE?</h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#6b4cff]/20 flex items-center justify-center shrink-0">
                  <MessageSquareText className="h-5 w-5 text-[#a78bfa]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Omnichannel Inbox</p>
                  <p className="text-[#8b87a5] text-sm">WhatsApp, SMS, Email, Instagram, Facebook & iMessage in one unified view.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#7cffd4]/20 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-[#7cffd4]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Native Telephony</p>
                  <p className="text-[#8b87a5] text-sm">Cloud PBX, call recording, IVR, and real-time analytics built in.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#ff805d]/20 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-[#ff805d]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Marketing Automation</p>
                  <p className="text-[#8b87a5] text-sm">AI-powered campaigns across every channel with smart segmentation.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#a78bfa]/20 flex items-center justify-center shrink-0">
                  <Shield className="h-5 w-5 text-[#a78bfa]" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Enterprise-Grade Security</p>
                  <p className="text-[#8b87a5] text-sm">Built for professional services: Insurance, Healthcare, Legal, Tax & more.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6">
              <p className="text-[#a59ecb] text-sm leading-relaxed mb-3">
                "CEMSCALE unified all our communication channels and our team productivity increased dramatically. The security and data management tools gave us peace of mind."
              </p>
              <p className="text-white text-sm font-medium">Insurance Agency Director</p>
              <p className="text-[#8b87a5] text-xs">Professional Services Client</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] p-6 sm:p-8" data-testid="section-contact-form">
              {submitted ? (
                <div className="py-12 text-center" data-testid="div-form-success-inline">
                  <div className="w-16 h-16 rounded-full bg-[#7cffd4]/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-[#7cffd4]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-[#a59ecb] mb-6">
                    We've received your information and will be in touch shortly.
                  </p>
                  <Button onClick={handleReset} className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white" data-testid="button-submit-another">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-semibold text-white mb-1">Schedule a Demo</h3>
                  <p className="text-sm text-[#8b87a5] mb-4">All fields marked with * are required.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                        placeholder="Your full name"
                        data-testid="input-inline-name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                        placeholder="you@company.com"
                        data-testid="input-inline-email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Phone Number</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-lg bg-[#1a1a2e] border border-r-0 border-[#2a2a45] text-[#a59ecb] text-sm select-none">+1</span>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => {
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                            let formatted = "";
                            if (digits.length > 0) formatted = "(" + digits.slice(0, 3);
                            if (digits.length >= 3) formatted += ") ";
                            if (digits.length > 3) formatted += digits.slice(3, 6);
                            if (digits.length >= 6) formatted += "-" + digits.slice(6, 10);
                            setPhone(formatted);
                          }}
                          className="w-full px-4 py-2.5 rounded-r-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                          placeholder="(555) 000-0000"
                          data-testid="input-inline-phone"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Company</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                        placeholder="Company name"
                        data-testid="input-inline-company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Message</label>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors resize-none"
                      placeholder="Tell us about your business and how we can help..."
                      data-testid="input-inline-message"
                    />
                  </div>

                  <SmsOptInCheckbox
                    checked={consentSms}
                    onChange={(checked) => {
                      setConsentSms(checked);
                      if (checked) setConsentError("");
                    }}
                    error={consentError}
                  />

                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white h-11 text-base"
                    data-testid="button-inline-submit"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Request a Demo"
                    )}
                  </Button>

                  <SmsConsentDisclosure />
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
