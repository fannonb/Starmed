import type { Locale } from '@/lib/i18n'
import { pagesEn, pagesEs } from '@/messages/pages'

type DeepStringify<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? DeepStringify<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStringify<T[K]> }
      : T

const en = {
  pages: pagesEn,
  nav: {
    home: 'Home',
    about: 'About',
    care: 'Care pathway',
    careIndividuals: 'Individuals & families',
    careMental: 'Mental health',
    careEmployers: 'Employers',
    hintCareIndividuals: 'Primary, urgent, pediatric, and family care',
    hintCareMental: 'Therapy, ketamine, and brain wellbeing',
    hintCareEmployers: 'Direct primary care for workplaces',
    megaPathways: 'Care pathways',
    megaPathwaysDesc: 'Start with who you’re here for.',
    megaServices: 'Services',
    megaServicesDesc: 'Browse care by need.',
    services: 'Services',
    membership: 'Membership',
    contact: 'Contact',
    faq: 'FAQ',
    viewAll: 'View all',
    viewPath: 'View path',
    contactUs: 'Contact us',
    bookAppointment: 'Book appointment',
    call: 'Call',
    clinicHours: 'Clinic hours',
    hoursValue: 'Mon–Fri 8:00 AM – 5:00 PM',
    viewLocations: 'View locations & map →',
    browseServices: 'Services',
    language: 'Language / Idioma',
    locationsLabel: 'Suite 202 · Suite 1206',
    locationsCity: 'San Antonio',
    categoryEveryday: 'Everyday care',
    categoryDiagnostics: 'Diagnostics & body',
    categoryMind: 'Mind & specialty',
    categoryEmployers: 'For employers',
    hintEveryday: 'Checkups, illness, and ongoing care',
    hintDiagnostics: 'Labs, body metrics, and weight support',
    hintMind: 'Brain, mood, and hands-on specialty care',
    hintEmployers: 'Direct primary care for teams',
  },
  footer: {
    headline: "Let's make care",
    headlineAccent: 'feel easier.',
    sub: "Questions or ready to start? We'll help you find the right fit.",
    visitUs: 'Visit us',
    fax: 'Fax',
    reply: 'Reply within one business day.',
    emergencies: 'Emergencies:',
    call911: '911',
    emergenciesRest: 'Non-emergency care only.',
    sanAntonio: 'San Antonio',
    rightsReserved: 'All rights reserved.',
  },
  home: {
    pathEyebrow: 'Get started',
    pathTitle: 'Choose the path that',
    pathTitleAccent: 'fits you.',
    pathDesc:
      'StarMed serves people, workplaces, and mental wellbeing differently. Select the option below that matches who you are here for — we will guide you from there.',
    pathFamilyTitle: 'Individuals & families',
    pathFamilyDesc:
      'For personal or family care — primary visits, urgent needs, pediatrics, and ongoing support.',
    pathBusinessTitle: 'Businesses',
    pathBusinessDesc:
      'For employers who want direct clinic access for their team, without insurance billing.',
    pathBrainTitle: 'Mental health & brain wellbeing',
    pathBrainDesc:
      'For therapy, ketamine infusion, and specialty care focused on real recovery.',
  },
  contact: {
    metaTitle: 'Contact | StarMed Clinic San Antonio',
    metaDesc:
      'Contact StarMed Clinic in San Antonio — call, email, or visit our I-10 locations to schedule care or ask about membership and services.',
  },
  membership: {
    metaTitle: 'Concierge Membership | StarMed Clinic San Antonio',
    metaDesc:
      'StarMed cash-pay concierge membership in San Antonio — 24/7 physician access, same-day visits, longer appointments, and annual, quarterly, or monthly plans.',
  },
  faq: {
    metaTitle: 'Frequently Asked Questions | StarMed Clinic San Antonio',
    metaDesc:
      'Find answers about StarMed appointments, insurance, concierge membership, urgent care, preventive services, and mental wellness in San Antonio.',
    breadcrumb: 'FAQ',
    title: 'Your concerns,',
    titleAccent: 'clarified.',
    heroDesc:
      'Answers about services, appointments, and membership. If you still have questions, our team is ready to help.',
    browseBy: 'Browse by topic',
    findFaster: 'Find what you need faster.',
    findDesc:
      'Filter by topic, or scan the full list. Still stuck? Contact the clinic and we’ll walk you through it.',
    all: 'All questions',
    appointments: 'Appointments',
    membershipCat: 'Membership & insurance',
    services: 'Services',
    feedback: 'Feedback',
    showing: 'Showing',
    question: 'question',
    questions: 'questions',
    stillTitle: 'Still have a question?',
    stillDesc: 'Reach the clinic for scheduling, membership details, or service guidance.',
    contactUs: 'Contact us',
    ctaTitle: 'Ready for care that puts you first?',
    ctaDesc:
      'Convenient, affordable healthcare with access to your doctor when you need it — and a team that answers the questions that matter.',
    exploreMembership: 'Explore membership',
    items: [
      {
        category: 'membership',
        q: 'What types of insurance do you accept?',
        a: 'StarMed accepts major commercial insurance plans for conventional medical visits. Our front desk can help verify your benefits before your appointment.',
      },
      {
        category: 'appointments',
        q: 'How can I schedule an appointment?',
        a: 'Call the clinic or send a message through our contact page. We’ll help you choose the right visit type — membership or conventional — and get you scheduled.',
      },
      {
        category: 'membership',
        q: 'What is the difference between concierge and conventional services?',
        a: 'Concierge membership is a cash-pay relationship that includes continuous physician access (including nights and weekends), same- or next-day visits, and longer appointments. Conventional visits are billed through insurance during regular clinic hours, with no membership required.',
      },
      {
        category: 'services',
        q: 'Are there mental health services available?',
        a: 'Yes. StarMed offers mental wellness care, including therapy and specialty support for mood and emotional wellbeing. Ask us about the pathway that fits your needs.',
      },
      {
        category: 'appointments',
        q: 'What should I expect during my first visit?',
        a: 'Expect a thorough consultation tailored to your health history and goals, with time to ask questions and clear next steps — and minimal wait when you arrive.',
      },
      {
        category: 'membership',
        q: 'Can I contact my doctor outside of office hours?',
        a: 'Concierge members can reach their physician by call or message outside standard clinic hours. Conventional patients can contact the clinic during business hours or use urgent-care pathways when something can’t wait.',
      },
      {
        category: 'services',
        q: 'Do you offer preventive care services?',
        a: 'Yes. Preventive care is central to StarMed — routine screenings, wellness exams, vaccines, and plans designed to catch issues earlier.',
      },
      {
        category: 'services',
        q: 'What if I need urgent care?',
        a: 'StarMed provides urgent and minor care for both membership and conventional patients — sprains, sudden illness, stitches, and similar needs that shouldn’t default to the ER.',
      },
      {
        category: 'membership',
        q: 'Is there a membership fee for concierge services?',
        a: 'Yes. Concierge membership is billed on the cadence you choose — annual, quarterly, or monthly — with transparent flat fees and no surprise membership bills.',
      },
      {
        category: 'feedback',
        q: 'How do I provide feedback about my experience?',
        a: 'Share feedback directly with our staff, or leave a review on the public platforms you trust. We use patient input to keep care clear, kind, and continuously better.',
      },
    ],
  },
  care: {
    individuals: {
      breadcrumb: 'Individuals & families',
      title: 'Care for the life',
      titleAccent: "you're living.",
      description:
        'Primary visits, urgent needs, pediatrics, wellness, and ongoing support — for you and the people you care for most.',
    },
    mental: {
      breadcrumb: 'Mental health & brain wellbeing',
      title: 'Quiet care for',
      titleAccent: 'real recovery.',
      description:
        'Therapy, ketamine infusion, and specialty support in a discreet clinical setting — for anxiety, mood, trauma, and the weight that doesn’t lift on its own.',
    },
    employers: {
      breadcrumb: 'For employers',
      title: 'Direct care that',
      titleAccent: 'keeps teams working.',
      description:
        'Direct Primary Care for businesses — predictable access for employees, clearer costs for leadership, and less insurance friction for everyday medicine.',
    },
  },
  common: {
    home: 'Home',
    contactUs: 'Contact us',
    spanishWelcome: 'Atención en español disponible',
    dismiss: 'Dismiss',
  },
}

export type Messages = DeepStringify<typeof en>

const es: Messages = {
  pages: pagesEs,
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    care: 'Camino de cuidado',
    careIndividuals: 'Personas y familias',
    careMental: 'Salud mental',
    careEmployers: 'Empleadores',
    hintCareIndividuals: 'Cuidado primario, urgente, pediátrico y familiar',
    hintCareMental: 'Terapia, ketamina y bienestar cerebral',
    hintCareEmployers: 'Atención primaria directa para empresas',
    megaPathways: 'Caminos de cuidado',
    megaPathwaysDesc: 'Comience según para quién busca atención.',
    megaServices: 'Servicios',
    megaServicesDesc: 'Explore el cuidado por necesidad.',
    services: 'Servicios',
    membership: 'Membresía',
    contact: 'Contacto',
    faq: 'Preguntas',
    viewAll: 'Ver todos',
    viewPath: 'Ver camino',
    contactUs: 'Contáctenos',
    bookAppointment: 'Reservar cita',
    call: 'Llamar',
    clinicHours: 'Horario de la clínica',
    hoursValue: 'Lun–Vie 8:00 AM – 5:00 PM',
    viewLocations: 'Ver ubicaciones y mapa →',
    browseServices: 'Servicios',
    language: 'Language / Idioma',
    locationsLabel: 'Suite 202 · Suite 1206',
    locationsCity: 'San Antonio',
    categoryEveryday: 'Cuidado cotidiano',
    categoryDiagnostics: 'Diagnóstico y cuerpo',
    categoryMind: 'Mente y especialidades',
    categoryEmployers: 'Para empleadores',
    hintEveryday: 'Chequeos, enfermedades y cuidado continuo',
    hintDiagnostics: 'Laboratorios, métricas corporales y peso',
    hintMind: 'Cerebro, estado de ánimo y cuidado especializado',
    hintEmployers: 'Atención primaria directa para equipos',
  },
  footer: {
    headline: 'Hagamos que el cuidado',
    headlineAccent: 'se sienta más fácil.',
    sub: '¿Preguntas o listo para comenzar? Le ayudamos a encontrar la opción adecuada.',
    visitUs: 'Visítenos',
    fax: 'Fax',
    reply: 'Respondemos en un día hábil.',
    emergencies: 'Emergencias:',
    call911: '911',
    emergenciesRest: 'Solo atención no urgente.',
    sanAntonio: 'San Antonio',
    rightsReserved: 'Todos los derechos reservados.',
  },
  home: {
    pathEyebrow: 'Comenzar',
    pathTitle: 'Elija el camino que',
    pathTitleAccent: 'le conviene.',
    pathDesc:
      'StarMed atiende a personas, empresas y bienestar mental de formas distintas. Seleccione la opción que mejor describe para quién busca cuidado — le guiaremos desde ahí.',
    pathFamilyTitle: 'Personas y familias',
    pathFamilyDesc:
      'Para cuidado personal o familiar — visitas primarias, urgencias menores, pediatría y apoyo continuo.',
    pathBusinessTitle: 'Empresas',
    pathBusinessDesc:
      'Para empleadores que quieren acceso directo a la clínica para su equipo, sin facturación de seguros.',
    pathBrainTitle: 'Salud mental y bienestar cerebral',
    pathBrainDesc:
      'Para terapia, infusión de ketamina y cuidado especializado enfocado en una recuperación real.',
  },
  contact: {
    metaTitle: 'Contacto | StarMed Clinic San Antonio',
    metaDesc:
      'Contacte StarMed Clinic en San Antonio — llame, escriba o visite nuestras clínicas en I-10 para programar atención o preguntar por membresía y servicios.',
  },
  membership: {
    metaTitle: 'Membresía Concierge | StarMed Clinic San Antonio',
    metaDesc:
      'Membresía concierge de pago directo en StarMed San Antonio — acceso 24/7 al médico, visitas el mismo o siguiente día, citas más largas y planes anuales, trimestrales o mensuales.',
  },
  faq: {
    metaTitle: 'Preguntas frecuentes | StarMed Clinic San Antonio',
    metaDesc:
      'Respuestas sobre citas, seguros, membresía concierge, urgencias, prevención y bienestar mental en StarMed San Antonio.',
    breadcrumb: 'Preguntas',
    title: 'Sus dudas,',
    titleAccent: 'aclaradas.',
    heroDesc:
      'Respuestas sobre servicios, citas y membresía. Si aún tiene preguntas, nuestro equipo está listo para ayudar.',
    browseBy: 'Explorar por tema',
    findFaster: 'Encuentre lo que necesita más rápido.',
    findDesc:
      'Filtre por tema o revise la lista completa. ¿Aún tiene dudas? Contacte la clínica y le guiaremos.',
    all: 'Todas las preguntas',
    appointments: 'Citas',
    membershipCat: 'Membresía y seguros',
    services: 'Servicios',
    feedback: 'Comentarios',
    showing: 'Mostrando',
    question: 'pregunta',
    questions: 'preguntas',
    stillTitle: '¿Todavía tiene una pregunta?',
    stillDesc:
      'Comuníquese con la clínica para citas, detalles de membresía u orientación sobre servicios.',
    contactUs: 'Contáctenos',
    ctaTitle: '¿Listo para un cuidado que lo pone a usted primero?',
    ctaDesc:
      'Atención conveniente y asequible, con acceso a su médico cuando lo necesite — y un equipo que responde las preguntas importantes.',
    exploreMembership: 'Explorar membresía',
    items: [
      {
        category: 'membership',
        q: '¿Qué tipos de seguro aceptan?',
        a: 'StarMed acepta los principales planes de seguro comercial para visitas médicas convencionales. Nuestro personal de recepción puede ayudarle a verificar sus beneficios antes de la cita.',
      },
      {
        category: 'appointments',
        q: '¿Cómo puedo programar una cita?',
        a: 'Llame a la clínica o envíe un mensaje desde nuestra página de contacto. Le ayudaremos a elegir el tipo de visita — membresía o convencional — y a programarla.',
      },
      {
        category: 'membership',
        q: '¿Cuál es la diferencia entre servicios concierge y convencionales?',
        a: 'La membresía concierge es una relación de pago directo que incluye acceso continuo al médico (también noches y fines de semana), visitas el mismo o siguiente día y citas más largas. Las visitas convencionales se facturan al seguro en horario regular de clínica, sin membresía.',
      },
      {
        category: 'services',
        q: '¿Hay servicios de salud mental disponibles?',
        a: 'Sí. StarMed ofrece bienestar mental, incluyendo terapia y apoyo especializado para el estado de ánimo y el bienestar emocional. Pregúntenos por el camino que mejor se adapte a usted.',
      },
      {
        category: 'appointments',
        q: '¿Qué debo esperar en mi primera visita?',
        a: 'Espere una consulta completa adaptada a su historial y metas de salud, con tiempo para preguntas y pasos claros — y una espera mínima al llegar.',
      },
      {
        category: 'membership',
        q: '¿Puedo contactar a mi médico fuera del horario de oficina?',
        a: 'Los miembros concierge pueden comunicarse con su médico por llamada o mensaje fuera del horario estándar. Los pacientes convencionales pueden contactar la clínica en horario laboral o usar las vías de atención urgente cuando algo no puede esperar.',
      },
      {
        category: 'services',
        q: '¿Ofrecen servicios de cuidado preventivo?',
        a: 'Sí. La prevención es central en StarMed — exámenes de rutina, chequeos de bienestar, vacunas y planes diseñados para detectar problemas a tiempo.',
      },
      {
        category: 'services',
        q: '¿Qué pasa si necesito atención urgente?',
        a: 'StarMed ofrece atención urgente y de procedimientos menores tanto para pacientes con membresía como convencionales — esguinces, enfermedades repentinas, puntos y necesidades similares que no deberían ir primero a la sala de emergencias.',
      },
      {
        category: 'membership',
        q: '¿Hay una cuota de membresía para los servicios concierge?',
        a: 'Sí. La membresía concierge se factura según la frecuencia que elija — anual, trimestral o mensual — con tarifas fijas transparentes y sin sorpresas.',
      },
      {
        category: 'feedback',
        q: '¿Cómo puedo dar comentarios sobre mi experiencia?',
        a: 'Comparta sus comentarios directamente con nuestro personal, o deje una reseña en las plataformas públicas de su preferencia. Usamos la opinión de los pacientes para mantener un cuidado claro, amable y cada vez mejor.',
      },
    ],
  },
  care: {
    individuals: {
      breadcrumb: 'Personas y familias',
      title: 'Cuidado para la vida',
      titleAccent: 'que está viviendo.',
      description:
        'Visitas primarias, urgencias menores, pediatría, bienestar y apoyo continuo — para usted y las personas que más le importan.',
    },
    mental: {
      breadcrumb: 'Salud mental y bienestar cerebral',
      title: 'Cuidado sereno para',
      titleAccent: 'una recuperación real.',
      description:
        'Terapia, infusión de ketamina y apoyo especializado en un entorno clínico discreto — para ansiedad, estado de ánimo, trauma y el peso que no se alivia solo.',
    },
    employers: {
      breadcrumb: 'Para empleadores',
      title: 'Cuidado directo que',
      titleAccent: 'mantiene a los equipos trabajando.',
      description:
        'Atención primaria directa para empresas — acceso predecible para empleados, costos más claros para la dirección y menos fricción del seguro en la medicina cotidiana.',
    },
  },
  common: {
    home: 'Inicio',
    contactUs: 'Contáctenos',
    spanishWelcome: 'Atención en español disponible',
    dismiss: 'Cerrar',
  },
}

export const messages: Record<Locale, Messages> = {
  en,
  es,
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages.en
}
