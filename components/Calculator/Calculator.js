import React from 'react'
import CalculatorButtons from './CalculatorButtons'
import CalculatorScreen from './CalculatorScreen'

const Calculator = () => {
    return (
        <div className='flex max-w-64 flex-col'>
            <CalculatorScreen className='flex-2' />
            <CalculatorButtons className='flex-5' />
        </div>
    )
}

export default Calculator