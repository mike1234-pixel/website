interface Skill {
  title: string
  info: string
}

export interface Tab {
  label: string
  skills: Skill[]
}
