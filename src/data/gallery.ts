export type GalleryCategory = 'Childhood' | 'Education' | 'University' | 'Achievements' | 'Work' | 'Memories'

export type GalleryPhoto = {
  id: number
  image: string
  title: string
  category: GalleryCategory
  year: string
  description: string
  featured: boolean
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    image: '/images/gallery/childhood/placeholder-01.svg',
    title: 'A Childhood Memory',
    category: 'Childhood',
    year: 'Year to add',
    description: 'A warm memory from my early years, full of play, curiosity, and family time.',
    featured: true,
  },
  {
    id: 2,
    image: '/images/gallery/school/placeholder-02.svg',
    title: 'School Days',
    category: 'Education',
    year: 'Year to add',
    description: 'Learning the basics, building friendships, and discovering how much I enjoy growing through effort.',
    featured: true,
  },
  {
    id: 3,
    image: '/images/gallery/university/placeholder-03.svg',
    title: 'University Journey',
    category: 'University',
    year: 'Year to add',
    description: 'A meaningful chapter of learning, independence, and preparing for the future.',
    featured: true,
  },
  {
    id: 4,
    image: '/images/gallery/achievements/placeholder-04.svg',
    title: 'Achievement Moment',
    category: 'Achievements',
    year: 'Year to add',
    description: 'A milestone that reminded me that perseverance and focus can create real progress.',
    featured: true,
  },
  {
    id: 5,
    image: '/images/gallery/work/placeholder-05.svg',
    title: 'First Professional Experience',
    category: 'Work',
    year: 'Year to add',
    description: 'The beginning of applying my learning in a professional setting and improving through practice.',
    featured: true,
  },
  {
    id: 6,
    image: '/images/gallery/memories/placeholder-06.svg',
    title: 'A Personal Milestone',
    category: 'Memories',
    year: 'Year to add',
    description: 'A moment of reflection and gratitude that shaped my perspective on growth and opportunity.',
    featured: false,
  },
  {
    id: 7,
    image: '/images/gallery/childhood/placeholder-01.svg',
    title: 'Family and Growth',
    category: 'Childhood',
    year: 'Year to add',
    description: 'A simple but meaningful memory from a time when life felt full of discovery.',
    featured: false,
  },
  {
    id: 8,
    image: '/images/gallery/university/placeholder-03.svg',
    title: 'Learning with Purpose',
    category: 'University',
    year: 'Year to add',
    description: 'A reminder that learning is not only about results but also about understanding the journey.',
    featured: false,
  },
]
