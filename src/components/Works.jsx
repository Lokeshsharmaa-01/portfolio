import React from 'react'
import SectionTitle from './SectionTitle'
import WorkItem from './WorkItem'
import works from '../data/works'

function Works() {
  return (
    <div className='py-12'>
        <SectionTitle id='works'>Recent Works</SectionTitle>
        <div>
          {works.map(work =>(
            <WorkItem 
              key={work.title}
              imgUrl={work.imgUrl}
              title={work.title}
              tech={work.tech}
              
              ></WorkItem>
          ))}
        </div>
    </div>
  )
}

export default Works