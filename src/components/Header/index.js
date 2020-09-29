import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

import styles from "./header.module.scss"
import Close from "../../assets/close.svg"
import HeaderButton from "./button"

const Header = ({ currentPage }) => {
  const [showHeader, setShowHeader] = useState({})

  return (
    <header className={styles.container}>
      <HeaderButton
        className={styles.headerButton}
        onClick={() => setShowHeader({ transform: "translate3d(0vw, 0, 0)" })}
      />

      <div className={styles.navigation} style={showHeader}>
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

          <button
            className={styles.closeButton}
            onClick={() =>
              setShowHeader({ transform: "translate3d(-100vw, 0, 0)" })
            }
          >
            <Close className={styles.close} fill="white" />
          </button>
          <button
            className={styles.background}
            onClick={() =>
              setShowHeader({ transform: "translate3d(-100vw, 0, 0)" })
            }
          />
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
