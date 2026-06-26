import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ContactFormData } from "../types";

export default function ContactView() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate API dispatch latency
    setTimeout(() => {
      setIsSending(false);
      setSentSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1200);
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - Cosmetic Product",
    "description": "Get in touch with Cosmetic Product. Our aesthetic advisors are ready to assist you with an inquiry.",
    "url": "https://cosmeticproductmuskan.netlify.app/contact"
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 space-y-16 animate-fade-in">
      <Helmet>
        <title>Contact Us - Cosmetic Product</title>
        <meta name="description" content="Get in touch with Cosmetic Product. Our aesthetic advisors are ready to assist you with an inquiry." />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>
      
      {/* HEADER INTRODUCTION */}
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex h-9 items-center justify-center rounded-full bg-amber-50 border border-amber-200/50 px-3.5 text-[10.5px] font-bold text-amber-900 uppercase tracking-widest">
          <Sparkles className="mr-1.5 h-3.5 w-3.5 text-amber-700" />
          <span>Helpful Beauty Concierge</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-stone-900">
          Get in Touch
        </h1>
        <div className="h-[2px] w-12 bg-amber-800 mx-auto" />
        <p className="font-sans text-xs md:text-sm text-stone-600">
          Have an inquiry about our botanical list, custom skincare pairings, order tracking status, or shade details? Our aesthetic advisors are standing by to guide you.
        </p>
      </section>

      {/* DETAILED INFO CARDS & CONTACT FORM */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Details & Business Hours: LEFT SIDE */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main info card */}
          <div className="bg-stone-50 border border-stone-200 p-6 md:p-8 rounded-2xl space-y-6 text-left">
            <h3 className="font-serif text-lg font-bold text-stone-950 pb-2 border-b border-stone-200">
              Contact Information
            </h3>

            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs md:text-sm text-stone-750">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-stone-200 text-stone-700">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Official HQ Address</span>
                  <span>245 Beauty Avenue, New York, NY 10001, USA</span>
                </div>
              </li>

              <li className="flex items-start gap-3 text-xs md:text-sm text-stone-750">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-stone-200 text-stone-700">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Phone Support Line</span>
                  <a href="tel:+15552345678" className="hover:text-amber-850 underline font-mono">
                    +1 (555) 234-5678
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-xs md:text-sm text-stone-750">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-stone-200 text-stone-700">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">General Email</span>
                  <a href="mailto:info@cosmeticproduct.com" className="hover:text-amber-850 underline">
                    info@cosmeticproduct.com
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3 text-xs md:text-sm text-stone-750">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white border border-stone-200 text-stone-700">
                  <Globe className="h-4 w-4" />
                </div>
                <div>
                  <span className="block font-semibold text-stone-900">Official Domain</span>
                  <a href="https://www.cosmeticproduct.com" target="_blank" rel="noreferrer" className="hover:text-amber-850 underline font-mono">
                    www.cosmeticproduct.com
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours Card */}
          <div className="bg-[#FAF8F5] border border-amber-200/50 p-6 md:p-8 rounded-2xl text-left space-y-4">
            <h3 className="font-serif text-lg font-bold text-stone-900 pb-2 border-b border-amber-250 flex items-center gap-2">
              <Clock className="h-5 w-5 text-amber-800" />
              <span>Business Hours</span>
            </h3>

            <div className="space-y-2 text-xs md:text-sm text-stone-700">
              <div className="flex justify-between font-medium">
                <span>Monday – Friday</span>
                <span className="font-mono text-stone-900">9:00 AM – 7:00 PM</span>
              </div>
              <div className="flex justify-between font-medium">
                <span>Saturday</span>
                <span className="font-mono text-stone-900">10:00 AM – 5:00 PM</span>
              </div>
              <div className="flex justify-between text-stone-500 italic pb-1">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
              <p className="text-[10px] text-[#9C826A] font-semibold tracking-wider uppercase mt-3 pt-3 border-t border-amber-100">
                *EST Standard Operations
              </p>
            </div>
          </div>

          {/* Aesthetic Lobby Visual Image Card */}
          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-xs hover:shadow-md transition-all duration-300">
            <div className="aspect-16/9 overflow-hidden rounded-xl bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
                alt="Cosmetic Product Luxury Reception and Consulting Lobby"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover hover:scale-102 transition-transform duration-500"
              />
            </div>
            <div className="p-2.5 text-left">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#9C826A] font-bold block mb-0.5">Flagship Studio Lounge</span>
              <p className="font-sans text-[11px] text-stone-550">Drop by for a 1-on-1 personalized dermatological formulation profiling session.</p>
            </div>
          </div>

        </div>

        {/* Contact Form Details: RIGHT SIDE */}
        <div className="lg:col-span-7 bg-white border border-stone-200 p-6 md:p-8 rounded-3xl relative">
          
          <h3 className="font-serif text-xl font-bold text-stone-950 mb-2 text-left">
            Send Us a Message
          </h3>
          <p className="text-xs text-stone-550 text-left mb-6">
            Fill in our rapid beauty inquiry form. We usually respond within 1 business day.
          </p>

          {sentSuccess ? (
            <div className="py-12 px-6 flex flex-col items-center justify-center text-center animate-scale-up">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-stone-900 mb-1">
                Message Dispatched!
              </h4>
              <p className="font-sans text-xs md:text-sm text-stone-605 max-w-sm leading-relaxed mb-6">
                Thank you for reaching out! We have safely recorded your parameters and queued your inquiry. Our cosmetic support specialists will respond to your email within 24 hours.
              </p>
              <button
                id="reset-contact-form"
                onClick={() => setSentSuccess(false)}
                className="rounded-full bg-stone-900 text-[#FAF8F5] text-xs font-semibold px-4 py-2 uppercase hover:bg-stone-850 cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              
              {/* Name Input */}
              <div className="space-y-1">
                <label htmlFor="form-name" className="text-[10.5px] font-bold text-stone-700 uppercase tracking-widest block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs md:text-sm border border-stone-200 rounded-lg p-3 bg-stone-50/50 focus:bg-white focus:border-[#8B5E3C] focus:outline-hidden transition-all"
                />
              </div>

              {/* Grid 2 Column */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email Input */}
                <div className="space-y-1">
                  <label htmlFor="form-email" className="text-[10.5px] font-bold text-stone-700 uppercase tracking-widest block">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs md:text-sm border border-stone-200 rounded-lg p-3 bg-stone-50/50 focus:bg-white focus:border-[#8B5E3C] focus:outline-hidden transition-all"
                  />
                </div>

                {/* Phone Input */}
                <div className="space-y-1">
                  <label htmlFor="form-phone" className="text-[10.5px] font-bold text-stone-700 uppercase tracking-widest block">
                    Phone Number
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs md:text-sm border border-stone-200 rounded-lg p-3 bg-stone-50/50 focus:bg-white focus:border-[#8B5E3C] focus:outline-hidden transition-all"
                  />
                </div>
              </div>

              {/* Message Details */}
              <div className="space-y-1">
                <label htmlFor="form-message" className="text-[10.5px] font-bold text-stone-700 uppercase tracking-widest block">
                  Detailed Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="form-message"
                  required
                  rows={4}
                  placeholder="How can we assist you with cosmetic details today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full text-xs md:text-sm border border-stone-200 rounded-lg p-3 bg-stone-50/50 focus:bg-white focus:border-[#8B5E3C] focus:outline-hidden transition-all"
                />
              </div>

              {/* Action Button */}
              <button
                id="send-message-btn"
                type="submit"
                disabled={isSending}
                className="w-full sm:w-auto rounded-full bg-stone-900 hover:bg-stone-950 text-white font-semibold py-3 px-8 text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2 cursor-pointer shadow-xs"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{isSending ? "Sending Message..." : "Send Message"}</span>
              </button>

            </form>
          )}

        </div>

      </section>

    </div>
  );
}
