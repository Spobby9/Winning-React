import { useState , useEffect} from "react";
import {  v4 as uuidv4} from "uuid" ;

export const FormCollection = ({addpdt , takebackData} : any)=>{

    type FormData = { name : string ; input : string|number ; id : string}
    
    
    const [formData, setFormData] = useState<FormData>({name : ''  , input : '' , id : ''  })
    const [error , setError ] = useState<string>(null)

   useEffect(() => {
  if (takebackData) {
    setFormData(takebackData);
    console.log(takebackData);
  }
}, [takebackData]);

  const handleFormData = (e :any)=>{ 
   
    const {name , value} = e.target ;

    setFormData({...formData , name : name , input : value  });

    console.log(typeof(value));

    if(value){
      setError("yo");
      console.log(error);

    }else {setError(null)}




    

  }

  const handleSubmit = (e :any)=>{
    e.preventDefault();
    let finalData = {...formData ,  id: formData.id || uuidv4() };
    
    addpdt(finalData);
    setFormData({name : ''  , input : '' , id : ''  })
  }



  return (
   <>

   <form  onSubmit={handleSubmit}>
    <h1>To Do List</h1>
    <input type='text' placeholder='Your Task' name='task' value={formData.input} onChange={handleFormData}></input>
    <p>{error}</p>
    <button type='submit' >Submit</button>

    


   </form>
   
   
   
   
   
   </>
  )

}