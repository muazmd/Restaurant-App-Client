import React from 'react'
import './card.scss'
import img1 from 'images/img1.jpeg'
export const Card = () => {
    return (
        <div className="card">
            <span className="card-header">  items</span>
            <img className="card-img" src={img1} alt=''/>
            <div className='card-info'> 
            <div className='card-info-detail'>
            <span>items asdas</span>
            <span className='card-info-detail-text'>  items items items items item sietem 
                </span>
            </div>
            <span> 10$</span>

            </div>
            <button className="card-btn">Order</button>
            
        </div>
    )
}
