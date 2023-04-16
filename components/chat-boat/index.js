import Link from 'next/link';
import React, { useState } from 'react'

const ChatBoat = () => {
    const[toggle,setToggle]= useState(false);
    const clickHandler = () => {
        setToggle(!toggle)
    }
    return (
        <div style={{position:"fixed",right:"30px",bottom:"90px",zIndex:"999"}} className=" text-right">
            <div onClick={clickHandler} style={{cursor:"pointer"}}><img src='/whatsapp.png' alt='whatsapp-icon' style={{width:"60px",height:"60px"}}/></div>
            {toggle && <div className='number-list py-2' style={{background:"#fff",borderRadius:"10px"}}>
                <div className='px-3'><Link href="https://wa.me/9447335556"><a target="_blank">+91 94473 35556</a></Link></div>
                <div className='px-3'><Link href="https://wa.me/82812 70644"><a target="_blank">+91 82812 70644</a></Link></div>
            </div>}
        </div>
    )
}

export default ChatBoat