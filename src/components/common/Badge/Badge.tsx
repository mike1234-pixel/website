import { ReactNode } from "react"
import styles from "./Badge.module.css"

interface Props {
  children: ReactNode | ReactNode[]
  randomColor?: boolean
  index: number
}

export const Badge = ({ children, index }: Props) => {
  const colors = [
    styles.color1,
    styles.color2,
    styles.color3,
    styles.color4,
    styles.color5,
    styles.color6,
  ]
  const colorIndex = index % colors.length
  const colorClass = colors[colorIndex]

  return <div className={`${styles.root} ${colorClass}`}>{children}</div>
}
