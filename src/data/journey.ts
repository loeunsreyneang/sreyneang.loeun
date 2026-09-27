
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
  {
    id: 1,
    year: '2017 - 2019',
    title: 'Samdach Ov Mae Kravanh',
    description:
      'Studied at secondary school from Grade 7 to Grade 9 and completed the Lower Secondary Diploma Examination.'
  },
  {
    id: 2,
    year: '2020 - 2023',
    title: 'Hun Sen Phnom Kravanh High School',
    description:
      'Studied from Grade 10 to Grade 12 and completed the Cambodia Grade 12 National Examination (Bac II).'
  },
  {
    id: 5,
    year: '2023 - 2025',
    title: 'Passerelles Numériques Cambodia (PNC)',
    description:
      'Studied Web Development and completed an Associate Degree, gaining knowledge in programming, web technologies, databases, software development, and IT fundamentals.'
  },
  {
    id: 8,
    year: '2025',
    title: 'Web Development Internship',
    description:
      'Completed a Web Development internship where I worked mainly with WordPress, gaining my first experience in a professional IT environment and learning how to work with real projects and teams.'
  },
  {
    id: 6,
    year: '2025 - Present',
    title: 'Beltie International University',
    description:
      'Studying Software Engineering to strengthen my knowledge of programming, software development, system analysis and design, databases, and software engineering concepts.'
  },
  {
    id: 9,
    year: '2025 - Present',
    title: 'QA Tester',
    description:
      'Started my first professional job as a QA Tester, gaining practical experience in manual testing, writing test cases and test documents, reporting issues, and understanding real software workflows.'
  },
  {
    id: 11,
    year: 'Future',
    title: 'Future Goals',
    description:
      'Willing to continue learning new technologies and developing knowledge in both IT and management, while gaining professional experience and exploring new opportunities.'
  },
]

