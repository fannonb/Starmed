type Localized = { en: string; es: string }

export type TeamMember = {
  name: string
  role: Localized
  /** e.g. "DO, Board-certified in Family Medicine" */
  credentials?: string
  /** Path under /public, e.g. '/team/dr-randdolf.jpg' */
  photo: string
  quote?: Localized
}

/**
 * About page content that must come from the clinic itself.
 * Sections stay hidden until filled in: `story: null` hides "Our story", an empty `team` hides "Meet your care team".
 */
export const about: {
  story: { body: Localized; image?: string; imageAlt?: Localized } | null
  team: TeamMember[]
} = {
  story: {
    body: {
      en: 'Most of us know the fifteen-minute doctor’s visit: a rushed conversation, one eye on the clock, and questions saved for next time. StarMed is the opposite — a San Antonio primary care practice where there’s time to listen, explain, and get to know you.\n\nFor more than ten years, we’ve cared for individuals, families, and local businesses from our clinic on I-10. Led by Dr. Derrick Randdolf, our team handles everything from checkups and sick visits to chronic conditions, weight loss, and mental health, all under one roof. Use your insurance, pay per visit, or become a member and reach your doctor any time by phone, text, or email. Either way, you get the same unhurried care, in English or Spanish.',
      es: 'Todos conocemos la consulta médica de quince minutos: una conversación apurada, un ojo en el reloj y preguntas que quedan para la próxima vez. StarMed es lo contrario: una práctica de atención primaria en San Antonio donde hay tiempo para escuchar, explicar y conocerle.\n\nDesde hace más de diez años atendemos a personas, familias y empresas locales en nuestra clínica sobre la I-10. Bajo la dirección del Dr. Derrick Randdolf, nuestro equipo se ocupa de todo, desde chequeos y consultas por enfermedad hasta condiciones crónicas, control de peso y salud mental, todo bajo un mismo techo. Use su seguro, pague por visita o hágase miembro y comuníquese con su médico en cualquier momento por teléfono, mensaje o correo. De cualquier forma, recibe la misma atención sin prisa, en inglés o en español.',
    },
    image: '/about-dedication.webp',
    imageAlt: {
      en: 'A clinician greeting an older couple during a relaxed visit',
      es: 'Un clínico saluda a una pareja mayor durante una visita tranquila',
    },
  },
  team: [],
}
