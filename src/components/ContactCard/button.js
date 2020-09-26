import React from "react"

import styles from "./button.module.scss"

import MailIcon from "../../assets/message.svg"

export default function Button() {
  return (
    <a className={styles.container} href="mailto:anilsenay3@gmail.com">
      <MailIcon width={22} height={20} className={styles.icon} />
      <span className={styles.text}>Send Email</span>
      <div className={styles.tipBox}>anilsenay3@gmail.com</div>
    </a>
  )
}
