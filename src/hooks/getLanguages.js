import { useEffect, useState } from "react"

const useGetLanguages = url => {
  const [langs, setLangs] = useState([])

  useEffect(() => {
    async function fetchFromGithub() {
      const res = await fetch(url)
      const json = await res.json()
      setLangs(json)
    }

    fetchFromGithub()
  }, [url])

  return langs
}

export { useGetLanguages }
