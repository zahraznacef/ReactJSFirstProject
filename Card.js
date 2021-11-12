const Card = ()=>{
    const data = [
     {
       header:"For patients",
       content:"Find a doctor, book a visit and solve any health-related doubt",
       hyperlink:"Choose country"
     },
     {
       header:"For doctors",
       content:"Save time managing visits and cut no-shows by half",
       hyperlink:"Choose country"
     },
     {
       header:"For clinics",
       content:"Deliver an exceptional patient experience in your clinic",
       hyperlink:"2 to 20 specialists"
     }
   ]
   return(
     <div className="card-section">
     {data.map(el=>(
  <div className="Card">
       <p>{el.header}</p>
       <p>{el.content}</p>
       <a href="">{el.hyperlink} </a>
     </div>
     ))}
    
     </div>
   ) 
 } 
 
 export default Card