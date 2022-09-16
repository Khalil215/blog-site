import { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abort = new AbortController()

    fetch(url, { signal: abort.signal })
      .then(res => {
        if (!res.ok) {
          throw Error('Could not fetch any data')
        }
        return res.json()
      })
      .then(data => {
        setData(data)
        setLoading(false)
        setError(null)
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('abort')
        } else {
          setLoading(false)
          setError(err.message)
        }
      }
      )
    return () => abort.abort()
  }, [url])

  return { data, loading, error }
}

export default useFetch;