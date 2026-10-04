/** Bilingual clinical catalog — titles, short desc, detail for menus & grids */
export const catalogEn = {
  primary: {
    title: 'Primary & preventive care',
    desc: 'Routine checkups, preventive screenings, and ongoing primary care in a comfortable setting.',
    detail:
      'One doctor who knows your history. Yearly checkups, screenings, and vaccines.',
  },
  urgent: {
    title: 'Urgent & minor care',
    desc: 'Same-day or next-day attention for minor injuries, sudden illness, stitches, and sprains.',
    detail:
      'Same-day or next-day care for sudden illness, cuts, sprains, and small procedures.',
  },
  diagnostics: {
    title: 'Diagnostic & laboratory',
    desc: 'Lab work, screening tests, and diagnostic support kept close to your care plan.',
    detail:
      'Blood tests, scans, and heart and lung tests, with results explained in plain language.',
  },
  'body-composition': {
    title: 'Body composition analysis',
    desc: 'Detailed body composition insights to guide fitness, nutrition, and wellness planning.',
    detail:
      'A quick, painless scan that shows how much of your body is muscle, fat, bone, and water.',
  },
  'wellness-exams': {
    title: 'Physical & wellness exams',
    desc: 'Comprehensive physicals and wellness exams tailored to your age, goals, and health history.',
    detail:
      'Yearly physicals, plus exams for school, sports, work, and travel.',
  },
  chronic: {
    title: 'Chronic condition management',
    desc: 'Ongoing care for hypertension, diabetes, thyroid disease, and other long-term conditions.',
    detail:
      'Ongoing care for diabetes, high blood pressure, high cholesterol, and other long-term conditions.',
  },
  'pediatric-geriatric': {
    title: 'Pediatric & geriatric care',
    desc: 'Thoughtful care across life stages — from children and teens to older adults.',
    detail:
      'Checkups and everyday care for children, and support for older adults.',
  },
  omt: {
    title: 'Osteopathic manipulative treatment',
    desc: 'Hands-on OMT to ease back pain, migraines, and muscle tension while supporting overall health.',
    detail:
      'Hands-on treatment from a doctor to ease back pain, neck pain, headaches, and stiff joints.',
  },
  'mental-wellness': {
    title: 'Mental wellness',
    desc: 'Personal therapy and support for anxiety, stress, grief, and emotional wellbeing.',
    detail:
      'Therapy, medicine, and other treatments for anxiety, depression, stress, and more.',
  },
  'weight-loss': {
    title: 'Weight loss management',
    desc: 'Personalized plans that combine medical guidance, nutrition, and sustainable lifestyle support.',
    detail:
      'A doctor-guided plan to lose weight and keep it off, with medicine if it’s right for you.',
  },
  ketamine: {
    title: 'Ketamine infusion therapy',
    desc: 'Advanced therapy for treatment-resistant depression, anxiety, and PTSD when standard care falls short.',
    detail:
      'An IV treatment for depression, anxiety, PTSD, and chronic pain that hasn’t improved with other care.',
  },
  businesses: {
    title: 'Direct primary care for businesses',
    desc: 'Employer DPC membership — predictable monthly care for teams, without insurance middlemen.',
    detail:
      'A flat monthly membership that gives your employees quick access to a doctor, without insurance paperwork.',
  },
} as const

export const catalogEs: { [K in keyof typeof catalogEn]: { title: string; desc: string; detail: string } } =
  {
    primary: {
      title: 'Cuidado primario y preventivo',
      desc: 'Chequeos de rutina, exámenes preventivos y atención primaria continua en un entorno cómodo.',
      detail:
        'Un médico que conoce su historial. Chequeos anuales, exámenes de detección y vacunas.',
    },
    urgent: {
      title: 'Urgencias y procedimientos menores',
      desc: 'Atención el mismo o siguiente día para lesiones menores, enfermedades repentinas, puntos y esguinces.',
      detail:
        'Atención el mismo día o al siguiente para enfermedades repentinas, cortes, esguinces y procedimientos menores.',
    },
    diagnostics: {
      title: 'Diagnóstico y laboratorio',
      desc: 'Análisis de laboratorio, pruebas de detección y apoyo diagnóstico cerca de su plan de cuidado.',
      detail:
        'Análisis de sangre, estudios de imagen y pruebas del corazón y los pulmones, con resultados explicados en lenguaje sencillo.',
    },
    'body-composition': {
      title: 'Análisis de composición corporal',
      desc: 'Información detallada de composición corporal para guiar fitness, nutrición y bienestar.',
      detail:
        'Un escaneo rápido y sin dolor que muestra cuánto de su cuerpo es músculo, grasa, hueso y agua.',
    },
    'wellness-exams': {
      title: 'Exámenes físicos y de bienestar',
      desc: 'Exámenes físicos y de bienestar adaptados a su edad, metas e historial de salud.',
      detail:
        'Exámenes físicos anuales y exámenes para la escuela, deportes, trabajo y viajes.',
    },
    chronic: {
      title: 'Manejo de condiciones crónicas',
      desc: 'Cuidado continuo para hipertensión, diabetes, enfermedad tiroidea y otras condiciones a largo plazo.',
      detail:
        'Atención continua para la diabetes, la presión alta, el colesterol alto y otras condiciones a largo plazo.',
    },
    'pediatric-geriatric': {
      title: 'Cuidado pediátrico y geriátrico',
      desc: 'Atención cuidadosa en cada etapa de la vida — de niños y adolescentes a adultos mayores.',
      detail:
        'Chequeos y atención diaria para niños, y apoyo para adultos mayores.',
    },
    omt: {
      title: 'Tratamiento manipulativo osteopático',
      desc: 'OMT manual para aliviar dolor de espalda, migrañas y tensión muscular, apoyando la salud general.',
      detail:
        'Tratamiento manual de un médico para aliviar el dolor de espalda y cuello, los dolores de cabeza y la rigidez en las articulaciones.',
    },
    'mental-wellness': {
      title: 'Bienestar mental',
      desc: 'Terapia personal y apoyo para ansiedad, estrés, duelo y bienestar emocional.',
      detail:
        'Terapia, medicamentos y otros tratamientos para la ansiedad, la depresión, el estrés y más.',
    },
    'weight-loss': {
      title: 'Control de peso',
      desc: 'Planes personalizados que combinan orientación médica, nutrición y hábitos sostenibles.',
      detail:
        'Un plan guiado por su médico para bajar de peso y mantenerlo, con medicamentos si son adecuados para usted.',
    },
    ketamine: {
      title: 'Terapia de infusión de ketamina',
      desc: 'Terapia avanzada para depresión resistente al tratamiento, ansiedad y TEPT cuando el cuidado estándar no basta.',
      detail:
        'Un tratamiento intravenoso para la depresión, la ansiedad, el TEPT y el dolor crónico que no han mejorado con otros tratamientos.',
    },
    businesses: {
      title: 'Atención primaria directa para empresas',
      desc: 'Membresía DPC para empleadores — cuidado mensual predecible para equipos, sin intermediarios de seguros.',
      detail:
        'Una membresía mensual fija que da a sus empleados acceso rápido a un médico, sin trámites de seguros.',
    },
  }
