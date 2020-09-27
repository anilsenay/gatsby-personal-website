/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./layout.css"
import Footer from "../Footer"
import ContactCard from "../ContactCard"

const Layout = ({ children, showContact, currentPage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata?.title || `Title`}
        currentPage={currentPage}
      />
      <div>
        <main className="container" style={{ paddingTop: 100 }}>
          {children}
        </main>
        <footer
          style={{
            marginTop: 80,
            marginBottom: 40,
          }}
        >
          {showContact && <ContactCard />}
          <div className="container">
            <Footer />
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
