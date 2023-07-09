// badge with tooltip
import { Badge } from "../Badge"
import styles from "./InfoBadge.module.css"

interface Props {
  title: string
  info: string
  index: number
}

export const InfoBadge = ({ title, info, index }: Props) => {
  return (
    <div className={styles.root}>
      <Badge index={index}>{title}</Badge>

      <div className={styles.tooltip}>
        <p>{info}</p>
      </div>
    </div>
  )
}
