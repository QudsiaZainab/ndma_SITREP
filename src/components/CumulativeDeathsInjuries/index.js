import React from 'react'
import { useState } from 'react';

const CumulativeDeathsInjuries = () => {

    const [cumdhinjdata, setCumdhinjdata] = useState([]);
    const CumDhInjData = [
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        {
            province: 'Khyber Pakhtunkhwa',
            M: 6,
            F: 8,
            C: 8,
            Male: 9,
            Female: 8,
            Child: 9,
        },
        // Add more data as needed
    ];

    CumDhInjData.forEach(item => {
        item.T = item.M + item.F + item.C;
        item.Total = item.Male + item.Female+item.Child;
    });

    const T = CumDhInjData.reduce((total, item) => total + item.T, 0);
    const Total = CumDhInjData.reduce((total, item) => total + item.Total, 0);
    const M = CumDhInjData.reduce((total, item) => total + item.M, 0);
    const F = CumDhInjData.reduce((total, item) => total + item.F, 0);
    const C = CumDhInjData.reduce((total, item) => total + item.C, 0);
    const Male = CumDhInjData.reduce((total, item) => total + item.Male, 0);
    const Female = CumDhInjData.reduce((total, item) => total + item.Female, 0);
    const Child = CumDhInjData.reduce((total, item) => total + item.Child, 0);

    return (
        <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Cumulative Casualties - Deaths / Injuries </h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}}>Province/Region</th>
                        <th style = {{textAlign: 'center'}} colSpan="4">Deaths</th>
                        <th style = {{textAlign: 'center'}} colSpan="4">Injured</th>
                    </tr>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th></th>
                        <th style = {{textAlign: 'center'}}>M</th>
                        <th style = {{textAlign: 'center'}}>F</th>
                        <th style = {{textAlign: 'center'}}>C</th>
                        <th style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>T</th>
                        <th style = {{textAlign: 'center'}}>M</th>
                        <th style = {{textAlign: 'center'}}>F</th>
                        <th style = {{textAlign: 'center'}}>C</th>
                        <th style = {{textAlign: 'center',  fontWeight: 'bold', color: '#EF4444'}}>T</th>
                    </tr>
                    <tbody id="cumdthinjbdy">
                    {CumDhInjData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center'}}>{item.province}</td>
                                <td style = {{textAlign: 'center'}}>{item.M}</td>
                                <td style = {{textAlign: 'center'}}>{item.F}</td>
                                <td style = {{textAlign: 'center'}}>{item.C}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{item.T}</td>
                                <td style = {{textAlign: 'center'}}>{item.Male}</td>
                                <td style = {{textAlign: 'center'}}>{item.Female}</td>
                                <td style = {{textAlign: 'center'}}>{item.Child}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{item.Total}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                        <tr id="tr2">
                            <td  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                Total
                            </td>
                            <td id="roadstd1" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {M}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {F}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {C}
                            </td>
                            <td id="roadstd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {T}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Male}
                            </td>
                            <td id="roadstd3" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Female}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Child}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Total}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default CumulativeDeathsInjuries