import React from 'react'
import '../style/card.css'

const Card = ({formData}) => {
  return (
        formData.map((data,index) => (
            <div key={index} className='card'>
            <div className="card-top">
                <img src={data.imgUrl} alt="" />
            </div>
            <div className="card-bottom">
                <h2>{data.name}</h2>
                <div className="user-data">
                     <h5>{data.role}</h5>
                     <p>{data.email}</p>
                </div>
            </div>
        </div>
        ))
  )
}

export default Card