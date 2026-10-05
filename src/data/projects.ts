export type PortfolioProject = {
  id: number
  name: string
  category: string
  description: string
  technologies: string[]
  contribution: string
  projectLink?: string
  githubLink?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    name: 'Bug Tracking Dashboard',
    category: 'QA Workflow Tool',
    description: 'A clean issue tracking interface built to organize defects, priorities, and release validation tasks.',
    technologies: ['React', 'TypeScript', 'CSS', 'Testing'],
    contribution: 'Designed the UI structure, action flows, and bug lifecycle views with a QA-first user experience.',
  },
  {
    id: 2,
    name: 'Student Portfolio Hub',
    category: 'Personal Website',
    description: 'A modern portfolio concept focused on clarity, readability, and professional storytelling for software work.',
    technologies: ['React', 'Vite', 'UI Design', 'Accessibility'],
    contribution: 'Built the architecture, visual hierarchy, navigation, and responsive sections to improve recruiter scanning.',
  },
  {
    id: 3,
    name: 'Web App Test Case Suite',
    category: 'Quality Assurance',
    description: 'A structured testing initiative covering UI checks, regression paths, and validation scenarios for a web product.',
    technologies: ['Manual QA', 'Regression', 'Bug Reporting', 'Documentation'],
    contribution: 'Created test scenarios, tracked issues, and verified release readiness through repeatable QA process.',
  },
  {
    id: 4,
    name: 'Bijou Serviced Residence Management System',
    category: 'Property Management System · User Documentation',
    description: 'A user guide for a serviced-residence platform covering daily bookings, long-term leases, contracts, invoicing, payments, deposits, housekeeping, reporting, security, and configuration.',
    technologies: ['User Documentation', 'Operational Workflows', 'Property Management'],
    contribution: 'Authored and structured the user guide to help residence staff navigate key workflows, including room and customer master data, booking operations, financial records, housekeeping, and reports.',
  },
]
