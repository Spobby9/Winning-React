import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
// import './App.css'

function App() {
  const [count , setCount] = useState(0) ;
 

  const addFunction = ()=>{setCount(count+1)};

  const minusFunction = ()=>{ if (count == 0) { setCount(0)} else {setCount(count-1)}} ;

  const color = count==0 ? "text-red-500" : "text-black-500" ;




  return (
   <>
   <h1 className='bg-yellow-200 text-center'>Counter</h1>
   <div className={color}>Count :{count}</div>
   <div className='flex flex-wrap justify-center '>
    <button className=' bg-blue-500 w-12 h-12' onClick ={addFunction}>+</button>
    <button onClick={()=>setCount(0) }>Reset</button>
    <button onClick={minusFunction}>-</button>
    </div>
   
   </>
   
  )
}

export default App