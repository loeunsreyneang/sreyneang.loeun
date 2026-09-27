
export type Achievement = {
  id: number
  title: string
  year: string
  organization: string
  category: 'Scholarship' | 'Academic' | 'Volunteer' | 'Leadership' | 'Training' | 'Career' | 'Other'
  description: string
  image: string
  featured: boolean
  link?: string
}

export const achievementItems: Achievement[] = [
  {
    id: 1,
    title: 'Lower Secondary Diploma',
    year: '2019',
    organization: 'Samdach Ov Mae Kravanh',
    category: 'Academic',
    description:
      'Completed Grade 9 and received a good result in the Lower Secondary Diploma Examination.',
    image: '/images/gallery/achievements/grade9-diploma.jpg',
    featured: true,
  },

  {
    id: 2,
    title: 'Grade 12 National Examination',
    year: '2023',
    organization: 'Hun Sen Phnom Kravanh High School',
    category: 'Academic',
    description:
      'Completed Grade 12 and received Grade B in the Cambodia Grade 12 National Examination (Bac II).',
    image: '/images/gallery/achievements/bacll.jpg',
    featured: true,
  },

  {
    id: 3,
    title: 'Associate Degree Transcript',
    year: '2023 - 2025',
    organization: 'Passerelles Numériques Cambodia (PNC)',
    category: 'Academic',
    description:
      'Completed an Associate Degree in Web Development at PNC, with academic coursework covering programming, web development, databases, and IT fundamentals.',
    image: '/images/gallery/achievements/PNCTranscript.jpg',
    featured: true,
  },

  {
    id: 4,
    title: 'Computer Training Certificate',
    year: '2017',
    organization: 'Training Organization (KBFC)',
    category: 'Training',
    description:
      'Completed computer training and developed foundational knowledge and practical skills in using computer technologies.',
    image: '/images/gallery/achievements/computer-training.jpg',
    featured: false,
  },

  {
    id: 5,
    title: 'Youth Resource Development Program',
    year: '2024',
    organization: 'Program Organization',
    category: 'Volunteer',
    description:
      'Received a certificate for participating in a youth resource development program focused on learning, participation, and community development.',
    image: '/images/gallery/achievements/youth-resource-development.jpg',
    featured: true,
  },

  {
    id: 6,
    title: 'Youth Club Volunteer Certificate',
    year: '2019 - 2023',
    organization: 'Youth Club (KBFC)',
    category: 'Volunteer',
    description:
      'Received a certificate recognizing my participation and contribution as a volunteer in a youth club.',
    image: '/images/gallery/achievements/youth-club-volunteer.jpg',
    featured: true,
  },

  {
    id: 7,
    title: 'Drawing Competition – 3rd Place',
    year: '2025',
    organization: 'Drawing Competition (PNC)',
    category: 'Volunteer',
    description:
      'Won 3rd place in a drawing competition, recognizing creativity and artistic ability.',
    image: '/images/gallery/achievements/drawing-competition.jpg',
    featured: true,
  },
]
