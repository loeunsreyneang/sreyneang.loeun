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
    title: 'Scholarship Achievement',
    year: 'Year to add',
    organization: 'Education Support Program',
    category: 'Scholarship',
    description: 'Recognized for academic effort and commitment to continued growth in a focused learning pathway.',
    image: '/images/gallery/achievements/placeholder-04.svg',
    featured: true,
    link: '#',
  },
  {
    id: 2,
    title: 'Academic Excellence',
    year: 'Year to add',
    organization: 'School Community',
    category: 'Academic',
    description: 'Reached an important academic milestone through dedication, discipline, and steady effort.',
    image: '/images/gallery/achievements/placeholder-04.svg',
    featured: true,
  },
  {
    id: 3,
    title: 'Volunteer Leadership',
    year: 'Year to add',
    organization: 'Community Service Group',
    category: 'Volunteer',
    description: 'Supported shared initiatives and helped create a more engaging and people-focused environment.',
    image: '/images/gallery/memories/placeholder-06.svg',
    featured: false,
  },
  {
    id: 4,
    title: 'Training Completion',
    year: 'Year to add',
    organization: 'Professional Learning Path',
    category: 'Training',
    description: 'Completed structured learning focused on software quality, technical skills, and practical growth.',
    image: '/images/gallery/work/placeholder-05.svg',
    featured: false,
  },
]
