import React from 'react'
import Muledocs from './content.json';
const Stories = () => {
  return (
    <div>
     <h1> Mule Documentation</h1>
     {
     Muledocs && Muledocs.map ( stories => {
        return (
          <div key={stories.id}>
            {stories.title}
            
              {stories.tech && stories.tech.map(data => {
                return (
                  <div key={stories.id}>
                 -- {data.name}--
                  </div>
                )
              })}
           
          </div>
        )
      })
     }
      </div>
    
  )
}

export default Stories