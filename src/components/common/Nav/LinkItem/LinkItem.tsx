import classNames from "classnames"
import { ReactNode } from "react"
import { NavLink } from "react-router-dom"
import styles from "./LinkItem.module.css"

interface Props {
  to: string
  children: string | ReactNode
}

export const LinkItem = ({ children, to }: Props) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? classNames(styles.link, styles.activeLink) : styles.link
        }
      >
        {children}
      </NavLink>
    </li>
  )
}
