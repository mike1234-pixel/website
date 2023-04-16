import classNames from "classnames"
import React, { ReactNode, useState } from "react"
import styles from "./Tabs.module.css"

export interface Tab {
  label: string
  content: ReactNode
}

interface Props {
  tabs: Tab[]
  defaultTab?: number
}

export const Tabs = ({ tabs, defaultTab = 0 }: Props) => {
  const [activeTab, setActiveTab] = useState(defaultTab)

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex)
  }

  return (
    <div className={styles.root}>
      <div className={styles.tabsHeader}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={
              activeTab === index
                ? classNames(styles.tab, styles.activeTab)
                : styles.tab
            }
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className={styles.tabsContent}>{tabs[activeTab].content}</div>
    </div>
  )
}
