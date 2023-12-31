import { useEffect, useState } from 'react'

const BASE_URL = 'http://172.29.210.215:5000'

export const useRepositories = () => {
  const [repositories, setRepositories] = useState(null)

  const fetchRepositories = async () => {
    try {
      const response = await fetch(BASE_URL + '/api/repositories')
      const json = await response.json()

      const repositoriesNodes = json ? json.edges.map((edge) => edge.node) : []
      setRepositories(repositoriesNodes)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchRepositories()
  }, [])

  return { repositories }
}
