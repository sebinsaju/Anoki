import React, { useEffect, useState } from 'react'
import BookingLink from '../booking-link'
import ChatBoat from '../chat-boat'
import Footer from '../footer'
import Header from '../header'
import { useRouter } from 'next/router'

const Layout = (props) => {
    const[hasPadding,setHasPadding] = useState(true);
    const router = useRouter();
    useEffect(()=>{
        if(router.route =="/"){
            setHasPadding(false)
        }else{
            setHasPadding(true)
        }
    },[router.route])
    return <div>
        <Header />
        <ChatBoat />
        <BookingLink />
        <div className={`content ${hasPadding?'padding':""}`}>
        {props.children}
        </div>
        <Footer />
    </div>
}

export default Layout