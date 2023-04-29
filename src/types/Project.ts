export interface Repo {
  link: string
  linkText: string
}

export interface Project {
  id: string
  title: string
  description: string[]
  video: string
  badges: string[]
  repos: Repo[]
  starProject: boolean
}
