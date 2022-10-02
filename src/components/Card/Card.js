
import React from 'react'
import './Card.css'
import Feature from '../Feature/Feature'
const Card = ({detail})=>{
    const {name,price,features}=detail
 console.log(detail);
    return (
    
           <div className='bg-purple-700 rounded p-6'>
                <h1>
                <span className="text-3xl font-bold text-white ">
                    ${price}
                </span>
                <span className='text-white'>
                    /mon
                </span>
                </h1>
                <h1 className='font-bold text-orange-400'>{name}</h1>
               {features.map((feature)=> <Feature feature={feature}></Feature>)}
               <button className='border rounded m-2 pl-6 pr-6 bg-orange-400 border-0'>buy</button>
        </div>
    
    )
}

export default Card;