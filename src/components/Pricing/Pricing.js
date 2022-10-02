import React  from "react"
import './Pricing.css'
import Card from '../Card/Card'
// import {useState} from 'react'

const  Pricing =()=>{
    // const [prices,setPrices] = useState('')
    const details = [
        {id:1, name:'Free',price:0,features:[
            'new features',
            'extra features',
            'mama bari abdar',
            'ja pai tai kahi',
            'chudani features'
        ]},
        {id:2, name:'Medium',price:500,features:[
            'new features',
            'extra features',
            'mama bari abdar',
            'ja pai tai kahi',
            'chudani features']
        },
        {id:3, name:'Premium',price:600,features:[
            'new features',
            'extra features',
            'mama bari abdar',
            'ja pai tai kahi',
            'chudani features',
        ]
        }
    ]
       
    return(
         <div className="g:m-5 md:m-6 sm:m-9">
            <h1>Best deal </h1>
       <div className="grid gap-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 m-8">
       {
            details.map((detail)=> <Card key={detail.id} detail = {detail}></Card>)
        }
       </div>
       <div>
       
       </div>
         </div>
    )
};

export default Pricing;