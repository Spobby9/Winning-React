import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Heart, ArrowRight } from "lucide-react";





function App() {

  const [count , setCount] = useState(124);
  const [clicked , setClicked] = useState(false);

  const handleButton = ()=>{
    if(clicked==false)
      { setClicked(true) ; setCount(count+1) ; }
      else {setClicked(false) ; setCount(count-1)} ;

 

  }

       let col = clicked==true ? "text-red-500" : "text-black";
  let depStatement = clicked==true ? "liked" : "like";
  

  

  return (
    <>

    <button onClick={handleButton}>  <Heart className={`${col} inline`} />  {depStatement} {count}</button>
    
    </>
  )
}

export default App
