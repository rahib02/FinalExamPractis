import React from 'react'
import Message from './Message/Message'

import Card from './Popular Courses/Card'
import Section1 from './Section1/Section1'
import './Home'
function Home() {
    return (
        <div className='home'>
            <Section1 />
            <Card />
            <Message />


        </div>
    )
}

export default Home