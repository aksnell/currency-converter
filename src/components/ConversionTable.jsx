import React, { useState, useEffect } from 'react'
import { ConversionRow } from './ConversionRow'

export default function ConversionTable() {
    const [ convertAmount, setConvertAmount ] = useState(null)

    return (
        <div className="conversition-table">
        <form>
            <label for='base'>USD:</label>
            <input type='text' id='base' name='base'></input>
        </form>
        <table>
            <tr>
                <th>Symbol</th>
                <th>Rate</th>
                <th>Value</th>
            </tr>
        </table>
        </div>

    )

}