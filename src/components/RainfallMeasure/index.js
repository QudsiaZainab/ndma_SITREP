import React from 'react'
import { useState } from 'react'

const RainfallMeasure = () => {
    const [rainfallData, setRainfallData] = useState([]);
    const RainfallData = [
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        {
            province: 'GB',
            station: 'Mangla Dam',
            rainfall: 878978,
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Rainfall Last 24 Hours</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}}>Province/Region</th>
                        <th style = {{textAlign: 'center'}}>Station</th>
                        <th style = {{textAlign: 'center'}} >Rainfall (mm)</th>
                    </tr>
                    <tbody id="rainfallmsrbdy">
                    {RainfallData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.station}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.rainfall}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default RainfallMeasure