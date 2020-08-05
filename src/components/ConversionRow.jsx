import React, { useState, useEffect } from 'react'

export default function ConversionRow({ currencySymbol, convertRate, convertBase }) {
    
    const [ rate, setRate ] = useState(null)
    const [ symbol, setSymbol ] = useState(null)

    // Set conversion rate once on component mount.
    useEffect(() => {
        setSymbol(currencySymbol)
        setRate(convertRate)
    }, [])

    return (
        <tr className="conversion-row">
            <td className="conversion-data">{symbol}:</td>
            <td className="conversion-data">{rate}</td>
            <td className="conversion-data">{(!isNaN(convertBase)) ? (convertBase * rate).toFixed(2) : 'Error'}</td>
        </tr>
    )
}