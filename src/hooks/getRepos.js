import { useEffect, useState } from "react"
import { projects } from "../../static/projects.json"

const useGetRepos = url => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchFromGithub() {
      const res = await fetch(
        url || "https://api.github.com/users/anilsenay/repos?per_page=100"
      )
      const json = await res.json()
      setRepos(json)
      setLoading(false)
    }

    fetchFromGithub()
  }, [url])

  return {
    data: repos.filter(item => {
      if (projects.some(e => e.name === item.name)) return item
      else return false
    }),
    loading: loading,
  }

  // return repos.length > 0
  //   ? repos.filter(item => {
  //       if (projects.some(e => e.name === item.name)) return item
  //       else return false
  //     })
  //   : []
}

export { useGetRepos }
