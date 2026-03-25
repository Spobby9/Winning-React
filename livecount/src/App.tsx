import { useState, type ChangeEvent } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [count , setCount] = useState(0) ;
  const [word , setWord] = useState(0)
  

  const liveCount = (e : any)=>{
   const { value , name } = e.target ;

   setCount(()=>value.length);

   setWord(()=>value.trim().split(" ").length)  ;
    


  }

  return (
    <div>
      <input name='opinion' type='text'  onChange={liveCount} placeholder='enter your opinion'></input>

      <p>Characters Types {count}</p>
      <p>words you have typed {word}</p>
    
    
     </div>
  )
}

export default App
