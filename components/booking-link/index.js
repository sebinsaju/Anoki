import React from 'react'
import { bookingLink } from '../../constants'
import Link from 'next/link'

const BookingLink = () => {    
  return (
    <div style={{backgroundColor:"red",position:"fixed",bottom:"30px",right:"20px",padding:"10px 15px",borderRadius:"5px",zIndex:"999"}} className='book-now'>
        <Link href={bookingLink} target="_blank" style={{color:"#fff"}} rel="noreferrer">Book Now</Link>
    </div>
  )
}

export default BookingLink