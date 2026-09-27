export type Certificate = {
  id: number
  title: string
  organization: string
  date: string
  category: 'QA & Testing' | 'Programming' | 'Web Development' | 'English' | 'IT Training' | 'Academic' | 'Workshop' | 'UX/UI' | 'Project Management' | 'Other'
  image: string
  pdf: string
  description: string
  featured: boolean
  verificationUrl?: string
}

export const certificateItems: Certificate[] = [
  {
    id: 1,
    title: 'Software Testing Certificate',
    organization: 'Quality Learning Center',
    date: 'Date to add',
    category: 'QA & Testing',
    image: '/images/certificates/certificate-01.svg',
    pdf: '/certificates/qa-testing.pdf',
    description: 'A practical certificate focused on software testing discipline, validation workflows, and issue tracking.',
    featured: true,
  },
  {
    id: 2,
    title: 'Web Development Fundamentals',
    organization: 'Digital Skills Program',
    date: 'Date to add',
    category: 'Web Development',
    image: '/images/certificates/certificate-01.svg',
    pdf: '/certificates/web-dev.pdf',
    description: 'A certificate covering front-end foundations, responsive design, and accessible digital interfaces.',
    featured: true,
  },
  {
    id: 3,
    title: 'Professional Training Completion',
    organization: 'Career Skills Academy',
    date: 'Date to add',
    category: 'IT Training',
    image: '/images/certificates/certificate-01.svg',
    pdf: '',
    description: 'A learning milestone reflecting continued growth in technical confidence and professional readiness.',
    featured: false,
  },
]
