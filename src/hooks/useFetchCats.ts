import { useState, useEffect } from 'react'
import { fetchCats } from '../api/fetchCats'

export const useFetchCats = () => {
  const [cats, setCats] = useState<{ [key: string]: string[] }>({})
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadCats = async () => {
      try {
        const catsByGender = await fetchCats()
        setCats(catsByGender)
      } catch (error) {
        setError('Failed to load data. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadCats()
  }, [])

  return { cats, loading, error }
}
