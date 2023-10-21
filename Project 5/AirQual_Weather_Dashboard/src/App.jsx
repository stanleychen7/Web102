import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const fetchData = async() => {
      const response = await axios.get('http://api.airvisual.com/v2/cities?city=New York&state=New York&country=USA&key=' + API_KEY);

    }
  },[])

  return (
    <div></div>
  )
}

export default App
