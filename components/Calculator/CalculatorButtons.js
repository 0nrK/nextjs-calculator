import React, { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'
import { useDispatch } from 'react-redux'
import { updateScreenValue } from '../../redux/screenValueSlice'

const CalculatorButtons = () => {


    const [mathArr, setMathArr] = useState(['0'])
    const dispatch = useDispatch()

    function addToMathArr(event) {
        if (
            typeof event.target.value !== 'undefined'
            && event.target.value !== ''
        ) {
            setMathArr([...mathArr, event.target.value])
        }
    }

    function calculate() {


        const result = evaluate(mathArr.join(''))


        let resultArr = []

        let resultString = result.toString()

        for (let i = 0; i < resultString.length; i++) {
            resultArr.push(resultString[i])
        }

        setMathArr(resultArr)
    }

    function deleteChar() {
        let mutatedArr = mathArr
        mutatedArr.pop()
        console.log(mutatedArr);
        setMathArr(() => mutatedArr)
    }

    useEffect(() => {
        dispatch(updateScreenValue(mathArr.join('')))
    }, [mathArr])

    return (
        <div onClick={(event) => addToMathArr(event)} className='space-y-2 w-full flex  flex-wrap  p-3 bg-gray-700 text-white'>
            <div className="flex space-x-2 w-full flex-row">
                <button onClick={() => setMathArr([])} className="flex-1 p-3 w-12 h-12 rounded-md  bg-red-700">C</button>
                <button onClick={deleteChar} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-600">Del</button>
                <button className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-600">%</button>
                <button value={'/'} className="flex-1 p-3 w-12 h-12 rounded-md bg-purple-700">/</button>
            </div>
            <div className="flex space-x-2 w-full flex-row">
                <button value={'7'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">7</button>
                <button value={'8'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">8</button>
                <button value={'9'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">9</button>
                <button value={'*'} className="flex-1 p-3 w-12 h-12 rounded-md bg-purple-700">x</button>
            </div>
            <div className="flex space-x-2 w-full flex-row">
                <button value={'4'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">4</button>
                <button value={'5'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">5</button>
                <button value={'6'} className="flex-1 p-3 w-12 h-12 rounded-md bg-gray-800">6</button>
                <button value={'-'} className="flex-1 p-3 w-12 h-12 rounded-md bg-purple-700">-</button>
            </div>
            <div className="flex space-x-2 w-full flex-row">
                <button value={'1'} className="flex-1 p-3  h-12 rounded-md bg-gray-800">1</button>
                <button value={'2'} className="flex-1 p-3  h-12 rounded-md bg-gray-800">2</button>
                <button value={'3'} className="flex-1 p-3  h-12 rounded-md bg-gray-800">3</button>
                <button value={'+'} className="flex-1 p-3  h-12 rounded-md bg-purple-700">+</button>
            </div>
            <div className="flex flex-row w-full space-x-5 ">
                <button value={'0'} className="p-1 flex-auto w-20 h-12 rounded-md bg-gray-800">0</button>
                <button value={'.'} className="p-1 flex-1 w-12 h-12 rounded-md bg-gray-800">.</button>
                <button onClick={mathArr.length > 0 ? calculate : null} className="flex-1 p-1 w-12 h-12 rounded-md bg-blue-700">=</button>
            </div>
        </div>
    )
}

export default CalculatorButtons