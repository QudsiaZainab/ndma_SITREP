import React from 'react'
import { useState } from 'react'

const HumitarianagenciesRelief = () => {
    const [humitarianreliefdata, setHumitarianReliefData] = useState([]);
    const humitarianReliefData = [
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        {
            Province: 'Gilgit Baltistan',
            district: 'Jhelum',
            reliefItem: 'Tent',
            quantity: 7,
            organization: 'Akhuwat',
        },
        // Add more data as needed
    ];
  return (
    <div  style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Relief provided by Humitarian agencies</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center'}}>Province/Region</th>
                        <th style={{textAlign: 'center'}}>District</th>
                        <th style={{textAlign: 'center'}}>Relief Items</th>
                        <th style={{textAlign: 'center'}}>Quantity</th>
                        <th style={{textAlign: 'center'}}>Organization</th>
                    </tr>
                    <tbody id="damagetablbdy">
                    {humitarianReliefData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.district}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.reliefItem}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.quantity}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.organization}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default HumitarianagenciesRelief
