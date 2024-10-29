"use client"
import React from 'react'
import Countdown from 'react-countdown'


const endingDate= new Date("2024-10-14")
const CountDown = () => {
    
  return (
   <Countdown date={endingDate} className='bg-yellow-300 font-bold text-5xl'/>
  )
}

export default CountDown