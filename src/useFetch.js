import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState('')
    const [ispending, setIsPending] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(url)
        .then(res => {
          if(!res.ok){
            throw Error('Failed to load resource')
          }
         return res.json()
        })
        .then((data) =>{
           setData(data)
           setIsPending(false)
           setError(null)
        })
        .catch(err => {
          setIsPending(false)
          setError(err.message)
        })
      },[url]);

      return {data, ispending, error}
}

export default useFetch