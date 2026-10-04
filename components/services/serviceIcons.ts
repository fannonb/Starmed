import {
  Bandage,
  Brain,
  BriefcaseMedical,
  ClipboardCheck,
  HandHeart,
  HeartPulse,
  PersonStanding,
  Scale,
  Stethoscope,
  Syringe,
  TestTubes,
  Users,
  type LucideIcon,
} from 'lucide-react'

/**
 * Service icons in display order — everyday care first, then diagnostics, specialty, and employers.
 * Shared by the homepage service grid and the header's Services menu.
 */
export const serviceIcons: [id: string, icon: LucideIcon][] = [
  ['primary', Stethoscope],
  ['urgent', Bandage],
  ['wellness-exams', ClipboardCheck],
  ['chronic', HeartPulse],
  ['pediatric-geriatric', Users],
  ['diagnostics', TestTubes],
  ['body-composition', PersonStanding],
  ['weight-loss', Scale],
  ['mental-wellness', Brain],
  ['ketamine', Syringe],
  ['omt', HandHeart],
  ['businesses', BriefcaseMedical],
]
