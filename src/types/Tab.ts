export interface Skill {
  title: string
  info: string
}

export interface Tab {
  id: string
  label: string
  skills: Skill[]
}
