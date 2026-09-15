export type ServiceCategory = 'everyday' | 'diagnostics' | 'mind' | 'employers'

export type Service = {
  id: string
  title: string
  desc: string
  detail: string
  image: string
  imageAlt: string
  category: ServiceCategory
  featured?: boolean
  /** Dedicated service page when available */
  href?: string
}

export const serviceCategories: {
  id: ServiceCategory | 'all'
  label: string
}[] = [
  { id: 'all', label: 'All services' },
  { id: 'everyday', label: 'Everyday care' },
  { id: 'diagnostics', label: 'Diagnostics & body' },
  { id: 'mind', label: 'Mind & specialty' },
  { id: 'employers', label: 'For employers' },
]

/**
 * StarMed clinical catalog — aligned with starmed.clinic + homepage services.
 */
export const services: Service[] = [
  {
    id: 'primary',
    title: 'Primary & preventive care',
    desc: 'Routine checkups, preventive screenings, and ongoing primary care in a comfortable setting.',
    detail:
      'Build a lasting relationship with a physician who knows your history — annual exams, vaccines, and proactive screening plans.',
    image: '/service-primary.jpg',
    imageAlt: 'Primary and preventive care at StarMed',
    category: 'everyday',
    href: '/services/primary-and-preventive-care',
  },
  {
    id: 'urgent',
    title: 'Urgent & minor care',
    desc: 'Same-day or next-day attention for minor injuries, sudden illness, stitches, and sprains.',
    detail:
      'When something can’t wait for a routine visit, we treat sprains, stitches, sudden illness, and minor trauma with clear follow-up.',
    image: '/service-urgent.jpg',
    imageAlt: 'Urgent and minor care at StarMed',
    category: 'everyday',
    href: '/services/urgent-care-and-minor-procedures',
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic & laboratory',
    desc: 'Lab work, screening tests, and diagnostic support kept close to your care plan.',
    detail:
      'Thorough testing designed around your needs — results explained in plain language and tied to a real next step.',
    image: '/service-diagnostics-card.jpg',
    imageAlt: 'Diagnostic and laboratory services at StarMed',
    category: 'diagnostics',
  },
  {
    id: 'body-composition',
    title: 'Body composition analysis',
    desc: 'Detailed body composition insights to guide fitness, nutrition, and wellness planning.',
    detail:
      'Go beyond the scale. Understand muscle, fat, and metabolic markers that inform nutrition and training goals.',
    image: '/service-bodycomp.jpg',
    imageAlt: 'Body composition and wellness analysis',
    category: 'diagnostics',
    href: '/services/body-composition-analysis',
  },
  {
    id: 'wellness-exams',
    title: 'Physical & wellness exams',
    desc: 'Comprehensive physicals and wellness exams tailored to your age, goals, and health history.',
    detail:
      'Unhurried physicals that leave room for questions — school, work, travel, and age-based wellness visits.',
    image: '/service-wellness.jpg',
    imageAlt: 'Physical and wellness exam consultation',
    category: 'everyday',
    href: '/services/physical-and-wellness-exams',
  },
  {
    id: 'chronic',
    title: 'Chronic condition management',
    desc: 'Ongoing care for hypertension, diabetes, thyroid disease, and other long-term conditions.',
    detail:
      'Steady partnership for lifelong conditions — medication review, lifestyle plans, and coordinated specialist care.',
    image: '/service-chronic.jpg',
    imageAlt: 'Chronic condition management at StarMed',
    category: 'everyday',
    href: '/services/chronic-condition-management',
  },
  {
    id: 'pediatric-geriatric',
    title: 'Pediatric & geriatric care',
    desc: 'Thoughtful care across life stages — from children and teens to older adults.',
    detail:
      'Family-centered visits for growing kids and aging adults — with patience, clarity, and respect at every age.',
    image: '/service-family.jpg',
    imageAlt: 'Pediatric and family care at StarMed',
    category: 'everyday',
    href: '/services/pediatric-and-geriatric-care',
  },
  {
    id: 'omt',
    title: 'Osteopathic manipulative treatment',
    desc: 'Hands-on OMT to ease back pain, migraines, and muscle tension while supporting overall health.',
    detail:
      'Osteopathic techniques that improve mobility and relieve musculoskeletal strain — a signature StarMed specialty.',
    image: '/service-omt.jpg',
    imageAlt: 'Osteopathic manipulative treatment at StarMed',
    category: 'mind',
    featured: true,
    href: '/services/osteopathic-manipulative-treatment',
  },
  {
    id: 'mental-wellness',
    title: 'Mental wellness',
    desc: 'Personal therapy and support for anxiety, stress, grief, and emotional wellbeing.',
    detail:
      'Gentle, personalized support for anxiety, grief, and stress — including therapy plans shaped around your life.',
    image: '/service-mental.jpg',
    imageAlt: 'Mental wellness care at StarMed',
    category: 'mind',
    featured: true,
    href: '/services/mental-wellness',
  },
  {
    id: 'weight-loss',
    title: 'Weight loss management',
    desc: 'Personalized plans that combine medical guidance, nutrition, and sustainable lifestyle support.',
    detail:
      'Medical guidance paired with nutrition and habit support — built for lasting change, not short-term fixes.',
    image: '/service-weight.jpg',
    imageAlt: 'Weight loss management consultation',
    category: 'diagnostics',
    href: '/services/weight-loss-management',
  },
  {
    id: 'ketamine',
    title: 'Ketamine infusion therapy',
    desc: 'Advanced therapy for treatment-resistant depression, anxiety, and PTSD when standard care falls short.',
    detail:
      'When traditional treatments aren’t enough, ketamine therapy can help restore balance — carefully supervised and patient-centered.',
    image: '/service-ketamine.jpg',
    imageAlt: 'Ketamine infusion and brain wellness care',
    category: 'mind',
    featured: true,
    href: '/services/ketamine-infusion-therapy',
  },
  {
    id: 'businesses',
    title: 'Direct primary care for businesses',
    desc: 'Employer DPC membership — predictable monthly care for teams, without insurance middlemen.',
    detail:
      'A workplace access model, not a clinical specialty: same-day visits, telemedicine, and wellness support that cut costs and keep employees productive.',
    image: '/service-business.jpg',
    imageAlt: 'Direct primary care for businesses',
    category: 'employers',
    href: '/services/direct-primary-care-for-businesses',
  },
]

export const featuredServices = services.filter((service) => service.featured)
