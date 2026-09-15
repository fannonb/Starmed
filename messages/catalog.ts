/** Bilingual clinical catalog — titles, short desc, detail for menus & grids */
export const catalogEn = {
  primary: {
    title: 'Primary & preventive care',
    desc: 'Routine checkups, preventive screenings, and ongoing primary care in a comfortable setting.',
    detail:
      'Build a lasting relationship with a physician who knows your history — annual exams, vaccines, and proactive screening plans.',
  },
  urgent: {
    title: 'Urgent & minor care',
    desc: 'Same-day or next-day attention for minor injuries, sudden illness, stitches, and sprains.',
    detail:
      'When something can’t wait for a routine visit, we treat sprains, stitches, sudden illness, and minor trauma with clear follow-up.',
  },
  diagnostics: {
    title: 'Diagnostic & laboratory',
    desc: 'Lab work, screening tests, and diagnostic support kept close to your care plan.',
    detail:
      'Thorough testing designed around your needs — results explained in plain language and tied to a real next step.',
  },
  'body-composition': {
    title: 'Body composition analysis',
    desc: 'Detailed body composition insights to guide fitness, nutrition, and wellness planning.',
    detail:
      'Go beyond the scale. Understand muscle, fat, and metabolic markers that inform nutrition and training goals.',
  },
  'wellness-exams': {
    title: 'Physical & wellness exams',
    desc: 'Comprehensive physicals and wellness exams tailored to your age, goals, and health history.',
    detail:
      'Unhurried physicals that leave room for questions — school, work, travel, and age-based wellness visits.',
  },
  chronic: {
    title: 'Chronic condition management',
    desc: 'Ongoing care for hypertension, diabetes, thyroid disease, and other long-term conditions.',
    detail:
      'Steady partnership for lifelong conditions — medication review, lifestyle plans, and coordinated specialist care.',
  },
  'pediatric-geriatric': {
    title: 'Pediatric & geriatric care',
    desc: 'Thoughtful care across life stages — from children and teens to older adults.',
    detail:
      'Family-centered visits for growing kids and aging adults — with patience, clarity, and respect at every age.',
  },
  omt: {
    title: 'Osteopathic manipulative treatment',
    desc: 'Hands-on OMT to ease back pain, migraines, and muscle tension while supporting overall health.',
    detail:
      'Osteopathic techniques that improve mobility and relieve musculoskeletal strain — a signature StarMed specialty.',
  },
  'mental-wellness': {
    title: 'Mental wellness',
    desc: 'Personal therapy and support for anxiety, stress, grief, and emotional wellbeing.',
    detail:
      'Gentle, personalized support for anxiety, grief, and stress — including therapy plans shaped around your life.',
  },
  'weight-loss': {
    title: 'Weight loss management',
    desc: 'Personalized plans that combine medical guidance, nutrition, and sustainable lifestyle support.',
    detail:
      'Medical guidance paired with nutrition and habit support — built for lasting change, not short-term fixes.',
  },
  ketamine: {
    title: 'Ketamine infusion therapy',
    desc: 'Advanced therapy for treatment-resistant depression, anxiety, and PTSD when standard care falls short.',
    detail:
      'When traditional treatments aren’t enough, ketamine therapy can help restore balance — carefully supervised and patient-centered.',
  },
  businesses: {
    title: 'Direct primary care for businesses',
    desc: 'Employer DPC membership — predictable monthly care for teams, without insurance middlemen.',
    detail:
      'A workplace access model, not a clinical specialty: same-day visits, telemedicine, and wellness support that cut costs and keep employees productive.',
  },
} as const

export const catalogEs: { [K in keyof typeof catalogEn]: { title: string; desc: string; detail: string } } =
  {
    primary: {
      title: 'Cuidado primario y preventivo',
      desc: 'Chequeos de rutina, exámenes preventivos y atención primaria continua en un entorno cómodo.',
      detail:
        'Construya una relación duradera con un médico que conoce su historial — exámenes anuales, vacunas y planes de detección proactivos.',
    },
    urgent: {
      title: 'Urgencias y procedimientos menores',
      desc: 'Atención el mismo o siguiente día para lesiones menores, enfermedades repentinas, puntos y esguinces.',
      detail:
        'Cuando algo no puede esperar una visita de rutina, tratamos esguinces, puntos, enfermedades repentinas y traumatismos menores con seguimiento claro.',
    },
    diagnostics: {
      title: 'Diagnóstico y laboratorio',
      desc: 'Análisis de laboratorio, pruebas de detección y apoyo diagnóstico cerca de su plan de cuidado.',
      detail:
        'Pruebas completas diseñadas según sus necesidades — resultados explicados en lenguaje sencillo y vinculados a un siguiente paso real.',
    },
    'body-composition': {
      title: 'Análisis de composición corporal',
      desc: 'Información detallada de composición corporal para guiar fitness, nutrición y bienestar.',
      detail:
        'Vaya más allá de la báscula. Entienda músculo, grasa y marcadores metabólicos que informan nutrición y entrenamiento.',
    },
    'wellness-exams': {
      title: 'Exámenes físicos y de bienestar',
      desc: 'Exámenes físicos y de bienestar adaptados a su edad, metas e historial de salud.',
      detail:
        'Exámenes sin prisa con espacio para preguntas — escuela, trabajo, viajes y visitas de bienestar según la edad.',
    },
    chronic: {
      title: 'Manejo de condiciones crónicas',
      desc: 'Cuidado continuo para hipertensión, diabetes, enfermedad tiroidea y otras condiciones a largo plazo.',
      detail:
        'Alianza constante para condiciones de por vida — revisión de medicamentos, planes de estilo de vida y atención coordinada con especialistas.',
    },
    'pediatric-geriatric': {
      title: 'Cuidado pediátrico y geriátrico',
      desc: 'Atención cuidadosa en cada etapa de la vida — de niños y adolescentes a adultos mayores.',
      detail:
        'Visitas centradas en la familia para niños en crecimiento y adultos mayores — con paciencia, claridad y respeto a cualquier edad.',
    },
    omt: {
      title: 'Tratamiento manipulativo osteopático',
      desc: 'OMT manual para aliviar dolor de espalda, migrañas y tensión muscular, apoyando la salud general.',
      detail:
        'Técnicas osteopáticas que mejoran la movilidad y alivian la tensión musculoesquelética — una especialidad distintiva de StarMed.',
    },
    'mental-wellness': {
      title: 'Bienestar mental',
      desc: 'Terapia personal y apoyo para ansiedad, estrés, duelo y bienestar emocional.',
      detail:
        'Apoyo gentil y personalizado para ansiedad, duelo y estrés — incluyendo planes de terapia adaptados a su vida.',
    },
    'weight-loss': {
      title: 'Control de peso',
      desc: 'Planes personalizados que combinan orientación médica, nutrición y hábitos sostenibles.',
      detail:
        'Orientación médica con nutrición y apoyo de hábitos — diseñados para un cambio duradero, no soluciones a corto plazo.',
    },
    ketamine: {
      title: 'Terapia de infusión de ketamina',
      desc: 'Terapia avanzada para depresión resistente al tratamiento, ansiedad y TEPT cuando el cuidado estándar no basta.',
      detail:
        'Cuando los tratamientos tradicionales no son suficientes, la terapia con ketamina puede ayudar a restaurar el equilibrio — con supervisión cuidadosa y centrada en el paciente.',
    },
    businesses: {
      title: 'Atención primaria directa para empresas',
      desc: 'Membresía DPC para empleadores — cuidado mensual predecible para equipos, sin intermediarios de seguros.',
      detail:
        'Un modelo de acceso laboral, no una especialidad clínica: visitas el mismo día, telemedicina y apoyo de bienestar que reducen costos y mantienen productivos a los empleados.',
    },
  }
