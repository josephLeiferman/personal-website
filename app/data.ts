type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  id: string
  description: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
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
    description: ''
  },
  {
    company: 'PayIt',
    title: 'Software Engineering Manager',
    start: 'June 2023',
    end: 'September 2024',
    id: 'work2',
    description: ''
  },
  {
    company: 'PayIt',
    title: 'Senior Software Engineer',
    start: 'January 2021',
    end: 'June 2023',
    id: 'work3',
    description: ''
  },
  {
    company: 'Cerner Corporation',
    title: 'Software Engineer',
    start: 'July 2018',
    end: 'January 2021',
    id: 'work4',
    description: ''
  }
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Blog Post 1',
    description: 'Blog Description 1',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-1',
  },
  {
    title: 'Blog Post 2',
    description: 'Blog Description 2',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-2',
  },
  {
    title: 'Blog Post 3',
    description: 'Blog Description 3',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-3',
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
