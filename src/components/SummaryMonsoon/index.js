import React from 'react'
import { useState } from 'react'

const SummaryMonsson = () => {
    const [summarymonsoon, setSummaryMonsoon] = useState([]);
    const SummaryData = [
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        {
            province: 'GB',
            average: 678,
            monsoon: 656,
            departure: 766,
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Summary Pre- Monsoon and Monsoon Spells</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center', padding: '4px'}}>Province/Region</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>30 Years Average (mm)</th>
                        <th style={{textAlign: 'center', padding: '4px'}} >Rainfall Monsoon-22 (mm)</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Departure (%) </th>
                    </tr>
                    <tbody id="summnsoontablbdy">
                    {SummaryData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.average}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.rainfall}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.departure}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default SummaryMonsson