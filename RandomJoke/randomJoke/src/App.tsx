import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'
import axios from "axios"

function App() {
const [joke , setJoke] = useState(null);
const [isError , setIsError]= useState(null);
const [isLoading , setIsLoading] = useState(false)
const[control , setControl] =useState(false)
const[count , setCount]=useState(0)

useEffect(()=>{
if(control){
    const fetchJoke = async ()=>{
    setIsLoading(true)

    try { 
      const response = await axios.get("https://official-joke-api.appspot.com/random_joke") ;
      setJoke(response.data);
      
    } catch (error :any) {
      setIsError(error.message)
      
    } setIsLoading(false)
  }
fetchJoke();

}


  
} , [count])

  return (
    <>
    <div>{joke && <p>{joke.setup} {joke.punchline}</p>}</div>
    <button onClick={(()=>{setCount((prev)=>prev+1) ; setControl(true) })}>Create New</button>
    
    </>
  )
}

export default App
