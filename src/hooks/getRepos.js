import { useEffect, useState } from "react"
import { projects } from "../../static/projects.json"

const useGetRepos = url => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchFromGithub() {
      try {
        const res = await fetch(
          url || "https://api.github.com/users/anilsenay/repos?per_page=100"
        )
        const json = await res.json()
        setRepos(json)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchFromGithub()
  }, [url])

  return {
    repos: repos.filter(item => {
      if (projects.some(e => e.name === item.name)) return item
      else return false
    }),
    loading,
    error,
  }
}

export { useGetRepos }
