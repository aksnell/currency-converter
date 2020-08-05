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
        <div className="conversion-row">
            <span>{symbol}:</span>
            <span>{rate}</span>
            <span>{convertBase * rate}</span>
        </div>
    )
}