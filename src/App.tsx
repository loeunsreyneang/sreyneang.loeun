import { useCallback, useEffect, useMemo, useState } from 'react'
import { achievementItems } from './data/achievements'
import { certificateItems } from './data/certificates'
import { galleryPhotos } from './data/gallery'
import { journeyItems } from './data/journey'
import { interests } from './data/personal'
import { updatedPortfolioProjects, type ProjectModuleIcon } from './data/projects'


const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Journey', href: '#journey' },
  // { label: 'Certificates', href: '#certificates' },
  // { label: 'Beyond CV', href: '#beyond-cv' },
  { label: 'Contact', href: '#contact' },
]

const technicalSkillGroups = [
  { title: 'Web Development', icon: '⌘', items: ['HTML', 'CSS', 'Bootstrap 5', 'JavaScript', 'Vue.js', 'React.js', 'PHP', 'Laravel', 'Node.js · Basic REST API', 'WordPress'] },
  { title: 'Programming & Database', icon: '◇', items: ['OOP with TypeScript', 'Java', 'C#', 'MySQL', 'Oracle Database', 'Firebase'] },
  { title: 'Tools, Design & Deployment', icon: '↗', items: ['Git', 'GitHub', 'Jira', 'AWS', 'Vercel', 'Netlify', 'Canva', 'Figma', 'Draw.io', 'Postman', 'Microsoft Office'] },
  { title: 'Data Analytics', icon: '▥', items: ['Power BI', 'Data Analysis'] },
]

const qaSkillGroups = [
  { title: 'Beginner', status: 'Current skills', tone: 'current', items: ['Manual Testing (UI & Logical)', 'Test Case Writing & Execution', 'Test Plan Writing (Google Docs, Excel)', 'Test Scenario Design (Google Sheets)', 'Positive & Negative Testing', 'Boundary Value & Edge Case Testing', 'Bug Reporting & Tracking', 'Regression Testing', 'Exploratory Testing', 'User Manuals & Guides (Docusaurus)', 'Jira', 'Git Basics'] },
  { title: 'Intermediate', status: 'Currently learning', tone: 'learning', items: ['SQL & Database Testing', 'API Testing with Postman', 'HTTP Methods & Status Codes', 'API Authentication & Authorization', 'Java for QA Automation', 'Selenium WebDriver', 'Automated Test Execution', 'Assertions & Test Frameworks', 'Mobile Application Testing', 'Appium Automation Testing'] },
]

const softSkills = ['Teamwork', 'Leadership', 'Adaptability', 'Collaboration', 'High Motivation', 'Communication', 'Problem-Solving', 'High Commitment', 'Time Management']

const experience = [
  { role: 'QA Tester', company: 'Software Company', period: '2025 — Present', description: 'Testing feature quality, regression stability, and user flows across web products.', responsibilities: ['Validate releases and report actionable bugs', 'Execute test cases across functional and UI scenarios', 'Collaborate with developers to confirm fixes and verify outcomes'] },
  { role: 'Software Engineering Student', company: 'Beltie International Univresity', period: '2026 — Present', description: 'Building practical software tools while strengthening engineering fundamentals and quality practices.', responsibilities: ['Develop front-end features with reusable, accessible interfaces', 'Apply QA thinking to design, testing, and iteration', 'Work across UI, logic, and validation in project-based learning'] },
  { role: 'Learning & Practice', company: 'Self-directed Development', period: '2024 — present', description: 'Improving engineering and testing skills through structured practice and project work.', responsibilities: ['Explore automation, APIs, and test coverage', 'Review test results and improve process quality', 'Document bugs, workflows, and system behavior clearly'] },
  { role: 'Public Speaking Workshop', company: 'Facilitator: Felix Leuker (Senior Digital Project Manager)', period: '2024 — present', description: 'Understand key roles like Product Owner, Scrum Master, andDevelopment Team. Learn how these roles collaborate using tools like Jira,Git, and GitHub and explore essential concepts such as user stories andagile workflows', responsibilities:[] },
  { role: 'Engaged in clubs, events, courses, and volunteers', company: '', period: '2026 — Present', description: 'Building practical software tools while strengthening engineering fundamentals and quality practices.', responsibilities: ['Photography , Web , and Yoga Club at PNC School', 'Completed a UX/UI short course at Future Bit School','Club member of KYC [Kravanh Youth Club] (Social worker)' ,'Attended sessions on Leadership and Personal Development'] },
  { role: 'UX/UI Design Workshops', company: 'Facilitator: Philip James BARDON (UX/UI Designer, Sourcemax Asia Co.,Ltd)', period: 'February 07 & March 14, 2025', description: 'Testing feature quality, regression stability, and user flows across web products.', responsibilities: ['Apply design logic with hands-on experience in a mini project.', 'Translate project requirements into prototypes, mockups, or wireframes.'] },


]

const education = [
  { title: 'Associate Degree — IT / Web Development', meta: '2023 — 2025 · Passerelles Numériques Cambodia (PNC)', description: 'Studied Web Development and completed an Associate Degree, building a foundation across programming, web technologies, databases, software development, and IT fundamentals.', courses: ['Web Design', 'Front-End Development with Vue.js', 'Object-Oriented Programming with TypeScript', 'Database', 'Virtual Company 1 — POS System Project', 'Node.js', 'English', 'Professional Life', 'UI Design', 'Basic Computer Solving', 'Logic and Problem-Solving', 'Data Analysis', 'Back-End Development with Laravel', 'Virtual Company 2 — Farmer System and Website'], technologies: ['PHP', 'Laravel', 'Vue.js', 'JavaScript', 'TypeScript', 'MySQL', 'Node.js', 'React.js'] },
  { title: "Bachelor's Degree — Software Engineering", meta: '2025 — Present · Beltie International University', description: 'Studying Software Engineering to strengthen programming, software development, system analysis and design, databases, and software engineering concepts.', courses: ['Java Programming I and II', 'C# and Object-Oriented Programming I and II', 'Mobile Application Development', 'UX/UI Design', 'Oracle Database I and II', 'E-commerce', 'Design and Data Analysis'], technologies: ['Java', 'Spring Boot', 'C#', 'Flutter', 'Oracle Database', 'Object-Oriented Programming'] },
]

const contactLinks = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { label: 'Email', href: 'mailto:loeunsreyneang8@gmail.com' },
]

const filterOptions = ['All', 'Childhood', 'Education', 'University', 'Achievements', 'Work', 'Memories'] as const

type FilterOption = (typeof filterOptions)[number]

function SocialIcon({ label }: { label: string }) {
  if (label === 'GitHub') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.49 0-.24-.01-1.04-.02-1.89-2.78.62-3.37-1.38-3.37-1.38-.46-1.2-1.12-1.52-1.12-1.52-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.38 1.12 2.96.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.77 1.06A9.42 9.42 0 0 1 12 6.8c.86 0 1.73.12 2.54.35 1.91-1.34 2.76-1.06 2.76-1.06.55 1.42.2 2.47.1 2.73.64.71 1.02 1.63 1.02 2.75 0 3.95-2.35 4.81-4.58 5.07.36.32.68.96.68 1.94 0 1.4-.01 2.53-.01 2.87 0 .27.18.59.69.49A10.26 10.26 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" fill="currentColor" /></svg>
  }
  if (label === 'LinkedIn') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.92 5.36a1.56 1.56 0 0 1 .02 3.14ZM5.5 9.8h2.83v8.7H5.5V9.8Zm4.65 0h2.71v1.18h.04c.38-.72 1.31-1.48 2.69-1.48 2.87 0 3.4 1.89 3.4 4.35v4.65h-2.83v-4.34c0-1.03-.02-2.36-1.44-2.36-1.44 0-1.66 1.13-1.66 2.29v4.41h-2.83V9.8Z" fill="currentColor" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Zm2.25-.5 6.75 5.2 6.75-5.2H6.25Zm13.25 2.16-6.22 4.8a1 1 0 0 1-1.26 0L4.5 9.16v7.34c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5V9.16Z" fill="currentColor" /></svg>
}

function ProjectModuleIconView({ icon }: { icon: ProjectModuleIcon }) {
  const paths: Record<ProjectModuleIcon, string> = {
    user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-8 9a8 8 0 0 1 16 0',
    database: 'M4 5c0-1.1 3.58-2 8-2s8 .9 8 2-3.58 2-8 2-8-.9-8-2Zm0 0v7c0 1.1 3.58 2 8 2s8-.9 8-2V5M4 12v7c0 1.1 3.58 2 8 2s8-.9 8-2v-7',
    calendar: 'M5 4v3m14-3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13H4V6a1 1 0 0 1 1-1Zm3 8h2m4 0h2m-8 4h2',
    document: 'M6 3h8l4 4v14H6V3Zm8 0v5h5m-9 4h5m-5 4h5',
    payment: 'M3 6h18v13H3V6Zm0 4h18m-14 5h4',
    wallet: 'M4 6h15a2 2 0 0 1 2 2v11H5a2 2 0 0 1-2-2V6Zm0 0V5a2 2 0 0 1 2-2h12m3 9h-5a2 2 0 0 0 0 4h5v-4Z',
    cleaning: 'm12 3 1.4 5.6L19 10l-5.6 1.4L12 17l-1.4-5.6L5 10l5.6-1.4L12 3Zm7 12 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15ZM5 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z',
    report: 'M4 20V4m0 16h17M8 16v-5m5 5V7m5 9v-8',
    security: 'M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Zm-3 9 2 2 4-4',
    settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-5v2m0 14v2m9-9h-2M5 12H3m15.36-6.36-1.42 1.42M7.06 16.94l-1.42 1.42m12.72 0-1.42-1.42M7.06 7.06 5.64 5.64',
    login: 'M9 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h4m7-4 4-4-4-4m4 4H9m3-8V4a2 2 0 0 1 4 0v2m-4 0h4',
    dashboard: 'M3 3h8v8H3V3Zm10 0h8v5h-8V3Zm0 7h8v11h-8V10ZM3 13h8v8H3v-8Z',
    mobile: 'M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 3h10m-6 13h2',
    brain: 'M12 5a4 4 0 0 0-7 2.6A4.5 4.5 0 0 0 6 16a4 4 0 0 0 6 3V5Zm0 0a4 4 0 0 1 7 2.6A4.5 4.5 0 0 1 18 16a4 4 0 0 1-6 3m-4-9h4m-4 5h4m4-5h-1m1 5h-1',
    chat: 'M4 5h16v12H9l-5 4V5Zm4 5h8m-8 4h5',
    assistant: 'M12 3v3m0 12v3M3 12h3m12 0h3m-2.6-6.4-2.1 2.1M8.7 15.3l-2.1 2.1m0-10.6 2.1 2.1m6.6 6.4 2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    bell: 'M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9Zm-8 12h4',
    clipboard: 'M9 4h6l1 2h3v15H5V6h3l1-2Zm0 0V3h6v1m-6 7h6m-6 4h6',
    'medical-record': 'M6 3h9l4 4v14H6V3Zm9 0v5h5m-6 3v6m-3-3h6m-7 7h8',
    queue: 'M4 5h2m3 0h11M4 12h2m3 0h11M4 19h2m3 0h11',
    phone: 'M6 3h3l2 5-2 2a15 15 0 0 0 5 5l2-2 5 2v3a2 2 0 0 1-2 2C10 19 5 14 4 5a2 2 0 0 1 2-2Z',
    workflow: 'M6 4h4v4H6V4Zm8 12h4v4h-4v-4ZM8 8v4a2 2 0 0 0 2 2h6m-2-2 2 2-2 2',
    kiosk: 'M3 3h18v13H3V3Zm7 13v5m4-5v5m-7 0h10',
    hospital: 'M4 21V5h16v16M9 21v-5h6v5M8 9h2m4 0h2m-8 4h2m4 0h2m-3-8v4m-2-2h4',
    building: 'M4 21V4h11v17m0-11h5v11M8 8h3m-3 4h3m-3 4h3m6 0h1',
    doctor: 'M8 4a4 4 0 0 1 8 0v3a4 4 0 0 1-8 0V4Zm-4 17a8 8 0 0 1 16 0m-8-6v3m0 0 3 2m-3-2-3 2',
    specialty: 'M12 3v18M3 12h18M5.6 5.6l12.8 12.8m0-12.8L5.6 18.4',
    approval: 'M6 3h9l4 4v14H6V3Zm9 0v5h5m-10 4 2 2 4-4',
    service: 'M12 3v18M3 12h18m-4.5-6.5 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2ZM6 15l.7 1.3L8 17l-1.3.7L6 19l-.7-1.3L4 17l1.3-.7L6 15Z',
    medicine: 'M7 4a5 5 0 0 0 0 10h10a5 5 0 0 0 0-10H7Zm5 0v10',
    lab: 'M9 3h6m-5 0v7l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3m-7 12h12',
    result: 'M5 3h14v18H5V3Zm3 12 3-3 2 2 4-5m-9 7h8',
    'lab-building': 'M3 21V7h18v14M7 7V3h10v4M7 12h2m3 0h2m3 0h2m-12 5h2m3 0h2m3 0h2',
    pharmacy: 'M4 21V7h16v14M8 7V4h8v3m-4 3v8m-4-4h8',
    box: 'm3 7 9-4 9 4-9 4-9-4Zm0 0v10l9 4 9-4V7m-9 4v10',
    procurement: 'M3 4h2l2 12h11l3-9H6m3 13h.01M17 20h.01m-9-9h9m-5-4v8',
    insurance: 'M12 3 20 6v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-3Zm-3 9 2 2 4-4',
    withdrawal: 'M4 7h15m-4-4 4 4-4 4m5 6H5m4-4-4 4 4 4',
  }

  return <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={paths[icon]} /></svg>
}

function SkillIcon({ label }: { label: string }) {
  const icon = label === 'Web Development' ? '⌘' : label === 'Programming & Database' ? '◇' : label === 'Tools, Design & Deployment' ? '↗' : '▥'
  return <span className="skill-icon" aria-hidden="true">{icon}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })
  const [activeFilter, setActiveFilter] = useState<FilterOption>('All')
  const [selectedPhotoId, setSelectedPhotoId] = useState<number | null>(null)
  const [selectedCertificateId, setSelectedCertificateId] = useState<number | null>(null)
  const [expandedEducation, setExpandedEducation] = useState<number | null>(0)

  const filteredPhotos = useMemo(() => activeFilter === 'All' ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === activeFilter), [activeFilter])
  const selectedPhoto = selectedPhotoId !== null ? galleryPhotos.find((photo) => photo.id === selectedPhotoId) ?? null : null
  const selectedCertificate = selectedCertificateId !== null ? certificateItems.find((certificate) => certificate.id === selectedCertificateId) ?? null : null
  const featuredMemories = galleryPhotos.filter((photo) => photo.featured).slice(0, 5)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const changePhoto = useCallback((direction: number) => {
    if (!filteredPhotos.length) return
    const currentIndex = selectedPhotoId ? filteredPhotos.findIndex((photo) => photo.id === selectedPhotoId) : 0
    const nextIndex = currentIndex === -1 ? 0 : (currentIndex + direction + filteredPhotos.length) % filteredPhotos.length
    setSelectedPhotoId(filteredPhotos[nextIndex].id)
  }, [filteredPhotos, selectedPhotoId])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setSelectedPhotoId(null); setSelectedCertificateId(null) }
      if (event.key === 'ArrowRight' && selectedPhotoId !== null) changePhoto(1)
      if (event.key === 'ArrowLeft' && selectedPhotoId !== null) changePhoto(-1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [changePhoto, selectedPhotoId])

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Sreyneang home"><span className="brand-mark" aria-hidden="true"><span>SN</span><i /></span><span className="brand-copy"><span className="brand-text">Sreyneang</span><small>QA · Software</small></span></a>
          <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">{navItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>
          <div className="nav-actions"><button type="button" className="theme-toggle" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} onClick={() => setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')}><span aria-hidden="true">{theme === 'light' ? '☾' : '☀'}</span><span className="theme-toggle-label">{theme === 'light' ? 'Dark' : 'Light'}</span></button><button type="button" className="nav-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button></div>
        </div>
      </header>

      <main id="home">
        <section className="hero section container">
          <div className="hero-copy reveal">
            <p className="eyebrow">Professional QA Tester + Software Engineering Student</p>
            <h1>Hi, I&apos;m Sreyneang <span aria-hidden="true">👋</span></h1>
            <h2>Software Engineering Student | QA Tester</h2>
            <p className="lead">I design with quality in mind, combining software engineering fundamentals with a strong testing mindset to build digital products that are reliable, clear, and user-focused.</p>
            <div className="cta-row">
              <a className="button primary" href="#projects">View My Work</a>
              <a className="button secondary" href="/Sreyneang-CV.pdf" download>Download CV</a>
            </div>
            <div className="social-row" aria-label="Social links">{contactLinks.filter((link) => link.label !== 'Email').map((link) => <a key={link.label} className="social-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={link.label}><SocialIcon label={link.label} /></a>)}</div>
          </div>

          <div className="hero-visual reveal">
            <div className="profile-card">
              <div className="avatar-wrap"><img src="/images/profile/photo_2025-05-18_09-28-23.jpg" alt="Portrait of Sreyneang" className="profile-image" /></div>
              <div className="mini-panel first-panel"><span className="dot success" />QA Workflow</div>
              <div className="mini-panel second-panel"><span className="dot accent" />Regression Check</div>
              <div className="status-card"><div><span className="status-label">Quality mindset</span><strong>Reliability-first</strong></div><span className="tag">UI + QA</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">01 — ABOUT ME</span><h3>About Me</h3><p>I am a quality-focused software engineering student who cares deeply about clean experiences, solid validation, and thoughtful product decisions.</p></div><div className="about-grid"><article className="info-card reveal"><h4>Who I am</h4><p>I blend testing discipline with software development learning to create products that are easier to trust, easier to use, and easier to improve.</p></article><article className="info-card reveal"><h4>What I do</h4><p>I test user-facing flows, document product issues clearly, and build interfaces with a focus on clarity, accessibility, and maintainability.</p></article><article className="info-card reveal"><h4>What I enjoy</h4><p>I enjoy exploring workflows, solving usability problems, and improving quality through careful observation and consistent iteration.</p></article><article className="info-card reveal"><h4>My professional goal</h4><p>I want to grow into a role where software quality and engineering go hand in hand—building products people can rely on and teams can trust.</p></article></div></div></section>

        <section id="skills" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">02 — SKILLS</span><h3>Technical skills with a quality mindset</h3><p>My strengths sit at the intersection of software development, product thinking, and practical quality assurance. Select a category to scan the tools I use and learn.</p></div><div className="skills-grid technical-skills-grid">{technicalSkillGroups.map((group) => <article key={group.title} className="skill-card skill-card-modern reveal"><div className="skill-card-heading"><SkillIcon label={group.title} /><div><h4>{group.title}</h4><span>{group.items.length} skills</span></div></div><div className="badge-list">{group.items.map((item) => <span key={item} className="badge">{item}</span>)}</div></article>)}</div><div className="qa-section"><div className="subsection-heading"><span className="section-kicker small-kicker">Quality assurance focus</span><h4>QA testing skills</h4><p>My current practice is grounded in manual testing, clear documentation, and disciplined learning toward automation.</p></div><div className="qa-grid">{qaSkillGroups.map((group) => <article key={group.title} className={`qa-card ${group.tone} reveal`}><div className="qa-card-topline"><div><span className="qa-status-dot" aria-hidden="true" /><h5>{group.title}</h5></div><span className="status-label-chip">{group.status}</span></div><div className="qa-chip-list">{group.items.map((item) => <span key={item} className="qa-chip">{item}</span>)}</div></article>)}</div></div><div className="soft-skills-block"><div className="subsection-heading"><span className="section-kicker small-kicker">How I work</span><h4>Soft skills</h4></div><div className="soft-skills-grid">{softSkills.map((skill, index) => <div key={skill} className="soft-skill"><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span><strong>{skill}</strong></div>)}</div></div></div></section>

        <section id="experience" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">03 — EXPERIENCE</span><h3>Experience</h3><p>I focus on practical quality, user flow validation, and the communication needed to improve products consistently.</p></div><div className="timeline">{experience.map((item) => <article key={item.role} className="timeline-item reveal"><div className="timeline-marker" aria-hidden="true" /><div className="timeline-card"><div className="timeline-topline"><div><h4>{item.role}</h4><span>{item.company}</span></div><time>{item.period}</time></div><p>{item.description}</p><ul>{item.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}</ul></div></article>)}</div></div></section>

        <section id="projects" className="section section-spacer">
          <div className="container">
            <div className="section-header">
              <span className="section-kicker">04 — PROJECTS</span>
              <h3>Projects</h3>
              <p>I enjoy building clear, functional work that demonstrates both product thinking and quality awareness.</p>
            </div>
            <div className="project-grid">
              {updatedPortfolioProjects.map((project) => (
                <article key={project.id} className="project-card reveal">
                  <div className="project-visual">
                    <div className="project-window">
                      <span className="window-dots" aria-hidden="true"><i /><i /><i /></span>
                      {project.image ? <img className="project-image" src={project.image} alt={`Illustrative mockup for ${project.name}`} /> : <div className="project-placeholder" aria-hidden="true" />}
                    </div>
                  </div>
                  <div className="project-body">
                    <div className="project-meta"><span>{project.category}</span></div>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                    {project.modules?.length ? (
                      <div className={`project-modules ${project.modules.length > 20 ? 'project-modules-dense' : ''}`}>
                        <h5>Features &amp; modules</h5>
                        <ul>
                          {project.modules.map((module) => (
                            <li key={module.name}>
                              <ProjectModuleIconView icon={module.icon} />
                              <span>{module.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                    <div className="tech-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                    {project.qaFocus?.length ? <div className="qa-focus-panel"><div className="qa-focus-heading"><span className="qa-focus-icon" aria-hidden="true">✓</span><div><strong>QA focus</strong><small>Example test flow areas</small></div></div><div className="qa-focus-list">{project.qaFocus.map((focus) => <span key={focus}>{focus}</span>)}</div></div> : null}
                    <div className="project-contribution">
                      <strong>My contribution</strong>
                      <p>{project.contribution}</p>
                    </div>
                    <div className="project-actions">
                      {project.projectLink ? <a className="button primary small" href={project.projectLink} target="_blank" rel="noreferrer">View Project</a> : null}
                      {project.githubLink ? <a className="button secondary small" href={project.githubLink} target="_blank" rel="noreferrer">GitHub</a> : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="journey" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">05 — MY JOURNEY</span><h3>From where I started to where I&apos;m going</h3><p>A personal look at the path that shaped who I am today. Dates are intentionally editable in.</p></div><div className="journey-layout"><div className="journey-intro reveal"><h4>Where I started → what I learned → what I do now</h4><p>My story is shaped by curiosity, learning, and constant improvement. Each chapter connects the person I was, the experiences I have had, and the quality-focused professional I am becoming.</p></div><div className="journey-milestones reveal">{journeyItems.map((item) => <div key={item.id} className="milestone-item"><span className="milestone-year">{item.year}</span><div className="milestone-content"><h5>{item.title}</h5><p>{item.description}</p>{item.achievement ? <small>{item.achievement}</small> : null}</div></div>)}</div></div><div className="featured-memories reveal"><div className="section-subtitle"><span>Featured Memories</span><h4>Some moments that shaped my journey</h4></div><div className="featured-grid">{featuredMemories.map((photo, index) => <button key={photo.id} type="button" className={`featured-item ${index === 0 ? 'featured-large' : ''}`} onClick={() => setSelectedPhotoId(photo.id)} aria-label={`Open ${photo.title}`}><img src={photo.image} alt={photo.title} /><span className="featured-caption"><strong>{photo.title}</strong><small>{photo.year}</small></span></button>)}</div></div><div className="gallery-card reveal"><div className="gallery-head"><div><span className="section-kicker small-kicker">Childhood Memories · Photo Gallery</span><h4>Where It All Started</h4></div></div><div className="gallery-filters" aria-label="Photo filters">{filterOptions.map((option) => <button key={option} type="button" className={option === activeFilter ? 'filter-button active' : 'filter-button'} onClick={() => setActiveFilter(option)}>{option}</button>)}</div><div className="gallery-grid">{filteredPhotos.map((photo) => <button key={photo.id} type="button" className="gallery-item" onClick={() => setSelectedPhotoId(photo.id)} aria-label={`View ${photo.title}`}><img src={photo.image} alt={photo.title} /><span className="gallery-overlay"><strong>{photo.title}</strong><small>{photo.category} · {photo.year}</small></span></button>)}</div></div></div></section>

        <section id="education" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">06 — EDUCATION</span><h3>Education &amp; learning</h3><p>My education connects software development fundamentals with the systems thinking and communication needed for quality work.</p></div><div className="education-grid">{education.map((item, index) => <article key={item.title} className={`edu-card edu-card-expandable reveal ${expandedEducation === index ? 'expanded' : ''}`}><button type="button" className="edu-toggle" aria-expanded={expandedEducation === index} onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}><span className="edu-number">0{index + 1}</span><span className="edu-title-wrap"><h4>{item.title}</h4><span>{item.meta}</span></span><span className="edu-chevron" aria-hidden="true">⌄</span></button><div className="edu-details"><p>{item.description}</p><div className="edu-detail-grid"><div><strong>Relevant coursework</strong><ul>{item.courses.map((course) => <li key={course}>{course}</li>)}</ul></div><div><strong>Technology tags</strong><div className="badge-list">{item.technologies.map((technology) => <span key={technology} className="badge">{technology}</span>)}</div></div></div></div></article>)}</div></div></section>

        {/* <section id="certificates" className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">06 — CERTIFICATES</span><h3>Certificates &amp; Training</h3><p>A dedicated area for qualifications and formal learning. Add new entries in <code>src/data/certificates.ts</code> without editing this layout.</p></div><div className="certificate-grid">{certificateItems.map((certificate) => <article key={certificate.id} className="certificate-card reveal"><img src={certificate.image} alt={certificate.title} /><div className="certificate-body"><div className="certificate-topline"><span>{certificate.category}</span><time>{certificate.date}</time></div><h4>{certificate.title}</h4><p className="organization">{certificate.organization}</p><p>{certificate.description}</p><button type="button" className="button secondary small" onClick={() => setSelectedCertificateId(certificate.id)}>View Certificate</button></div></article>)}</div></div></section> */}

        <section className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">07 — ACHIEVEMENTS</span><h3>Achievements</h3><p>Recognition and milestones beyond certificates—scholarships, leadership, training, and important moments of growth.</p></div><div className="achievement-list">{achievementItems.map((achievement) => <article key={achievement.id} className="achievement-card reveal"><div className="achievement-header"><span className="achievement-year">{achievement.year}</span><span className="achievement-category">{achievement.category}</span></div><div className="achievement-content"><h4>{achievement.title}</h4><p className="achievement-org">{achievement.organization}</p><p>{achievement.description}</p></div>{achievement.link ? <a className="button secondary small" href={achievement.link}>View Details</a> : null}</article>)}</div></div></section>

        <section className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">08 — HOBBY </span><h3>My Hobby</h3><p>A little more about the person behind the work, the curiosity behind the learning, and the direction I am growing toward.</p></div><div className="beyond-grid"><article className="beyond-card beyond-story reveal"><span className="section-kicker small-kicker">My story</span><h4>Where I started, where I am now, and where I&apos;m going</h4><p>I am building a career around thoughtful software quality while staying open to the human experiences that make learning meaningful.</p><div className="story-points"><div><strong>Now</strong><span>QA and software engineering</span></div><div><strong>Learning</strong><span>Automation, SQL, and communication</span></div><div><strong>Next</strong><span>Reliable products and continuous growth</span></div></div></article><article className="beyond-card reveal"><span className="section-kicker small-kicker">When I&apos;m not testing software</span><h4>Beyond work</h4><div className="interest-grid">{interests.map((interest) => <div key={interest.title} className="interest-item"><span className="interest-icon" aria-hidden="true">{interest.icon.slice(0, 1)}</span><div><strong>{interest.title}</strong><p>{interest.description}</p></div></div>)}</div></article></div></div></section>

        {/* <section className="section section-spacer"><div className="container"><div className="section-header"><span className="section-kicker">09 — ALWAYS LEARNING</span><h3>Personal Growth</h3><p>Small, consistent steps keep my technical and communication skills moving forward.</p></div><div className="growth-layout"><div className="growth-roadmap reveal">{growthAreas.map((area, index) => <div key={area} className="growth-step"><span>{String(index + 1).padStart(2, '0')}</span><strong>{area}</strong></div>)}</div><div className="workshop-panel reveal"><div className="section-subtitle"><span>Learning beyond formal study</span><h4>Training &amp; Workshops</h4></div>{workshops.map((workshop) => <article key={workshop.title} className="workshop-item"><div><h5>{workshop.title}</h5><p>{workshop.description}</p></div><small>{workshop.date}</small></article>)}</div></div></div></section> */}

        <section id="contact" className="section section-spacer"><div className="container"><div className="contact-card reveal"><div><span className="section-kicker">10 — CONTACT</span><h3>Let&apos;s connect</h3><p>I&apos;m open to opportunities that combine quality assurance, software engineering, and thoughtful product development.</p></div><div className="contact-actions"><a className="button primary" href="mailto:sreyneang.dev@gmail.com">Email Me</a><div className="social-row compact">{contactLinks.map((link) => <a key={link.label} className="social-link" href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined} aria-label={link.label}><SocialIcon label={link.label} /></a>)}</div></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} Sreyneang</p><p>Professional QA Tester + Software Engineering Student</p></div></footer>

      {selectedPhoto && <div className="lightbox" role="dialog" aria-modal="true" aria-label={selectedPhoto.title}><button type="button" className="lightbox-close" onClick={() => setSelectedPhotoId(null)} aria-label="Close gallery">×</button><button type="button" className="lightbox-nav prev" onClick={() => changePhoto(-1)} aria-label="Previous photo">←</button><div className="lightbox-content"><img src={selectedPhoto.image} alt={selectedPhoto.title} /><div className="lightbox-details"><div className="lightbox-meta"><span>{selectedPhoto.category}</span><span>{selectedPhoto.year}</span></div><h3>{selectedPhoto.title}</h3><p>{selectedPhoto.description}</p></div></div><button type="button" className="lightbox-nav next" onClick={() => changePhoto(1)} aria-label="Next photo">→</button></div>}
      {selectedCertificate && <div className="lightbox certificate-lightbox" role="dialog" aria-modal="true" aria-label={selectedCertificate.title}><button type="button" className="lightbox-close" onClick={() => setSelectedCertificateId(null)} aria-label="Close certificate">×</button><div className="certificate-modal"><img src={selectedCertificate.image} alt={selectedCertificate.title} /><div className="certificate-modal-body"><div className="lightbox-meta"><span>{selectedCertificate.category}</span><span>{selectedCertificate.date}</span></div><h3>{selectedCertificate.title}</h3><p className="organization">{selectedCertificate.organization}</p><p>{selectedCertificate.description}</p><div className="modal-actions">{selectedCertificate.pdf ? <a className="button primary small" href={selectedCertificate.pdf} target="_blank" rel="noreferrer">View Full Certificate</a> : null}{selectedCertificate.verificationUrl ? <a className="button secondary small" href={selectedCertificate.verificationUrl} target="_blank" rel="noreferrer">Verify Certificate</a> : null}</div></div></div></div>}
    </div>
  )
}

export default App
