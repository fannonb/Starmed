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
    careIndividuals: 'Individuals & families',
    careMental: 'Mental health',
    megaPathways: 'Find care for',
    services: 'Services',
    membership: 'Membership',
    contact: 'Contact',
    faq: 'FAQ',
    viewAll: 'View all',
    viewAllServices: 'View all services',
    menu: 'Menu',
    close: 'Close',
    contactUs: 'Contact us',
    bookAppointment: 'Book appointment',
    call: 'Call',
    clinicHours: 'Clinic hours',
    hoursValue: 'Mon–Fri 8:00 AM – 5:00 PM',
    viewLocations: 'Locations & directions →',
    browseServices: 'Services',
    language: 'Language / Idioma',
    locationsLabel: 'Suite 202 · Suite 1206',
    locationsCity: 'San Antonio',
    categoryEmployers: 'For employers',
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
    pathTitle: 'Who are you',
    pathTitleAccent: 'here for?',
    pathFamilyTitle: 'Individuals & families',
    pathFamilyDesc: 'Checkups, sick visits, kids, and seniors.',
    pathBusinessTitle: 'Businesses',
    pathBusinessDesc: 'Direct care for your team. No insurance middleman.',
    pathBrainTitle: 'Mental health & brain wellbeing',
    pathBrainDesc: 'Therapy, ketamine infusion, and brain health.',
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
      'Answers about booking, hours, insurance, membership, urgent care, and mental health care at StarMed Clinic in San Antonio.',
    breadcrumb: 'FAQ',
    title: 'Frequently asked questions',
    heroDesc: 'Quick answers about visits, insurance, and membership.',
    topicsLabel: 'Topics',
    groups: [
      {
        id: 'visits',
        title: 'Visits',
        items: [
          {
            q: 'How do I book a visit?',
            a: 'Book online, call us at (726) 242-3011, or send us a message. We’ll confirm your time.',
            href: '/appointments',
            linkLabel: 'Book online',
          },
          {
            q: 'What are your hours?',
            a: 'Monday to Friday, 8 AM to 5 PM. Members can reach their doctor any time.',
          },
          {
            q: 'Where are you?',
            a: 'We have two clinics in San Antonio: 24165 W Interstate 10 Frontage Rd, Suite 202, and 22211 I-10, Suite 1206.',
            href: '/contact',
            linkLabel: 'Get directions',
          },
          {
            q: 'Can I be seen quickly?',
            a: 'Members get same-day or next-day visits. Everyone can come in for urgent needs like sprains, stitches, and sudden illness.',
          },
          {
            q: 'What happens at my first visit?',
            a: 'An unhurried visit. We go over your health history and what’s bothering you, and do an exam. You leave with clear next steps.',
          },
          {
            q: 'Do you offer video visits?',
            a: 'Yes, for some visits, like follow-ups and going over results. Ask when you book.',
          },
          {
            q: 'Do you speak Spanish?',
            a: 'Yes. Visits are available in English or Spanish.',
          },
          {
            q: 'How do I give feedback?',
            a: 'Tell any member of our team, or leave us a review on Google. We read every one.',
          },
        ],
      },
      {
        id: 'insurance-membership',
        title: 'Insurance and membership',
        items: [
          {
            q: 'Do you take my insurance?',
            a: 'We accept most major plans for regular visits, including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and Humana. We can check your benefits before you come in.',
          },
          {
            q: 'What’s the difference between membership and an insurance visit?',
            a: 'Membership is a flat fee for 24/7 access to your doctor, same-day or next-day visits, and longer appointments. An insurance visit is a regular visit during clinic hours, billed to your insurance, with no membership fee.',
            href: '/membership#compare',
            linkLabel: 'Compare them side by side',
          },
          {
            q: 'How much is membership?',
            a: 'A flat monthly, quarterly, or annual fee, with no surprise bills. Call us for current prices.',
            href: '/membership#plans',
            linkLabel: 'See membership plans',
          },
          {
            q: 'Can I reach my doctor after hours?',
            a: 'Members can call, text, or email their doctor any time. Everyone else can call the clinic during opening hours.',
          },
          {
            q: 'Can I switch or cancel later?',
            a: 'Yes. There are no long contracts. You can change how often you pay, or move between membership and insurance visits.',
          },
        ],
      },
      {
        id: 'care',
        title: 'Our care',
        items: [
          {
            q: 'Can you treat urgent problems?',
            a: 'Yes, for everyone, member or not: sprains, cuts that need stitches, sudden illness, and other problems that don’t need the ER.',
            href: '/services/urgent-care-and-minor-procedures',
            linkLabel: 'Urgent care',
          },
          {
            q: 'Do you do checkups and screenings?',
            a: 'Yes. Yearly checkups, screenings, and vaccines.',
            href: '/services/primary-and-preventive-care',
            linkLabel: 'Primary and preventive care',
          },
          {
            q: 'Do you offer mental health care?',
            a: 'Yes. Talk therapy, medicine, and other treatments for anxiety, depression, stress, and more.',
            href: '/services/mental-wellness',
            linkLabel: 'Mental wellness',
          },
        ],
      },
    ],
    stillTitle: 'Still have a question?',
    stillDesc: 'Call us or send a message. We reply within one business day.',
    call: 'Call (726) 242-3011',
    contactUs: 'Send a message',
  },
  care: {
    individuals: {
      breadcrumb: 'Individuals & families',
      title: 'Care for you and your family',
      titleAccent: '',
      description:
        'Checkups, sick visits, long-term conditions, and care for kids and older adults.',
    },
    mental: {
      breadcrumb: 'Mental health & brain wellbeing',
      title: 'Mental health care',
      titleAccent: '',
      description:
        'Help for anxiety, depression, trauma, and stress, from talk therapy to ketamine treatment.',
      stepsTitle: 'How it starts',
      steps: [
        { title: 'We listen', desc: 'Your first visit is a conversation about what you’re going through.' },
        { title: 'We make a plan', desc: 'Therapy, medicine, or other treatments, on their own or together.' },
        { title: 'We stay with you', desc: 'Regular follow-ups to see what’s working and change what isn’t.' },
      ],
    },
    employers: {
      breadcrumb: 'For employers',
      title: 'Healthcare for your employees',
      titleAccent: '',
      description:
        'A flat monthly membership that gives your team quick access to a doctor, without insurance paperwork.',
    },
    chooser: {
      title: 'What do you need help with?',
      notSure: 'Not sure? Call us at {phone} and we’ll point you to the right care.',
    },
  },
  common: {
    home: 'Home',
    contactUs: 'Contact us',
    spanishWelcome: 'Atención en español disponible',
    dismiss: 'Dismiss',
    scrollToTop: 'Back to top',
  },
}

export type Messages = DeepStringify<typeof en>

const es: Messages = {
  pages: pagesEs,
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    careIndividuals: 'Personas y familias',
    careMental: 'Salud mental',
    megaPathways: 'Atención para',
    services: 'Servicios',
    membership: 'Membresía',
    contact: 'Contacto',
    faq: 'Preguntas',
    viewAll: 'Ver todos',
    viewAllServices: 'Ver todos los servicios',
    menu: 'Menú',
    close: 'Cerrar',
    contactUs: 'Contáctenos',
    bookAppointment: 'Reservar cita',
    call: 'Llamar',
    clinicHours: 'Horario de la clínica',
    hoursValue: 'Lun–Vie 8:00 AM – 5:00 PM',
    viewLocations: 'Ubicaciones y cómo llegar →',
    browseServices: 'Servicios',
    language: 'Language / Idioma',
    locationsLabel: 'Suite 202 · Suite 1206',
    locationsCity: 'San Antonio',
    categoryEmployers: 'Para empleadores',
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
    pathTitle: '¿Para quién',
    pathTitleAccent: 'busca atención?',
    pathFamilyTitle: 'Personas y familias',
    pathFamilyDesc: 'Chequeos, consultas por enfermedad, niños y adultos mayores.',
    pathBusinessTitle: 'Empresas',
    pathBusinessDesc: 'Atención directa para su equipo, sin intermediarios de seguros.',
    pathBrainTitle: 'Salud mental y bienestar cerebral',
    pathBrainDesc: 'Terapia, infusión de ketamina y salud cerebral.',
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
      'Respuestas sobre citas, horario, seguros, membresía, atención urgente y salud mental en StarMed Clinic, San Antonio.',
    breadcrumb: 'Preguntas',
    title: 'Preguntas frecuentes',
    heroDesc: 'Respuestas rápidas sobre visitas, seguros y membresía.',
    topicsLabel: 'Temas',
    groups: [
      {
        id: 'visits',
        title: 'Visitas',
        items: [
          {
            q: '¿Cómo reservo una visita?',
            a: 'Reserve en línea, llámenos al (726) 242-3011 o envíenos un mensaje. Le confirmaremos la hora.',
            href: '/appointments',
            linkLabel: 'Reservar en línea',
          },
          {
            q: '¿Cuál es su horario?',
            a: 'De lunes a viernes, de 8 AM a 5 PM. Los miembros pueden contactar a su médico a cualquier hora.',
          },
          {
            q: '¿Dónde están?',
            a: 'Tenemos dos clínicas en San Antonio: 24165 W Interstate 10 Frontage Rd, Suite 202, y 22211 I-10, Suite 1206.',
            href: '/contact',
            linkLabel: 'Cómo llegar',
          },
          {
            q: '¿Me pueden atender pronto?',
            a: 'Los miembros tienen visitas el mismo día o al siguiente. Todos pueden venir por necesidades urgentes como esguinces, puntos y enfermedades repentinas.',
          },
          {
            q: '¿Qué pasa en mi primera visita?',
            a: 'Una visita sin prisa. Revisamos su historial y lo que le molesta, y le hacemos un examen. Sale con pasos claros a seguir.',
          },
          {
            q: '¿Ofrecen visitas por video?',
            a: 'Sí, para algunas visitas, como seguimientos y revisión de resultados. Pregunte al reservar.',
          },
          {
            q: '¿Hablan español?',
            a: 'Sí. Las visitas están disponibles en inglés o en español.',
          },
          {
            q: '¿Cómo doy mi opinión?',
            a: 'Dígaselo a cualquier miembro de nuestro equipo o déjenos una reseña en Google. Leemos todas.',
          },
        ],
      },
      {
        id: 'insurance-membership',
        title: 'Seguros y membresía',
        items: [
          {
            q: '¿Aceptan mi seguro?',
            a: 'Aceptamos la mayoría de los planes principales para visitas regulares, como Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna y Humana. Podemos verificar sus beneficios antes de su visita.',
          },
          {
            q: '¿Cuál es la diferencia entre la membresía y una visita con seguro?',
            a: 'La membresía es una cuota fija con acceso 24/7 a su médico, visitas el mismo día o al siguiente y citas más largas. Una visita con seguro es una visita regular en horario de clínica, facturada a su seguro, sin cuota de membresía.',
            href: '/membership#compare',
            linkLabel: 'Compararlas lado a lado',
          },
          {
            q: '¿Cuánto cuesta la membresía?',
            a: 'Una cuota fija mensual, trimestral o anual, sin facturas sorpresa. Llámenos para conocer los precios actuales.',
            href: '/membership#plans',
            linkLabel: 'Ver los planes de membresía',
          },
          {
            q: '¿Puedo contactar a mi médico fuera de horario?',
            a: 'Los miembros pueden llamar, enviar un mensaje o un correo a su médico a cualquier hora. Los demás pueden llamar a la clínica en horario de atención.',
          },
          {
            q: '¿Puedo cambiar o cancelar después?',
            a: 'Sí. No hay contratos largos. Puede cambiar la frecuencia de pago o pasar entre membresía y visitas con seguro.',
          },
        ],
      },
      {
        id: 'care',
        title: 'Nuestra atención',
        items: [
          {
            q: '¿Atienden problemas urgentes?',
            a: 'Sí, para todos, sean miembros o no: esguinces, cortes que necesitan puntos, enfermedades repentinas y otros problemas que no requieren sala de emergencias.',
            href: '/services/urgent-care-and-minor-procedures',
            linkLabel: 'Atención urgente',
          },
          {
            q: '¿Hacen chequeos y exámenes de detección?',
            a: 'Sí. Chequeos anuales, exámenes de detección y vacunas.',
            href: '/services/primary-and-preventive-care',
            linkLabel: 'Cuidado primario y preventivo',
          },
          {
            q: '¿Ofrecen atención de salud mental?',
            a: 'Sí. Terapia, medicamentos y otros tratamientos para la ansiedad, la depresión, el estrés y más.',
            href: '/services/mental-wellness',
            linkLabel: 'Bienestar mental',
          },
        ],
      },
    ],
    stillTitle: '¿Todavía tiene una pregunta?',
    stillDesc: 'Llámenos o envíenos un mensaje. Respondemos en un día hábil.',
    call: 'Llamar (726) 242-3011',
    contactUs: 'Enviar un mensaje',
  },
  care: {
    individuals: {
      breadcrumb: 'Personas y familias',
      title: 'Cuidado para usted y su familia',
      titleAccent: '',
      description:
        'Chequeos, visitas por enfermedad, condiciones a largo plazo y atención para niños y adultos mayores.',
    },
    mental: {
      breadcrumb: 'Salud mental y bienestar cerebral',
      title: 'Atención de salud mental',
      titleAccent: '',
      description:
        'Ayuda para la ansiedad, la depresión, el trauma y el estrés, desde terapia hasta tratamiento con ketamina.',
      stepsTitle: 'Cómo empieza',
      steps: [
        { title: 'Le escuchamos', desc: 'Su primera visita es una conversación sobre lo que está viviendo.' },
        { title: 'Hacemos un plan', desc: 'Terapia, medicamentos u otros tratamientos, solos o combinados.' },
        { title: 'Le acompañamos', desc: 'Seguimientos regulares para ver qué funciona y cambiar lo que no.' },
      ],
    },
    employers: {
      breadcrumb: 'Para empleadores',
      title: 'Atención médica para sus empleados',
      titleAccent: '',
      description:
        'Una membresía mensual fija que da a su equipo acceso rápido a un médico, sin trámites de seguros.',
    },
    chooser: {
      title: '¿Con qué necesita ayuda?',
      notSure: '¿No está seguro? Llámenos al {phone} y le indicaremos la atención adecuada.',
    },
  },
  common: {
    home: 'Inicio',
    contactUs: 'Contáctenos',
    spanishWelcome: 'Atención en español disponible',
    dismiss: 'Cerrar',
    scrollToTop: 'Volver arriba',
  },
}

export const messages: Record<Locale, Messages> = {
  en,
  es,
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages.en
}
