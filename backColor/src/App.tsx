import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {

  const [bg , setBg] = useState("bg-black-500 ") ;




  

  return (
   <>

   <div className= {`${bg} w-screen h-screen`} >
    <button className='w-20 h-20 bg-red-500 text-black' onClick={()=>setBg("bg-red-500")}>Red</button>
    <button className='w-20 h-20 bg-blue-500 text-black' onClick={()=>setBg("bg-blue-500")}>Blue</button>
    <button className='w-20 h-20 bg-green-500 text-black' onClick={()=>setBg("bg-green-500")}>Green</button>
   </div>

   
   </>
  )
}

export default App
