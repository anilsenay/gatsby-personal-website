import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Header = () => (
  <header className={styles.container}>
    <div className={styles.navigation}>
      <Link to="/" className={styles.links}>
        Home
      </Link>
      <Link to="/" className={styles.links}>
        Projects
      </Link>
      <Link to="/" className={styles.links}>
        Blog
      </Link>
      <div className={styles.rightLinks}>
        <Link to="/" className={styles.links_small}>
          About
        </Link>
        <Link to="/" className={styles.links_small}>
          Contact
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
