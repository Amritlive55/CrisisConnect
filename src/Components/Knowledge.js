import React from 'react'
import KnowledgeInfo from './KnowledgeInfo'

export default function Knowledge() {
  return ( 
    <div>
        <div className="container my-3 ">
      <h1 className='text-center'> Disasters and Emergencies</h1>

      <div className='row row-cols-3"' >
      <div class="col">
      <KnowledgeInfo title={"Earthquake"} description={"The earth trembled violently, toppling structures and instilling fear in hearts"} imageUrl={"https://images.unsplash.com/photo-1601931163309-fe9459564c03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWFydGhxdWFrZXxlbnwwfHwwfHx8MA%3D%3D"} InfoUrl={"https://www.ready.gov/earthquakes"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Tsunami"} description={"A colossal wall of water surged inland, engulfing everything in its path with relentless force"} imageUrl={"https://plus.unsplash.com/premium_photo-1664304463486-26246ff4cb8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHN1bmFtaXxlbnwwfHwwfHx8MA%3D%3D"} InfoUrl={"https://www.ready.gov/tsunamis"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Thunderstorms and Lightning"} description={"Bolts of lightning cracked through the air, followed by the booming chorus of thunder, painting the sky with an electrifying display."} imageUrl={"https://images.unsplash.com/photo-1516490981167-dc990a242afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRodW5kZXJzdHJvbSUyMGFuZCUyMGxpZ2h0bmluZ3xlbnwwfHwwfHx8MA%3D%3D"} InfoUrl={"https://www.ready.gov/thunderstorms-lightning"}/>
      </div>
        </div>

        <div className='row row-cols-3"' >
      <div class="col">
      <KnowledgeInfo title={"Drought"} description={"Under a relentless sun, parched earth cracked and crops withered, as drought tightened its grip on the land"} imageUrl={"https://images.unsplash.com/photo-1632934622499-3ebf470f8b7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyb3VnaHR8ZW58MHx8MHx8fDA"} InfoUrl={"https://www.ready.gov/drought"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Floods"} description={"Rivers overflowed their banks, swallowing everything in their path, as floods wreaked havoc on communities, leaving devastation in their wak"} imageUrl={"https://images.unsplash.com/photo-1547683905-f686c993aae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvb2RzfGVufDB8fDB8fHww"} InfoUrl={"https://www.ready.gov/floods"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Wildfire"} description={"Smoke billowed ominously as flames danced through the treetops, leaving a scorched trail of destruction in the wake of a relentless wildfire"} imageUrl={"https://images.unsplash.com/photo-1572204097183-e1ab140342ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2lsZGZpcmV8ZW58MHx8MHx8fDA"} InfoUrl={"https://www.ready.gov/wildfires"}/>
      </div>
        </div>
        
        <div className='row row-cols-3"' >
      <div class="col">
      <KnowledgeInfo title={"Hurricane"} description={"A monstrous tempest churned the ocean, unleashing chaos as a hurricane's forceful winds and torrential rains wreaked havoc on communities."} imageUrl={"https://images.unsplash.com/photo-1558467530-066a8c4e6832?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aHVycmljYW5lc3xlbnwwfHwwfHx8MA"} InfoUrl={"https://www.ready.gov/hurricanes"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Landslides and Debris flow"} description={"Mountainsides gave way with a deafening roar, sending cascades of earth and rock tumbling down in a destructive avalanche"} imageUrl={"https://images.unsplash.com/photo-1529353975874-2017328a6ee9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhbmRzbGlkZXN8ZW58MHx8MHx8fDA"} InfoUrl={"https://www.ready.gov/landslides-debris-flow"}/>
      </div>
      <div class="col">
      <KnowledgeInfo title={"Cyclone"} description={"Nature's wrath spun wildly, as a cyclone's ferocious winds tore through coastal landscapes, leaving a trail of destruction."} imageUrl={"https://media.istockphoto.com/id/1055055602/photo/tropical-cyclone-wilma-satellite-view-elements-of-this-image-furnished-by-nasa.jpg?s=1024x1024&w=is&k=20&c=ZtYh-764GXp0zOUBSgCZcWr7Wyva6_dQXUJHuSv0_W0="} InfoUrl={"https://www.ready.gov/explosions"}/>
      </div>
        </div>
        

    </div>
    </div>
  )
}
