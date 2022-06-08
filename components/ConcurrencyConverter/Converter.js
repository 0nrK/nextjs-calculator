import React, { useState } from 'react'

const Converter = () => {


    const [willBeConvertedCurr, setWillBeConvertedCurr] = useState('USD')
    const [toConvertedCurr, setToConvertedCurr] = useState('TRY')
    const [amount, setAmount] = useState(0)
    const [returnedAmount, setReturnedAmount] = useState()


    let myHeaders = new Headers()
    myHeaders.append('apikey', 'gvLDW0WTeMOZfn7qmdn4x0FEh7VZ12qH')

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    }

    function handleCurrChange(event) {
        event.preventDefault()
    }

    console.log(toConvertedCurr.toString());

    function fetchApi() {
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toConvertedCurr.toString()}&from=${willBeConvertedCurr.toString()}&amount=${amount}`, requestOptions)
            .then((response) => response.json())
            .then((data) => setReturnedAmount(data.result))
            .catch((err) => console.log(err))
    }
    return (
        <div className='flex flex-col bg-gray-800 p-3  h-2/3'>
            <h2 className='text-2xl text-center text-gray-200'>Currencies</h2>
            <div className='flex flex-col p-3 items-center '>
                <div className='flex mx-auto text-white  flex-col  space-y-3  '>
                    <div className='flex mx-auto rounded-md  bg-gray-600 flex-row '>
                        <select
                            onChange={(event) => setWillBeConvertedCurr(event.target.value)}
                            name='willBeConverted' >
                            <option value='USD'>USD</option>
                            <option value='EUR'>EUR</option>
                            <option value='TRY'>TRY</option>
                        </select>
                        <input
                            className='outline-none p-2 w-full  bg-gray-600'
                            onChange={(e) => setAmount(Number(e.target.value))}
                            type='text'></input>
                    </div>
                    <div className='flex rounded-md mx-auto   flex-row'>
                        <select
                            onChange={(event) => setToConvertedCurr(event.target.value)}
                            name='toConverted'   >
                            <option value='TRY'>TRY</option>
                            <option value='USD'>USD</option>
                            <option value='EUR'>EUR</option>
                        </select>
                        <input className='bg-gray-600 w-full outline-none p-2' readOnly value={returnedAmount || ''} type='text'></input>
                    </div>
                </div>

                <button onClick={fetchApi} className='px-8 mx-auto  py-3 rounded-md mt-4 bg-purple-600 text-white'>Convert</button>
            </div>
        </div>
    )
}

export default Converter