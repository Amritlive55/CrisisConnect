import React from 'react'
import DonateInfo from './DonateInfo'

export default function Donate() {
  return (
    <div>
    
      <div className="container my-3 ">
      <h1 className='text-center'> Donate For A Better World!</h1>

      <div className='row row-cols-3"' >
      <div class="col">
      <DonateInfo title={"Cyclone Yaas (2021)"} description={"In May 2021, Cyclone Yaas made landfall in the eastern states of Odisha and West Bengal. The cyclone caused widespread destruction, including heavy rainfall, storm surges, and strong winds, leading to significant damage to infrastructure, crops, and loss of life."} imageUrl={"https://assets.telegraphindia.com/telegraph/2021/May/1622140659_2021_5img27_may_2021_pti05_27_2021_000089b.jpg"} InfoUrl={""}/>
      </div>
      <div class="col">
      <DonateInfo title={"Uttarakhand Glacier Burst (2021)"} description={"In February 2021, a glacier burst occurred in the Chamoli district of Uttarakhand. The resulting flash floods and debris flow caused widespread devastation, with multiple casualties and damage to hydropower projects, bridges, and roads in the region."} imageUrl={"https://cdn.cnn.com/cnnnext/dam/assets/210208014339-01-india-glacier-0208-super-tease.jpg"} InfoUrl={""}/>
      </div>
      <div class="col">
      <DonateInfo title={"Cyclone Nivar (2020)"} description={"In November 2020, Cyclone Nivar hit the southeastern coast of India, affecting the states of Tamil Nadu and Puducherry. The cyclone brought heavy rainfall, strong winds, and storm surges, leading to flooding in several areas and causing significant damage to infrastructure and agriculture."} imageUrl={"https://s.w-x.co/in-cyclone.jpg"} InfoUrl={""}/>
      </div>
        </div>

        <div className='row row-cols-3"' >
      <div class="col">
      <DonateInfo title={"Assam Floods (2020)"} description={" Every year, the northeastern state of Assam faces severe flooding during the monsoon season. In 2020, the floods were particularly devastating, affecting millions of people and causing widespread damage to homes, crops, and infrastructure. The floods also led to the displacement of a large number of people."} imageUrl={"https://tse1.mm.bing.net/th?id=OIP.-ooEBpj6beZuXlnb7_IZVAHaE8&pid=Api&P=0&h=180"} InfoUrl={""}/>
      </div>
      <div class="col">
      <DonateInfo title={"Kerala Floods (2019)"} description={"In August 2019, the state of Kerala experienced devastating floods due to heavy monsoon rains. The floods caused landslides, widespread flooding, and numerous casualties. Thousands of people were displaced, and infrastructure, including roads, bridges, and houses, suffered significant damage."} imageUrl={"https://static01.nyt.com/images/2016/04/11/world/11temple02/11temple02-superJumbo.jpg?quality=90&auto=webp"} InfoUrl={""}/>
      </div>
      <div class="col">
      <DonateInfo title={"Cyclone Amphan (2020)"}description={"In May 2020, Cyclone Amphan struck the eastern coast of India, primarily affecting the states of West Bengal and Odisha. It was one of the strongest cyclones to hit the region in recent years. The cyclone caused extensive damage with its powerful winds, heavy rainfall, and storm surges. It resulted in the loss of many lives, widespread destruction of infrastructure."} imageUrl={"https://sharemylesson.com/sites/default/files/blog/iStock-1062305448.jpg"} InfoUrl={""}/>
      </div>
        </div>

     </div>
    </div>
    
  )
}
