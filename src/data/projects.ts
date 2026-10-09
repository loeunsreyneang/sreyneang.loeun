export type ProjectModuleIcon =
  | 'user'
  | 'database'
  | 'calendar'
  | 'document'
  | 'payment'
  | 'wallet'
  | 'cleaning'
  | 'report'
  | 'security'
  | 'settings'
  | 'login'
  | 'dashboard'
  | 'mobile'
  | 'brain'
  | 'chat'
  | 'assistant'
  | 'bell'
  | 'clipboard'
  | 'medical-record'
  | 'queue'
  | 'phone'
  | 'workflow'
  | 'kiosk'
  | 'hospital'
  | 'building'
  | 'doctor'
  | 'specialty'
  | 'approval'
  | 'service'
  | 'medicine'
  | 'lab'
  | 'result'
  | 'lab-building'
  | 'pharmacy'
  | 'box'
  | 'procurement'
  | 'insurance'
  | 'withdrawal'

export type ProjectModule = {
  name: string
  icon: ProjectModuleIcon
}

export type PortfolioProject = {
  id: number
  name: string
  category: string
  description: string
  technologies: string[]
  contribution: string
  image?: string
  qaFocus?: string[]
  modules?: ProjectModule[]
  projectLink?: string
  githubLink?: string
}

export const updatedPortfolioProjects: PortfolioProject[] = [
  { id: 1, name: 'Hospital Management System', category: 'Web System', description: 'A structured healthcare system concept for organizing hospital workflows, patient information, doctors, services, and operational records.', technologies: ['Web System', 'Database', 'QA Testing'], contribution: 'Focused on clear workflows, readable documentation, and dependable user flows.', image: '/images/projects/hospital-qa-flow.png', qaFocus: ['Login and role-based access', 'Patient registration and validation', 'Doctor and department setup', 'Appointment booking and rescheduling', 'Patient record search and updates', 'Queue and visit workflow', 'Billing and payment checks', 'Positive and negative scenarios', 'Boundary and required-field validation', 'Regression testing after changes', 'Responsive UI across devices', 'Bug reporting with clear evidence'] },
  { id: 2, name: 'Property Renting System', category: 'Management System', description: 'A property rental system concept for managing listings, tenants, leases, payments, and property information.', technologies: ['Property Management', 'Rental Workflow', 'QA Testing'], contribution: 'Organized the core rental workflow and supported practical system documentation.', image: '/images/projects/property-retail-dashboard.png' },
  { id: 3, name: 'Gym System', category: 'Management System', description: 'A gym management system concept for members, subscriptions, schedules, trainers, and daily operations.', technologies: ['Member Management', 'Schedules', 'QA Testing'], contribution: 'Helped shape simple, user-friendly management flows.', image: '/images/projects/property-retail-dashboard.png' },
  { id: 4, name: 'POS System', category: 'Point of Sale', description: 'A point-of-sale system concept for products, customers, transactions, receipts, and sales tracking.', technologies: ['Point of Sale', 'Transactions', 'Validation'], contribution: 'Worked with transaction flows, data validation, and usability-focused screens.', image: '/images/projects/property-retail-dashboard.png' },
  { id: 5, name: 'E-commerce System', category: 'Online Store', description: 'An online shopping system concept with product browsing, cart workflows, customer accounts, and order management.', technologies: ['Online Store', 'Order Flow', 'UI Testing'], contribution: 'Focused on clear product discovery and reliable checkout flows.', image: '/images/projects/commerce-travel-school.png' },
  { id: 6, name: 'POS Sell and Stock Management', category: 'Retail Operations', description: 'A retail workflow concept connecting point-of-sale transactions with inventory, stock updates, and sales reporting.', technologies: ['Sales Workflow', 'Stock Management', 'Reporting'], contribution: 'Mapped sales and stock workflows for easier daily operations.', image: '/images/projects/property-retail-dashboard.png' },
  { id: 7, name: 'Sell Product Online with Delivery', category: 'E-commerce', description: 'An online product-selling concept with delivery coordination, order status, customer communication, and fulfillment steps.', technologies: ['Online Selling', 'Delivery Flow', 'Edge Cases'], contribution: 'Considered end-to-end ordering, delivery, and edge-case scenarios.', image: '/images/projects/commerce-travel-school.png' },
  { id: 8, name: 'Travelling Website and System', category: 'Travel Platform', description: 'A travel website and system concept for destinations, bookings, itineraries, and travel information.', technologies: ['Travel Website', 'Booking Flow', 'Responsive UI'], contribution: 'Focused on clear information architecture and easy navigation.', image: '/images/projects/commerce-travel-school.png' },
  { id: 9, name: 'School Management System', category: 'Education System', description: 'A school management system concept for students, teachers, classes, schedules, attendance, and academic records.', technologies: ['School Workflow', 'Records', 'Documentation'], contribution: 'Structured role-based workflows and readable system information.', image: '/images/projects/commerce-travel-school.png' },
  { id: 10, name: 'Sell Skincare System and Website', category: 'Online Store', description: 'A skincare e-commerce concept for product discovery, customer orders, stock visibility, and online selling.', technologies: ['Skincare Store', 'Product Flow', 'UI Testing'], contribution: 'Focused on approachable product presentation and a simple buying journey.', image: '/images/projects/commerce-travel-school.png' },
  { id: 11, name: 'Patient and Doctor Mobile App Testing', category: 'Mobile App Testing · iOS & Android', description: 'Mobile application testing for patient and doctor workflows across iOS and Android devices.', technologies: ['Mobile Testing', 'User Flows', 'Regression'], contribution: 'Covered user flows, UI behavior, validation, and device-focused test scenarios.', image: '/images/projects/mobile-qa-testing.png', qaFocus: ['Patient login and registration', 'Doctor login and availability', 'Appointment booking flow', 'Notifications and reminders', 'Form validation and error states', 'iOS and Android layout checks', 'Network interruption behavior', 'Regression testing'] },
  { id: 12, name: 'Gym Mobile App Testing', category: 'Mobile App Testing · iOS & Android', description: 'Mobile application testing for gym member and fitness workflow experiences across iOS and Android.', technologies: ['Mobile Testing', 'Bug Reporting', 'Regression'], contribution: 'Focused on functional checks, usability observations, and regression coverage.', image: '/images/projects/mobile-qa-testing.png', qaFocus: ['Member login and onboarding', 'Workout and schedule flows', 'Subscription and class booking', 'Input and validation checks', 'Device and orientation checks', 'Regression testing', 'Bug evidence and retesting'] },
]

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
    category: 'Property Management · User Documentation',
    description: 'A user guide for a serviced-residence management platform covering bookings, term leases, contracts, invoicing, payments, deposits, housekeeping, and operational reports.',
    technologies: ['User Documentation', 'Operational Workflows', 'Property Management'],
    contribution: 'Authored and organized guidance for the system’s key workflows, including profile and master data management, reception bookings, financial operations, housekeeping, reporting, and configuration.',
    modules: [
      { name: 'Login & Profile', icon: 'user' },
      { name: 'Master Data', icon: 'database' },
      { name: 'Bookings', icon: 'calendar' },
      { name: 'Term Lease & Contracts', icon: 'document' },
      { name: 'Invoices & Payments', icon: 'payment' },
      { name: 'Deposits, Refunds & Withdrawals', icon: 'wallet' },
      { name: 'Housekeeping', icon: 'cleaning' },
      { name: 'Reports', icon: 'report' },
      { name: 'Security & Audit Log', icon: 'security' },
      { name: 'Configuration', icon: 'settings' },
    ],
  },
  {
    id: 5,
    name: 'Niron Care',
    category: 'Healthcare · User Documentation',
    description: 'A user manual redesign for a healthcare platform, planned around task-based workflows, a concise quick start, and module references supported by visible, correctly matched screenshots.',
    technologies: ['User Documentation', 'Workflow Design', 'Information Architecture'],
    contribution: 'Defined a user-first documentation structure that helps users understand the goal, starting point, steps, inputs, and expected outcome for common tasks.',
    modules: [
      { name: 'Authentication', icon: 'login' },
      { name: 'Dashboard', icon: 'dashboard' },
      { name: 'Reports', icon: 'report' },
      { name: 'Access Control', icon: 'security' },
      { name: 'System Settings', icon: 'settings' },
      { name: 'Mobile App Management', icon: 'mobile' },
      { name: 'Configuration', icon: 'settings' },
      { name: 'My Appointments', icon: 'calendar' },
      { name: 'AI / Triage', icon: 'brain' },
      { name: 'Patients', icon: 'user' },
      { name: 'Conversations', icon: 'chat' },
      { name: 'AI Assistant', icon: 'assistant' },
      { name: 'Notifications', icon: 'bell' },
      { name: 'OPD Registration', icon: 'clipboard' },
      { name: 'Patient Visit', icon: 'medical-record' },
      { name: 'Queue Management', icon: 'queue' },
      { name: 'Call Center', icon: 'phone' },
      { name: 'Queue Workflow', icon: 'workflow' },
      { name: 'Kiosks', icon: 'kiosk' },
      { name: 'Hospitals', icon: 'hospital' },
      { name: 'Departments', icon: 'building' },
      { name: 'Doctors', icon: 'doctor' },
      { name: 'Doctor Specialties', icon: 'specialty' },
      { name: 'Doctor Requests', icon: 'approval' },
      { name: 'Services', icon: 'service' },
      { name: 'Medicines', icon: 'medicine' },
      { name: 'Medical Tests & Procedures', icon: 'lab' },
      { name: 'Lab Results', icon: 'result' },
      { name: 'Referral Lab', icon: 'lab-building' },
      { name: 'Pharmacy Management', icon: 'pharmacy' },
      { name: 'Product Catalog', icon: 'box' },
      { name: 'Procurement', icon: 'procurement' },
      { name: 'Invoices', icon: 'document' },
      { name: 'Payment Methods', icon: 'payment' },
      { name: 'Insurance Providers', icon: 'insurance' },
      { name: 'Withdrawals', icon: 'withdrawal' },
    ],
  },
]
