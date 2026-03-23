import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [note , setNote] = useState(1)
const changeState = ()=>{if (note==1) {setNote(0)} else {setNote(1)}}

  return (
   <>

   <div>{note ? "Pd" : "**"}</div>
   <div><button onClick={changeState}>{note ? "Hide" : "Show Secret"}</button></div>



   </>
  )
}

export default App
