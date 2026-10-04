/** StarMed contact details — single source for homepage contact blocks. */
export const clinic = {
  phoneDisplay: '(726) 242-3011',
  phoneHref: 'tel:7262423011',
  smsHref: 'sms:7262423011',
  email: 'info@starmed.clinic',
  locations: [
    {
      name: 'Suite 202',
      lines: ['24165 W Interstate 10 Frontage Rd Suite 202', 'San Antonio, TX 78257'],
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=24165+W+Interstate+10+Frontage+Rd+Suite+202,+San+Antonio,+TX+78257',
      mapEmbedUrl:
        'https://maps.google.com/maps?q=24165+W+Interstate+10+Frontage+Rd+Suite+202,+San+Antonio,+TX+78257&z=15&output=embed',
    },
    {
      name: 'Suite 1206',
      lines: ['22211 I-10 Suite 1206', 'San Antonio, TX 78257'],
      mapsUrl:
        'https://www.google.com/maps/search/?api=1&query=22211+I-10+Suite+1206,+San+Antonio,+TX+78257',
      mapEmbedUrl:
        'https://maps.google.com/maps?q=22211+I-10+Suite+1206,+San+Antonio,+TX+78257&z=15&output=embed',
    },
  ],
} as const
