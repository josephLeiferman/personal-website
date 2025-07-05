export type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

export type WorkExperience = {
  id: string
  company: string
  title: string
  start: string
  end: string
  description: string
}

export type EducationExperience = {
  id: string
  school: string
  program: string
  location: string
  start: string
  end: string
  description: string
}

export type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'PayIt',
    title: 'Senior Software Engineer',
    start: 'September 2024',
    end: 'Present',
    id: 'work1',
    description: 'Lead engineer on the Platform Integrations team, responsible for scaling and\n' +
      'maintaining critical ingestion pipelines. Spearheaded the development of\n' +
      'automated production smoke tests using Cypress.io to proactively detect\n' +
      'incidents. Led efforts to implement blue/green deployments for seamless\n' +
      'database updates. Expanded flat file integration support to Canada to meet\n' +
      'regional data protection requirements. Designed and deployed a new\n' +
      'ingestion process that improved performance by 5x. Maintained and\n' +
      'enhanced distributed tracing with Honeycomb, and implemented\n' +
      'performance-based alerting to ensure integration reliability.'
  },
  {
    company: 'PayIt',
    title: 'Software Engineering Manager',
    start: 'June 2023',
    end: 'September 2024',
    id: 'work2',
    description: 'Lead engineering efforts to transition legacy clients from custom\n' +
      'implementations to standardized platform solutions. Oversee a team\n' +
      'responsible for identifying migration paths, reducing technical debt, and\n' +
      'enabling long-term scalability. Successfully migrated three of our largest and\n' +
      'most complex clients, improving maintainability and aligning them with core\n' +
      'platform capabilities. Collaborate closely with product, client success, and\n' +
      'integration teams to ensure smooth transitions and consistent adoption.\n' +
      'Drive process improvements and tooling to streamline onboarding and\n' +
      'accelerate future migrations.'
  },
  {
    company: 'PayIt',
    title: 'Senior Software Engineer',
    start: 'January 2021',
    end: 'June 2023',
    id: 'work3',
    description: 'Led engineering efforts for go-to-market launches of state and local\n' +
      'government solutions, including DMV, property tax, and citation services.\n' +
      'Worked closely with product, design, and implementation teams to deliver\n' +
      'customized, production-ready features on aggressive timelines. Focused on\n' +
      'building scalable, and easy to maintain code that met regulatory and client-specific\n' +
      'requirements. Played a key role in ensuring successful launches by aligning\n' +
      'engineering output with operational readiness and client expectations.'
  },
  {
    company: 'Cerner Corporation',
    title: 'Software Engineer',
    start: 'July 2018',
    end: 'January 2021',
    id: 'work4',
    description: 'Focused on a Ruby on Rails web application and its supporting analytics\n' +
      'pipeline within the Revenue Cycle organization. Responsibilities included\n' +
      'contributing to a value-based reimbursement platform aimed at reducing\n' +
      'healthcare costs, leading the migration of infrastructure from on-premise to\n' +
      'AWS to improve scalability and reliability, and implementing automated\n' +
      'deployment pipelines using Spinnaker and Jenkins. Additional efforts\n' +
      'involved integrating React components to enhance frontend performance,\n' +
      'introducing automated accessibility scans, and developing an Apache\n' +
      'Crunch-based ETL process to move and transform data from MySQL to\n' +
      'Vertica for T ableau reporting. The data pipeline was further optimized by\n' +
      'transitioning from full to incremental loads.'
  }
]

export const EDUCATIONAL_EXPERIENCE: EducationExperience[] = [
  {
    id: 'undergraduateDegree',
    school: 'University of Iowa',
    program: 'B.S. in Computer Science',
    location: 'Iowa City, Iowa',
    start: '2014',
    end: '2018',
    description: 'Completed foundational and advanced coursework in algorithms, data\n' +
      'structures, software engineering, and systems programming. Gained\n' +
      'practical experience through team-based projects and individual work, with\n' +
      'exposure to areas such as databases, computer architecture, and web\n' +
      'development.'
  },
  {
    id: 'mastersDegree',
    school: 'University of Illinois Urbana-Champaign',
    program: 'M.S. in Computer Science',
    location: 'Champaign, Illinois',
    start: 'May 2024',
    end: 'May 2026',
    description: 'Pursuing advanced coursework in machine learning, natural language\n' +
      'processing, computer vision, and parallel computing, with an emphasis on\n' +
      'applied AI techniques and scalable systems. Gaining hands-on experience\n' +
      'through projects that apply deep learning, reinforcement learning, and\n' +
      'distributed data processing to real-world problems.'
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Performance Testing Java',
    description: 'An insight into testing Java applications with performance in mind.',
    link: '/blog/java-performance-testing',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/josephLeiferman',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/jleiferman/',
  },
]

export const EMAIL = 'contact.jleiferman@gmail.com'
