import React, { useState } from "react"

import styles from "./search.module.scss"
import SearchIcon from "../../assets/search.svg"

export default function SearchBar({ setInput }) {
  const [focus, setFocus] = useState(false)

  return (
    <div
      className={styles.container}
      style={{
        border: focus ? " 2px solid #416883" : "",
      }}
    >
      <SearchIcon />
      <input
        className={styles.inputArea}
        placeholder="Search project"
        onChange={e => setInput(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  )
}
