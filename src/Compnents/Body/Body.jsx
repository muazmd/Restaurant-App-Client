import React from 'react'
import Fade from 'react-reveal/Fade'; 
import './Body.scss';
import img6 from'images/img6.jpeg'
import img7 from 'images/img7.jpeg'
import img8 from 'images/img8.jpeg'
import img9 from 'images/img9.jpeg'
import img10 from 'images/img10.jpeg'



export const Body = () => {
    const items = [
        {
            img: img6,
            desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
        },
        {
          img: img7,
          desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        img: img8,
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
    },
    {
      img: img9,
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
  },
  {
    img: img10,
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passagesand more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
}


] 

    return (
        <div className="Body">
          { 
            items.map((item)=> {
            return items.indexOf(item)%2===0 ?
              
            <Fade left key={item.img}> <div className="Body-slider">
             
              <img src={item.img} alt=''/>
              <h3>{item.desc}</h3>
              </div></Fade>
              :
              <Fade right key={item.img}> <div className="Body-slider">
             
              <h3>{item.desc}</h3>
              <img src={item.img} alt=''/>
              </div></Fade>

            })
          }
            

            
        </div>
    )
}
