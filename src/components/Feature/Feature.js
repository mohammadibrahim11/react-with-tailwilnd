import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature =(props)=>{
         const {feature} =props

    return(
        <div className='flex justify-start align-middle p-1 mt-3 gap-1'>
            <CheckCircleIcon className="h-5 w-5 text-blue-500"/>
          <p>
            {feature}
          </p>
       
        </div>
    )
}
export default Feature;