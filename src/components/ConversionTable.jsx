import React, { useState, useEffect } from 'react'
import ConversionRow from './ConversionRow'

export default function ConversionTable() {
    const [ inputAmount, setInputAmount ] = useState(0.00)
    const [ conversionRates, setConversionRates ] = useState(null)

    useEffect(() => {
        fetch('https://api.ratesapi.io/api/latest?base=USD')
        .then(resp => resp.json())
        .then(json => {
            console.log(json.rates)
            setConversionRates(json.rates)
        })
    }, [])

    const handleInput = (e) => {
        setInputAmount(e.target.value)
    }

    return (
        <div className="conversion-table">
        <form>
            <label className="conversion-table-label" for='base'><strong>USD:</strong></label>
            <input className="conversion-table-input" type='text' id='base' name='base' value={inputAmount} target="_self" onInput={handleInput}></input>
        </form>
        <table>
            <caption>USD Conversion Chart</caption>
            <tr className="conversion-table-headers">
                <th className="conversion-table-header">Symbol</th>
                <th className="conversion-table-header">Rate</th>
                <th className="conversion-table-header">Value</th>
            </tr>
            { (conversionRates !== null) ? Object.entries(conversionRates).map(([symbol, rate]) => {
                return <ConversionRow id={symbol} currencySymbol={symbol} convertRate={rate.toFixed(2)} convertBase={inputAmount}/>
            }) : <span>Loading</span>}
        </table>
        </div>

    )

}