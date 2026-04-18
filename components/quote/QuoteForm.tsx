"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const machines = [
  "Fiber Laser Cutting Machine",
  "Laser Welding Machine",
  "Laser Cleaning Machine",
  "CNC Press Brake",
  "Shearing Machine",
  "Ironworker",
  "Collaborative Welding Arm",
  "Industrial Welding Arm",
  "Not sure — I need guidance",
];

const usStates = [
  "Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut",
  "Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa",
  "Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan",
  "Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire",
  "New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio",
  "Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota",
  "Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia",
  "Wisconsin","Wyoming",
];

const contactTimes = [
  "Morning (8 AM – 12 PM)",
  "Afternoon (12 PM – 5 PM)",
  "Evening (5 PM – 8 PM)",
  "Anytime",
];

interface FormData {
  machines: string[];
  companyName: string;
  state: string;
  employees: string;
  currentEquipment: string;
  name: string;
  email: string;
  phone: string;
  targetDate: string;
  preferredTime: string;
  message: string;
}

const initialData: FormData = {
  machines: [],
  companyName: "",
  state: "",
  employees: "",
  currentEquipment: "",
  name: "",
  email: "",
  phone: "",
  targetDate: "",
  preferredTime: "",
  message: "",
};

function trackEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window !== "undefined" && (window as unknown as { gtag?: Function }).gtag) {
    (window as unknown as { gtag: Function }).gtag("event", eventName, params);
  }
}

export function QuoteForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const toggleMachine = (machine: string) => {
    setData((prev) => ({
      ...prev,
      machines: prev.machines.includes(machine)
        ? prev.machines.filter((m) => m !== machine)
        : [...prev.machines, machine],
    }));
  };

  const updateField = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < totalSteps) setStep((s) => s + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep((s) => s - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.companyName,
          email: data.email,
          phone: data.phone,
          metalworkingType: "fabrication/manufacturing",
          materials: "",
          thickness: "",
          dimensions: "",
          volume: "",
          currentEquipment: data.currentEquipment,
          timeline: data.targetDate,
          machinesOfInterest: data.machines.join(", "),
          language: "en",
          transcript: `Quote form submission — State: ${data.state}, Employees: ${data.employees}, Preferred time: ${data.preferredTime}, Message: ${data.message}`,
          source: "quote-form",
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // Fire GA4 generate_lead conversion event
      trackEvent("generate_lead", {
        method: "quote_form",
        machines: data.machines.join(", "),
      });

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 border-2 border-vtm-red flex items-center justify-center mx-auto mb-6">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M6 14l6 6 10-12" stroke="#CB1C1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="font-headline text-2xl font-bold text-white mb-3">
          Your request has been submitted.
        </h2>
        <p className="text-white/60 font-body mb-2 max-w-sm mx-auto">
          A VTM Tech Solutions specialist will review your shop&apos;s needs and reach out within 1 business day.
        </p>
        <p className="text-white/40 text-sm mb-8">Check your inbox — a confirmation email is on its way.</p>
        <Button href="/" variant="outline" size="md" className="border-white/30 text-white hover:bg-white/10">
          Return to Homepage
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-xs text-white/40 font-semibold tracking-wide uppercase mb-3">
          <span>Step {step} of {totalSteps}</span>
          <span>
            {step === 1 ? "Machine Selection" : step === 2 ? "Shop Info" : "Contact Details"}
          </span>
        </div>
        <div className="w-full h-0.5 bg-white/10">
          <div
            className="h-full bg-vtm-red transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={step}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Machine Selection */}
        {step === 1 && (
          <div>
            <h2 className="font-headline text-xl font-bold text-white mb-2">
              Which machines are you interested in?
            </h2>
            <p className="text-white/50 text-sm font-body mb-6">Select all that apply.</p>
            <div className="space-y-2">
              {machines.map((machine) => {
                const checked = data.machines.includes(machine);
                return (
                  <label
                    key={machine}
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      checked ? "border-vtm-red bg-vtm-red/5" : "border-white/10 hover:border-white/30"
                    }`}
                  >
                    <div
                      className={`w-5 h-5 border flex-shrink-0 flex items-center justify-center transition-colors ${
                        checked ? "border-vtm-red bg-vtm-red" : "border-white/30"
                      }`}
                      aria-hidden="true"
                    >
                      {checked && (
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden="true">
                          <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleMachine(machine)}
                      aria-label={machine}
                    />
                    <span className="text-white text-sm font-body">{machine}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}

        {/* Step 2: Shop Info */}
        {step === 2 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-headline text-xl font-bold text-white mb-2">Tell us about your shop.</h2>
              <p className="text-white/50 text-sm font-body mb-6">Helps us make the right recommendation.</p>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Company Name *</label>
              <input type="text" required value={data.companyName} onChange={(e) => updateField("companyName", e.target.value)} placeholder="Your company name" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" />
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">State *</label>
              <select required value={data.state} onChange={(e) => updateField("state", e.target.value)} className="w-full bg-vtm-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors">
                <option value="">Select your state...</option>
                {usStates.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Number of Employees</label>
              <select value={data.employees} onChange={(e) => updateField("employees", e.target.value)} className="w-full bg-vtm-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors">
                <option value="">Select range...</option>
                <option value="1-10">1–10 employees</option>
                <option value="11-25">11–25 employees</option>
                <option value="26-50">26–50 employees</option>
                <option value="51-100">51–100 employees</option>
                <option value="100+">100+ employees</option>
              </select>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Current Equipment</label>
              <textarea value={data.currentEquipment} onChange={(e) => updateField("currentEquipment", e.target.value)} rows={3} placeholder="Machines you currently operate (brand, type, age)..." className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none" />
            </div>
          </div>
        )}

        {/* Step 3: Contact */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <h2 className="font-headline text-xl font-bold text-white mb-2">How do we reach you?</h2>
              <p className="text-white/50 text-sm font-body mb-6">We&apos;ll respond within 1 business day.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Full Name *</label>
                <input type="text" required value={data.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Email *</label>
                <input type="email" required value={data.email} onChange={(e) => updateField("email", e.target.value)} placeholder="your@email.com" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Phone</label>
                <input type="tel" value={data.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="+1 (555) 000-0000" className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" />
              </div>
              <div>
                <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Target Delivery Date</label>
                <input type="month" value={data.targetDate} onChange={(e) => updateField("targetDate", e.target.value)} className="w-full bg-vtm-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors" />
              </div>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Best Time to Contact</label>
              <select value={data.preferredTime} onChange={(e) => updateField("preferredTime", e.target.value)} className="w-full bg-vtm-dark border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors">
                <option value="">Select a time...</option>
                {contactTimes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-white/60 text-xs font-semibold tracking-wide uppercase mb-1.5">Additional Notes</label>
              <textarea value={data.message} onChange={(e) => updateField("message", e.target.value)} rows={4} placeholder="Any specific requirements, materials, dimensions, or questions..." className="w-full bg-white/5 border border-white/20 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-vtm-red transition-colors resize-none" />
            </div>
            {error && <p className="text-vtm-red text-sm">{error}</p>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
          {step > 1 ? (
            <button type="button" onClick={handleBack} className="text-white/60 hover:text-white text-sm font-semibold transition-colors inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M10 7H2M5 3L1 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          ) : <div />}
          {step < totalSteps ? (
            <Button type="button" variant="primary" size="md" onClick={handleNext}>Next Step</Button>
          ) : (
            <Button type="submit" variant="primary" size="md" disabled={loading}>
              {loading ? "Submitting..." : "Submit Request"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
