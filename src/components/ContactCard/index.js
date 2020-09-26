import React from "react"

import styles from "./contact.module.scss"
import Button from "./button"

export default function ContactCard() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>How can you contact me?</p>
      <div className={styles.textContainer}>
        <p className={styles.text}>
          You can contact me by email or you can send me message on social
          media. You can find social media links below.
        </p>
        <span className={styles.gpg}>GPG: 0x91A3D10D</span>
      </div>
      <Button />
    </div>
  )
}
