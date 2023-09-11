import React from 'react'
import './style.css';
import { useState } from 'react';

const NdmaRelief = () => {
    const [ndmareliefdata, setNdmareliefdata] = useState([]);
    const NDMAReliefData = [
        {
            Islamabad: 78,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 98,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 98,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 99,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 9,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        {
            Islamabad: 89,
            Punjab: 7,
            Sindh: 8767,
            KPK: 78,
            GB: 7,
            Balochistan: 78,
            Kashmir: 78,
        },
        // Add more data as needed
    ];


    const items = ['Tarpaulin', 'Ration (Tons)', 'Mosquito Nets',
        'Blanket',
        'Hygiene Kit',
        'Kitchen Set',
        'Food Packs',
        'First Aid Kit',
        'Generator',
        'Chemical Spray Machine',
        'Jery Can',
        'Sleeping Bag',
        'De-watering pumps',
        'Life Saving Jacket',
    ]

    NDMAReliefData.forEach(item => {
        item.Total = item.Islamabad + item.Punjab + item.Sindh + item.KPK + item.GB + item.Balochistan + item.Kashmir;
    });

    return (
        <div style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem' }}>Relief provided by NDMA </h2>
            <div style={{ overflowX: 'auto' }}>
                <table style={{ fontSize: '0.55rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto' }}>
                    <tr style={{ backgroundColor: '#F3F4F6' }}>
                        <th style={{ textAlign: 'center' }}>Relief Items</th>
                        <th style={{ textAlign: 'center' }}>Islamabad</th>
                        <th style={{ textAlign: 'center' }}>Punjab</th>
                        <th style={{ textAlign: 'center' }}>Sindh</th>
                        <th style={{ textAlign: 'center' }}>KPK</th>
                        <th style={{ textAlign: 'center' }}>GB</th>
                        <th style={{ textAlign: 'center' }}>Balochistan</th>
                        <th style={{ textAlign: 'center' }}>Kashmir</th>
                        <th style={{ textAlign: 'center', color: '#EF4444' }}>Total</th>
                    </tr>
                    <tbody id="roadstablbdy">
                        {NDMAReliefData.map((item, index) => (
                            <tr key={index}>
                                <th style={{ textAlign: 'center', backgroundColor: '#F3F4F6', paddingLeft: '2px', paddingRight: '2px' }} >{items[index]}</th>
                                <td style={{ textAlign: 'center', paddingLeft: '2px', paddingRight: '2px' }}>{item.Islamabad}</td>
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

export default NdmaRelief