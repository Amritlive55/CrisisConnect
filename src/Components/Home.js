import React from 'react'
import Card from './Card.js'
export default function Home() {
  return (
    <>
    {/*<div style={{ 
      backgroundImage: `url('https://source.unsplash.com/300x200/?disaster,earhquakes,thunderandlightning')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '50vh'
      }}>
      <h1 className='text-center' style={{paddingTop:'60px'}}> CrisisConnect </h1>
      <p className='text-center'> Uniting For Disater Relief</p>
    </div>*/}

<div id="carouselExampleDark" className="carousel carousel-dark slide" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1573144693925-249c8159d330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWwlMjBkaXNhc3RlcnxlbnwwfHwwfHx8MA%3D%3D" className="d-block w-100"  style={{height:"60vh"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-center' style={{paddingTop:'60px',color:"white"}}> CrisisConnect </h1>
      <p className='text-center' style={{color:"white"}}> Uniting For Disater Relief</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000" >
      <img src="https://images.unsplash.com/photo-1600336153113-d66c79de3e91?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"60vh"}}alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-center' style={{paddingTop:'60px',color:"white"}}> CrisisConnect </h1>
      <p className='text-center' style={{color:"white"}}> Uniting For Disater Relief</p>
      </div>
    </div>
    <div className="carousel-item" >
      <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" style={{height:"60vh"}}alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1 className='text-center' style={{paddingTop:'60px',color:"white"}}> CrisisConnect </h1>
      <p className='text-center' style={{color:"white"}}> Uniting For Disater Relief</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className='row row-cols-3"'>
      <div class="col" >
      <Card More={"Information and Training"} description={""} imageUrl={"https://plus.unsplash.com/premium_photo-1682097265453-2f1b6861019c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} InfoUrl={"https://www.ready.gov/earthquakes"} />
      </div>
      <div class="col">
      <Card More={"Donation Platform"} description={""} imageUrl={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb258ZW58MHx8MHx8fDA"} InfoUrl={"https://www.ready.gov/tsunamis"}/>
      </div>
      <div class="col">
      <Card More={"Updates and News"} description={""} imageUrl={"https://images.unsplash.com/photo-1611174797136-5e167ea90d6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpcmUlMjBkaXNhc3RlcnxlbnwwfHwwfHx8MA%3D%3D"} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
      </div>
      <div class="col">
      <Card More={"Building Community Support"} description={""} imageUrl={"https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA"} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
      </div>
        </div>


    </>
  )
}
