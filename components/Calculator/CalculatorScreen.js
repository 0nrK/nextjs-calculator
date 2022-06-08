import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const CalculatorScreen = () => {
    const values = useSelector((state) => state.screenValue.text)

    useEffect(() => {
    }, [values])

    return (
        <div className="h-40 p-4 text-bottom flex flex-col   text-white bg-gray-900">
            <span className='text-2xl mt-auto ml-auto'>{values}</span>
        </div>
    )
}

export default CalculatorScreen