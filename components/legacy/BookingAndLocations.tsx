'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, ArrowRight, Send, Sparkles } from 'lucide-react'

export default function BookingAndLocations() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    careType: 'Concierge Membership',
    location: 'Suite 1206 (I-10)',
    notes: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section className="py-20 lg:py-28 bg-[#FAF7F2] scroll-mt-32" id="booking">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-kicker">
            <span>Seamless Consultation Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-[#231618] tracking-tight">
            Ready To <em className="text-[#C87D75] font-normal italic">Get Started?</em>
          </h2>

          <p className="text-[#5C4B4E] text-base sm:text-lg leading-relaxed">
            Your journey toward unhurried, whole-person healthcare begins with a single conversation. Reach out to our San Antonio team directly or request a consultation below.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact & San Antonio Clinics */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-[#4E1B24] mb-2">
                Visit Our San Antonio Clinics
              </h3>
              <p className="text-xs text-[#5C4B4E] leading-relaxed">
                Two convenient locations across San Antonio with private parking and peaceful consultation suites.
              </p>
            </div>

            {/* Clinic Location 1 */}
            <div className="card-human p-5 bg-white border border-[#EADBCE]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#231618]">Suite 1206</h4>
                  <p className="text-xs text-[#5C4B4E] mt-0.5">
                    22211 I-10 Suite 1206, San Antonio, TX 78257
                  </p>
                  <p className="text-[11px] text-[#8E7B7E] mt-1 flex items-center gap-1.5">
                    <Clock size={12} /> Mon–Fri 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Clinic Location 2 */}
            <div className="card-human p-5 bg-white border border-[#EADBCE]">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#231618]">Suite 202</h4>
                  <p className="text-xs text-[#5C4B4E] mt-0.5">
                    24165 W Interstate 10 Frontage Rd Suite 202, San Antonio, TX 78257
                  </p>
                  <p className="text-[11px] text-[#8E7B7E] mt-1 flex items-center gap-1.5">
                    <Clock size={12} /> Mon–Fri 8:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:7262423011"
                className="p-4 rounded-2xl bg-white border border-[#EADBCE] hover:border-[#C87D75] transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#4E1B24] text-white flex items-center justify-center shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#8E7B7E] uppercase font-bold">Direct Phone</div>
                  <div className="text-xs font-bold text-[#4E1B24] group-hover:text-[#C87D75]">(726) 242-3011</div>
                </div>
              </a>

              <a
                href="mailto:info@starmed.clinic"
                className="p-4 rounded-2xl bg-white border border-[#EADBCE] hover:border-[#C87D75] transition-colors group flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-[#4E1B24] text-white flex items-center justify-center shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <div className="text-[10px] text-[#8E7B7E] uppercase font-bold">Email Inquiries</div>
                  <div className="text-xs font-bold text-[#4E1B24] group-hover:text-[#C87D75]">info@starmed.clinic</div>
                </div>
              </a>
            </div>

            {/* Emergency Notice */}
            <div className="p-4 rounded-2xl bg-[#F3ECE4] border border-[#EADBCE] text-[11px] text-[#5C4B4E] flex items-center gap-2.5">
              <ShieldCheck size={18} className="text-[#C87D75] shrink-0" />
              <span>For acute life-threatening emergencies, please dial 911 immediately. StarMed provides scheduled urgent and comprehensive primary care.</span>
            </div>
          </div>

          {/* Right Column: Sleek Appointment Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-[#EADBCE] relative">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#F9EBE8] text-[#C87D75] flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#4E1B24]">
                    Consultation Request Received
                  </h3>
                  <p className="text-sm text-[#5C4B4E] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#231618]">{formData.name}</span>. Our clinical coordinator will review your request and call you at <span className="font-semibold text-[#231618]">{formData.phone}</span> within one business day.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary text-xs"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#EADBCE] pb-4">
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#4E1B24]">
                      Schedule a Consultation
                    </h3>
                    <p className="text-xs text-[#8E7B7E] mt-1">
                      Fill out this brief form and our team will get in touch with available appointments.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(210) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                        Type of Care *
                      </label>
                      <select
                        value={formData.careType}
                        onChange={(e) => setFormData({ ...formData, careType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                      >
                        <option value="Concierge Membership">Concierge Membership (24/7 Access)</option>
                        <option value="Insurance Primary Care Visit">Insurance Primary Care Visit</option>
                        <option value="Mental Health & Ketamine Therapy">Mental Health & Ketamine Therapy</option>
                        <option value="Neurofeedback & Brain Mapping">Neurofeedback & Brain Mapping</option>
                        <option value="Osteopathic Manipulation (OMT)">Osteopathic Manipulation (OMT)</option>
                        <option value="Employer / Business Care">Employer / Business Healthcare</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                      Preferred Clinic Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                    >
                      <option value="Suite 1206 (I-10)">Suite 1206 — 22211 I-10</option>
                      <option value="Suite 202 (I-10 Frontage)">Suite 202 — 24165 W I-10 Frontage</option>
                      <option value="Virtual / Telehealth Consultation">Virtual / Telehealth Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#231618] mb-1.5">
                      What can we help you with? (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your health goals, questions regarding membership, or symptoms..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#EADBCE] text-sm text-[#231618] focus:outline-none focus:border-[#C87D75] focus:ring-1 focus:ring-[#C87D75] transition-all"
                    />
                  </div>

                  {/* Submission note with SLA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-4 text-sm font-bold shadow-lg"
                    >
                      {loading ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Submit Consultation Request</span>
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-[#8E7B7E] mt-3">
                      🔒 Your medical privacy is strictly protected under HIPAA. We will respond within 1 business day.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
