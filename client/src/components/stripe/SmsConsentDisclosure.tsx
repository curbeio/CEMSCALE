import { Link } from "wouter";

interface SmsConsentDisclosureProps {
  brand?: string;
  frequency?: string;
}

export const SMS_CONSENT_TEXT =
  "By submitting this form, you agree to receive communications from CEMSCALE via SMS and email. Message and data rates may apply. Message frequency varies (up to 5 messages per month). Reply STOP to opt out, HELP for help.";

export function SmsConsentDisclosure({ 
  brand = "CEMSCALE", 
  frequency = "up to 5 messages per month" 
}: SmsConsentDisclosureProps) {
  return (
    <div className="text-xs text-[#8b87a5] leading-relaxed" data-testid="text-sms-disclosure">
      By submitting this form, you agree to receive communications from {brand} via SMS and email. 
      Message and data rates may apply. Message frequency varies ({frequency}). 
      Reply STOP to opt out, HELP for help. View our{" "}
      <Link href="/privacy-policy" className="text-[#a78bfa] hover:text-white underline transition-colors" data-testid="link-disclosure-privacy">
        Privacy Policy
      </Link>{" "}
      and{" "}
      <Link href="/terms" className="text-[#a78bfa] hover:text-white underline transition-colors" data-testid="link-disclosure-terms">
        Terms & Conditions
      </Link>.
    </div>
  );
}

interface SmsOptInCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  brand?: string;
}

export function SmsOptInCheckbox({ 
  checked, 
  onChange, 
  error,
  brand = "CEMSCALE" 
}: SmsOptInCheckboxProps) {
  return (
    <div className="space-y-1">
      <label className="flex items-start gap-3 cursor-pointer group" data-testid="label-sms-optin">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-[#3d3a50] bg-[#1a1a2e] text-[#6b4cff] focus:ring-[#6b4cff] focus:ring-offset-0 cursor-pointer shrink-0"
          data-testid="checkbox-sms-optin"
        />
        <span className="text-sm text-[#a59ecb] group-hover:text-white transition-colors leading-relaxed">
          I agree to receive communications from {brand} via SMS and email.
        </span>
      </label>
      {error && (
        <p className="text-xs text-red-400 ml-7" data-testid="text-optin-error">{error}</p>
      )}
    </div>
  );
}
