interface Repo {
  link: string
  linkText: string
}

export interface Project {
  title: string
  description: string[]
  video: string
  badges: string[]
  repos: Repo[]
}
