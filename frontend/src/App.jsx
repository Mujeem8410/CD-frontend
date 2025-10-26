import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const apiHit = async () => {
    try {
      const Response = await fetch('https://ci-and-cd.onrender.com/test')
      const result = await Response.text()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    apiHit()
  }, [])

  return (
    <>
      <h1 style={{ backgroundColor: 'pink' }}>
        Hello Bhai Kya haal hai
      </h1>
      <p>{data ? data : 'Loading...'}</p>
    </>
  )
}

export default App
