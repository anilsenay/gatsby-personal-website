import React from "react"

import styles from "./footer.module.scss"

import Github from "../../assets/social-media/github.svg"
import Linkedin from "../../assets/social-media/linkedin.svg"
import Instagram from "../../assets/social-media/instagram.svg"
import Twitter from "../../assets/social-media/twitter.svg"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.text}>
          Designed by{" "}
          <a href="https://www.figma.com/community/file/824810955262478067">
            Ryan Warner
          </a>
          .
        </span>
        <span className={styles.text}>Coded by me.</span>
      </div>
      <div className={styles.socialIcons}>
        <a href="https://twitter.com/anilsenay">
          <Twitter width={20} height={20} fill="#ffffff" />
        </a>
        <a href="https://instagram.com/anilsenay">
          <Instagram width={20} height={20} fill="#ffffff" />
        </a>
        <a href="https://github.com/anilsenay">
          <Github width={20} height={20} fill="#ffffff" />
        </a>
        <a href="https://linkedin.com/in/anılşenay">
          <Linkedin width={20} height={20} fill="#ffffff" />
        </a>
      </div>
    </div>
  )
}
