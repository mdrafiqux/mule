import React from 'react';
import { useEffect, useState } from "react";


function GoToTop() {
    const [GoToTop, setToTop] =  useState(false);
   useEffect(()=> {
    window.addEventListener("scroll", ()=>{
        if(window.scrollY > 100){
            setToTop(true);
        } else {
            setToTop(false);
        }
    })
   }, [])

   const scrollUp = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
   }
  return (
    // <div className='top-btn' onClick={scrollUp}><i className="fas fa-arrow-circle-up"></i></div>
    <div className='top-btn'>
    {GoToTop && (
        <button onClick={scrollUp}><i className="fas fa-arrow-circle-up"></i></button>
    )}
    </div>
  )
 
}
 


export default GoToTop