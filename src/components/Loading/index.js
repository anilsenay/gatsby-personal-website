import React from "react"

import styles from "./loading.module.scss"

export default function Loading() {
  return (
    <div class={styles.container}>
      <div class={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
