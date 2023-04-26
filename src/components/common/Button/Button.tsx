import { ReactNode } from "react"
import classNames from "classnames"
import styles from "./Button.module.css"

interface ButtonProps {
  children: ReactNode | ReactNode[]
  link?: string
  variant: "action" | "danger" | "success" | "warning"
}

export const Button = ({ children, link, variant }: ButtonProps) => {
  const buttonClass = styles[variant]

  if (link) {
    return (
      <a href={link} className={classNames(styles.root, buttonClass)}>
        {children}
      </a>
    )
  }

  return (
    <button className={classNames(styles.root, buttonClass)}>{children}</button>
  )
}
