import React, { useEffect, useState } from "react"
import { projects } from "../../static/projects.json"

const useGetRepos = url => {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    async function fetchFromGithub() {
      const res = await fetch(
        url || "https://api.github.com/users/anilsenay/repos?per_page=100"
      )
      const json = await res.json()
      setRepos(json)
    }

    fetchFromGithub()
  }, [])

  return repos.length > 0
    ? repos.filter(item => {
        if (projects.some(e => e.name === item.name)) return item
      })
    : []
}

export { useGetRepos }
