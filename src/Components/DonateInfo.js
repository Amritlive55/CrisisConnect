import React from 'react'
export default function DonateInfo({title, description, imageUrl, InfoUrl}) {
  return (
   //{const [title, description, imageUrl, newsUrl]= props;}
    <>
     <div className='my-3' >
     <div className="card my-3" style={{width: "22rem",height:"100vh"}}>
  {/*<img src="https://i.blogs.es/b2ccf8/mejores-ofertas-fin-de-semana-febrero-mediamarkt/840_560.jpeg" className="card-img-top" alt="..."/>*/}
  <img src= {!(imageUrl)?"https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning":imageUrl } className="card-img-top" style={{height:"18rem"}} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text"> {description}. </p>
   {/* <h5> Donate here: </h5>*/}
   {/* <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Frandomqr.com%2F&psig=AOvVaw3SC_adsmZrxEusgMrOpO3t&ust=1710651726234000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjvg7WA-IQDFQAAAAAdAAAAABAJ" style={{width: "15rem",height:"15rem"}}alt=""/>*/}
    <a href={InfoUrl} target ="_blank"  className = "btn btn-sm btn-dark">Donate here</a>

  </div>
</div>
      </div>
    </>
  )
}