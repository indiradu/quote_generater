import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {
  const [quote, setQuote] = useState('Quotes')
useEffect(()=>{fetchquote()},[])
  
function fetchquote(){ 
  fetch('https://api.kanye.rest/')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setQuote(data.quote)
  })
}
  return (
    <div>
      <div id="quote">{quote}</div>
      <br></br>
      <br></br>
      <button id="btn" onClick={fetchquote}>GENERATE</button>
    </div>  
  )
}

export default App
