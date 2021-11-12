const MapCard = ()=>{
    const data = [
   {
     img:"https://media.timeout.com/images/105741309/image.jpg",
     placename:"Warsaw",
   },
   {
     img:"https://www.barcelona-metropolitan.com/downloads/19222/download/Park-Guell-in-Barcelona-Spain.jpg?cb=296a2572b93a0e5444b602f50e854c37",
     placename:"Barcelona",
   },
   {
     img:"https://www.okvoyage.com/wp-content/uploads/2016/02/istanbul-sultanahmet.jpg",
     placename:"Istanbul",
   },
   {
     img:"https://www.okvoyage.com/wp-content/uploads/2019/10/vatican-rome-1-1024x678.jpg",
     placename:"Rome",
   }
 ]
 return (
<div className="flex flexwrap">
   {data.map(e=>(
         <div className="mapcard">
     <img src={e.img} height="200px" width="200px"/>
     <div className="flex jcspacearound">
         <p className="map-p">{e.placename}</p>
         <a href="" className="map-butt">See openings</a>
     </div>
      </div>
   ))}
   </div>
  
 )
}

export default MapCard