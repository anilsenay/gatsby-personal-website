import React, { useState } from "react"

import styles from "./search.module.scss"
import SearchIcon from "../../assets/search.svg"
import TagButton from "./tag_button"

export default function SearchBar({ input, setInput, tags = [] }) {
  const [focus, setFocus] = useState(false)

  return (
    <>
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
      <div className={styles.tags}>
        {tags.map(item => {
          return (
            <TagButton
              key={item}
              tag={item}
              onClick={() => (input !== item ? setInput(item) : setInput(""))}
              active={input === item}
            />
          )
        })}
      </div>
    </>
  )
}
