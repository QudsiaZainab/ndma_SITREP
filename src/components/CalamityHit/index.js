import React from 'react'
import { useState, useEffect } from 'react';

export const CalamityHit = () => {
    const [calamityData, setCalamityData] = useState([]);

    useEffect(() => {
        // Create an array with sample data (replace this with your actual data)
        const sampleData = [
            {
                district: 'Islamabad',
                calamityHitDistricts: '89',
                affectedPopulation: 1000,
            },
            {
                district: 'Karachi',
                calamityHitDistricts: '7',
                affectedPopulation: 2000,
            },
            {
                district: 'Karachi',
                calamityHitDistricts: '7',
                affectedPopulation: 2000,
            },
            {
                district: 'Islamabad',
                calamityHitDistricts: '89',
                affectedPopulation: 1000,
            },
            {
                district: 'Karachi',
                calamityHitDistricts: '7',
                affectedPopulation: 2000,
            },
            {
                district: 'Karachi',
                calamityHitDistricts: '7',
                affectedPopulation: 2000,
            },
            // Add more data as needed
        ];

        // Set the sample data to the state
        setCalamityData(sampleData);
    }, []);

    const totalCalamityHitDistricts = calamityData.reduce((total, item) => total + parseInt(item.calamityHitDistricts), 0);
    const totalAffectedPopulation = calamityData.reduce((total, item) => total + item.affectedPopulation, 0);

    
  return (
    <div style = {{marginBottom: '2.5rem'}}>
             
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Calamity Hit Districts & Affected Population</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}} >District</th>
                        <th style = {{textAlign: 'center'}}>Calamity Hit Notified Districts</th>
                        <th style = {{textAlign: 'center'}}>Affected Population</th>
                    </tr>
                    <tbody id="calamityhitbdy">
                    {calamityData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center'}}>{item.district}</td>
                                <td style = {{textAlign: 'center'}}>{item.calamityHitDistricts}</td>
                                <td style = {{textAlign: 'center'}}>{item.affectedPopulation}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                        <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>Total</td>
                        <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{totalCalamityHitDistricts}</td>
                        <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{totalAffectedPopulation}</td>
                    </tfoot>
                </table>
            </div>
        </div>
  )
}
