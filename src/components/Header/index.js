import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.scss"

const Header = ({ currentPage }) => (
  <header className={styles.container}>
    <div className={styles.navigation}>
      <Link
        to="/"
        className={styles.links}
        style={{ color: currentPage === "Home" ? "#82f9a1" : "" }}
      >
        Home
      </Link>
      <Link
        to="/projects"
        className={styles.links}
        style={{ color: currentPage === "Projects" ? "#82f9a1" : "" }}
      >
        Projects
      </Link>
      <Link
        to="/blog"
        className={styles.links}
        style={{ color: currentPage === "Blog" ? "#82f9a1" : "" }}
      >
        Blog
      </Link>
      <div className={styles.rightLinks}>
        <Link
          to="/about"
          className={styles.links_small}
          style={{ color: currentPage === "About" ? "#82f9a1" : "" }}
        >
          About
        </Link>
        <Link
          to="/contact"
          className={styles.links_small}
          style={{ color: currentPage === "Contact" ? "#82f9a1" : "" }}
        >
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
