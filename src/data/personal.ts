export type PersonalCard = {
  title: string
  description: string
  icon: string
}

export const interests: PersonalCard[] = [
  { title: 'Reading', description: 'Making space for new ideas and perspectives.', icon: 'Book' },
  { title: 'Learning', description: 'Exploring tools and concepts that keep me curious.', icon: 'Spark' },
  { title: 'Volunteering', description: 'Supporting people and projects that create positive change.', icon: 'Heart' },
  { title: 'Photography', description: 'Keeping meaningful moments and small details in view.', icon: 'Frame' },
]

export const growthAreas = ['QA Testing', 'Selenium', 'Appium', 'SQL', 'Software Engineering', 'English', 'Communication', 'Problem Solving']

export const workshops = [
  { title: 'UX/UI Design', facilitator: 'Add facilitator', organization: 'Add organization', date: 'Date to add', description: 'A workshop or training experience to document here.' },
  { title: 'Professional Development', facilitator: 'Add facilitator', organization: 'Add organization', date: 'Date to add', description: 'Add a short description when this learning experience is ready to share.' },
]
