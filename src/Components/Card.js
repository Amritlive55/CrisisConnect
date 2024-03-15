import React from 'react'
export default function Card({title, description, imageUrl, InfoUrl,More}) {
  return (
   //{const [title, description, imageUrl, newsUrl]= props;}
    <>
     <div className='my-3' >
     <div className="card my-3" style={{width: "18rem",height:"40vh"}}>
  {/*<img src="https://i.blogs.es/b2ccf8/mejores-ofertas-fin-de-semana-febrero-mediamarkt/840_560.jpeg" className="card-img-top" alt="..."/>*/}
  <img src= {!(imageUrl)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl } className="card-img-top" style={{height:"30vh"}} alt="..."/>
  <div className="card-body">
  <a href={InfoUrl} target ="_blank"  className = "btn btn-sm btn-dark">{More}</a>
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {description} </p>
    
  </div>
</div>
      </div>
    </>
  )
}
