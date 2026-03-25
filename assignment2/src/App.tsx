import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { FormCollection } from './components/FormCollection'
import { TableControl } from './components/TableControl'




function App()
 {
   type FormData = { name : string ; input : string|number}
    const [pdtData , setPdtData] = useState<any>([]) ;
    const [firebackData , setFirebackData] = useState(null)

 

  const addpdt = (xyz: any) => {
  setPdtData( (prev :any) => {
    const exists = prev.some((item : any) => item.id === xyz.id);

    if (exists) {
     
      return prev.map((item : any) =>
        item.id === xyz.id ? xyz : item
      );
    } else {
      
      return [...prev, xyz];
    }
  });
};


     useEffect(()=>{
      console.log(pdtData)
     }, [pdtData])
    

  
    const handleDlt = (abc : any)=>{
  setPdtData(pdtData.filter((p : any)=> p.id !== abc))
}
  

const handleEdit = ( efg : any)=>{
  setFirebackData(pdtData.find((cObj :any)=>efg==cObj.id))


}


  

  return ( <>
  
  <FormCollection addpdt = {addpdt}  takebackData = {firebackData}/> 
    <TableControl     pdtList = {pdtData}  hanDlt={handleDlt}  hanEdit = {handleEdit} />
  
  </>
    

    
    
  )

}
  


export default App 
