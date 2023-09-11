import React from 'react'
import './style.css'
import { useState } from 'react'

const PdmaRelief = () => {
    const [pdmareliefdata, setNdmareliefdata] = useState([]);
    const PDMAReliefData = [
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        // Add more data as needed
    ];

    const items = [
        'Tents',								
'Blankets/ Quilt/ Sleeping Bags',								
'Net Mosquito/ animal',							
'Tarpaulin'	,							
'Plastic Mats'	,							
'Jerry Can'	,							
'Water tank/ Bottle'	,							
'Water Tanks/ Filter',								
'Water Cooler'	,							
'Food Packs',								
'Cooked Food',								
'Gas Cylinders',								
'Kitchen Set	',							
'First Aid Kits',								
'Hygiene Kit',							
'Beds/Chapai',								
'Life Saving Jacket',								
'De-watering Pumps'	,							
'Boats',
    ]

    PDMAReliefData.forEach(item => {
        item.Total = item.Punjab + item.Sindh + item.KPK + item.GB + item.Balochistan + item.Kashmir;
    });

    return (
        <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem' }}>Relief provided by PDMA </h2>

            <div style={{ overflowX: 'auto' }}>
                <table style={{ fontSize: '0.55rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto' }}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>Relief Items</th>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>Punjab</th>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>Sindh</th>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>KPK</th>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>GB</th>
                        <th style={{ textAlign: 'center', margin: '4px',paddingLeft: '2px', paddingRight: '2px' }}>Balochistan</th>
                        <th style={{ textAlign: 'center', margin: '4px', paddingLeft: '2px', paddingRight: '2px' }}>Kashmir</th>
                        <th style={{ textAlign: 'center', color: '#EF4444', margin: '4px',paddingLeft: '2px', paddingRight: '2px' }}>Total</th>
                    </tr>
                    <tbody id="pdmrelftblbdy">
                    {PDMAReliefData.map((item, index) => (
                            <tr key={index}>
                                <th style={{ textAlign: 'center', backgroundColor: '#F3F4F6', paddingLeft: '2px', paddingRight: '2px' }} >{items[index]}</th>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.Punjab}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.Sindh}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.KPK}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.GB}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.Balochistan}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.Kashmir}</td>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px', color: '#EF4444', fontWeight: 'bold' }}>{item.Total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PdmaRelief