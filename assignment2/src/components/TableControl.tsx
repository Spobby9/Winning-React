export const TableControl = ({pdtList , hanDlt , hanEdit}:any)=>{


   

    



  return(
    <>

    <table>
        <thead>
            <tr>
                <th>Task Name</th>
                <th>ID</th>
                <th>Edit Option</th>
                <th>Delete Option</th>
                
            </tr>
        </thead>


        <tbody>
            {pdtList.map((obj :any )=>{
                return(
                <tr key={obj.id}>
                    <td><button>{obj.input}</button></td>
                    <td>{obj.id}</td>
                    <td><button onClick={()=>hanEdit(obj.id)}>Edit</button></td>
                    <td><button onClick={()=>hanDlt(obj.id)}>Delete</button></td>
                </tr>)
            })}

            
        </tbody>
    </table>
    
    
    
    </>)
}



