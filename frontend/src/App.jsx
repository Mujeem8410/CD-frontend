import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const apiHit = async () => {
    try {
      const Response = await fetch('https://ci-and-cd.onrender.com/greeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'John Doe' })
      })
      const result = await Response.json()
      console.log('API Response:', result)
      setData(result.message)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    apiHit()
  }, [])

  return (
    <>
      <h1 style={{backgroundColor: 'pink'}}>Hello Bhai Kya haal hai</h1>
      <p>{data ? JSON.stringify(data) : 'Loading...'}</p>
    </>
  )
}

export default App
