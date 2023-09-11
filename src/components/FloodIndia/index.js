import React from 'react'
import { useState } from 'react'

const FloodIndia = () => {
    const [floodIndiaData, setFloodIndiaData] = useState([]);
    const FloodIndiaData = [
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 8768768,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 86786,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 86786876,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 878876,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: '23/09/2023',
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 768768,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 786768,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 786786,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        {
            river: 'Indus',
            dam: 'mangla dam',
            FullReserviorLevel: 7657657,
            liveStorageCapacity: 76788,
            currentLiveStorage: 7677576,
            currentLevel: 87876,
            inflow: 89,
            outflow: 776,
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Daily Flood/ Base Flow Data Obtained From India</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center', padding: '4px'}}>River</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Dam</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Full Reservoir Level</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Live Storage Capacity at FRL</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Current Live Storage (MAF)</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Current Level</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Inflow</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Outflow</th>
                    </tr>
                    <tbody id="fldindbdy">
                    {FloodIndiaData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.river}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.dam}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.FullReserviorLevel}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.liveStorageCapacity}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.currentLiveStorage}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.currentLevel}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.inflow}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.outflow}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default FloodIndia