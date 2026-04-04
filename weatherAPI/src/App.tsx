import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import axios from "axios"
// import './App.css'

function App() {

  const [city , setCity] = useState("Kolkata")
  const [go , setGo] =useState('');
  const [isLoading , setIsLoading] = useState(false);
  const [isError , setIsError] = useState(null)
  const[weather , setWeather] = useState<any>(null);

  useEffect(()=>{
    if (go) {
      const fetchData = async ()=>{
        setIsLoading(true);
        try{
          const response = await axios.get("https://api.openweathermap.org/data/2.5/weather" , {
            params : {
              q : city,
              appid : "2c4ab8ec9d5e3d98241da819ac48c2da"
            } 
      
          })

          setWeather(response.data);
        } catch(error : any){
          setIsError(error.message)
        } finally {setIsLoading(false)}

        

      }

      fetchData();
    }


  } , [go])


  return (
   <>
   <input type='text' placeholder='city name' value={city} onChange={(e)=>{ setCity (e.target.value as string)}} />
   <button onClick={()=>setGo(city)} >Search</button> 

   <div> {isLoading  && <p> Data is Loading</p> } 
   </div>

<div>{weather && <div>{weather.name}</div>}</div>
   </>
  )
}

export default App
