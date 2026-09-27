export type JourneyItem = {
  id: number
  year: string
  title: string
  description: string
  image?: string
  achievement?: string
  link?: string
}

export const journeyItems: JourneyItem[] = [
  { id: 1, year: '2017 - 2019', title: 'Samdach Ov Mae Kravanh', description: 'The early memories, people, and experiences that shaped my curiosity.' },

  { id: 2, year: '2019 - 2023', title: 'Hun Sen Phnom Kravanh High School', description: 'Learning discipline, building confidence, and discovering the value of steady effort.' },

  { id: 5, year: '2023 - 2025', title: 'PNC', description: 'A new learning environment and an important step in my education and technology journey.' },

  { id: 6, year: '2024- Present', title: 'University Projects', description: 'Turning concepts into practical work and learning through making.' },

  { id: 7, year: '2024 - Present', title: 'Training & Workshops', description: 'Building confidence through focused learning beyond the classroom.' },

  { id: 8, year: '2025', title: 'Internship', description: 'Learning how professional teams collaborate, communicate, and deliver.' },

  { id: 9, year: '2025 - Present', title: 'QA Tester', description: 'Applying a careful testing mindset to real product experiences.' },

  { id: 10, year: '2025 - Present', title: 'Software Engineering', description: 'Growing technical foundations and building reliable, useful software.' },

  { id: 11, year: 'Future', title: 'Future Goals', description: 'Continuing to learn and contributing to products people can trust.' },
]