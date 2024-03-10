import React from 'react'
import SectionTitle from './SectionTitle'
import Services from '../data/Services'
import ServicesItem from './ServicesItem'

function Service() {
  return (
    <div className='py-12 '>
        <SectionTitle>Our Services</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {Services.map( service => (
                <ServicesItem 
                  key={service.title}
                  title={service.title}
                  description ={service.description}
                
                
                >
                  
                </ServicesItem>
            ))}

        </div>
    </div>
  )
}

export default Service