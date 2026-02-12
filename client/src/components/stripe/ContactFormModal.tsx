import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { SmsConsentDisclosure, SmsOptInCheckbox } from "./SmsConsentDisclosure";
import { X, Loader2, CheckCircle2 } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  source?: string;
}

export function ContactFormModal({ isOpen, onClose, title = "Schedule a Demo", source = "demo" }: ContactFormModalProps) {
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
      const res = await apiRequest("POST", "/api/lead", {
        name,
        email,
        phone: phone || undefined,
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
    
    if (phone && !consentSms) {
      setConsentError("SMS consent is required when providing a phone number.");
      return;
    }
    setConsentError("");
    mutation.mutate();
  };

  const handleClose = () => {
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setConsentSms(false);
    setConsentError("");
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" data-testid="modal-contact-form">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="relative w-full max-w-lg rounded-2xl bg-[#0a0a1a] border border-[#1f1f35] shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-[#1f1f35]">
          <h2 className="text-xl font-semibold text-white" data-testid="text-form-title">{title}</h2>
          <Button 
            size="icon" 
            variant="ghost" 
            onClick={handleClose}
            className="text-[#a59ecb] hover:text-white"
            data-testid="button-close-form"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {submitted ? (
          <div className="p-8 text-center" data-testid="div-form-success">
            <div className="w-16 h-16 rounded-full bg-[#7cffd4]/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-[#7cffd4]" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
            <p className="text-[#a59ecb] mb-6">
              We've received your information and will be in touch shortly.
            </p>
            <Button onClick={handleClose} className="bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white" data-testid="button-close-success">
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Full Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                placeholder="Your full name"
                data-testid="input-name"
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
                data-testid="input-email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                placeholder="+1 (555) 000-0000"
                data-testid="input-phone"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors"
                placeholder="Company name"
                data-testid="input-company"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#a59ecb] mb-1.5">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-lg bg-[#1a1a2e] border border-[#2a2a45] text-white placeholder-[#8b87a5] focus:outline-none focus:border-[#6b4cff] transition-colors resize-none"
                placeholder="How can we help?"
                data-testid="input-message"
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
              className="w-full bg-[#6b4cff] hover:bg-[#6b4cff]/90 text-white h-11"
              data-testid="button-submit-form"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            <SmsConsentDisclosure />
          </form>
        )}
      </div>
    </div>
  );
}
