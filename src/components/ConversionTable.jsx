import React, { useState, useEffect } from 'react'
import { ConversionRow } from './ConversionRow'

export default function ConversionTable() {
    const [ convertAmount, setConvertAmount ] = useState(null)

    return (
        <form>
            <label for='base'>USD:</label>
            <input type='text' id='base' name='base'></input>
        </form>
    )

}