import React from 'react'
import Converter from '../components/ConcurrencyConverter/Converter'
import Nav from '../components/Nav'

const Currency = () => {

    return (
        <div className=' m-12 min-w-72 h-screen'>
            <Nav />
            <Converter />
        </div>
    )
}

export default Currency