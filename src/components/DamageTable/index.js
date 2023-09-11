

import React from 'react';
import { useState } from 'react';

function DamageTable() {

    const [damagetabledata, setDamagetabledata] = useState([]);
    const damageTableData = [
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            District: 'KMandi Bahawaldins',
            Partial: 7,
            Full: 5,
            P: 8,
            F: 8,
            Livestock: 5,
        },
        // Add more data as needed
    ];

    damageTableData.forEach(item => {
        item.T = item.P + item.F;
        item.Total = item.Partial + item.Full;
    });

    const P = damageTableData.reduce((total, item) => total + item.P, 0);
    const F = damageTableData.reduce((total, item) => total + item.F, 0);
    const T = damageTableData.reduce((total, item) => total + item.T, 0);
    const Partial = damageTableData.reduce((total, item) => total + item.Partial, 0);
    const Full = damageTableData.reduce((total, item) => total + item.Full, 0);
    const Total = damageTableData.reduce((total, item) => total + item.Total, 0);
    const Livestock = damageTableData.reduce((total,item) => total + item.Livestock,0);

    return (
        <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', textDecoration: 'underline', fontWeight: 'bold', marginBottom: '0.5rem'}} >Houses Damaged and Livestock Perished</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.55rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}}  >Province/Region</th>
                        <th style = {{textAlign: 'center'}} >Districts</th>
                        <th style = {{textAlign: 'center'}} colSpan="3">House Damage</th>
                        <th style = {{textAlign: 'center'}} colSpan="3">Other Buildings Damage</th>
                        <th style = {{textAlign: 'center'}} >Livestock</th>
                    </tr>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th></th>
                        <th></th>
                        <th style = {{textAlign: 'center'}}>Partial</th>
                        <th style = {{textAlign: 'center'}}>Full</th>
                        <th style = {{textAlign: 'center', color: '#EF4444'}}>Total</th>
                        <th style = {{textAlign: 'center'}}>Partial</th>
                        <th style = {{textAlign: 'center'}}>Full</th>
                        <th style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>Total</th>
                        <th></th>
                    </tr>
                    <tbody id="damagetablbdy">
                    {damageTableData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center'}}>{item.District}</td>
                                <td style = {{textAlign: 'center'}}>{item.Partial}</td>
                                <td style = {{textAlign: 'center'}}>{item.Full}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{item.Total}</td>
                                <td style = {{textAlign: 'center'}}>{item.P}</td>
                                <td style = {{textAlign: 'center'}}>{item.F}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{item.T}</td>
                                <td style = {{textAlign: 'center'}}>{item.Livestock}</td>
                            </tr>
                        ))}

                    </tbody>
                    <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                        <tr >
                            <td colSpan="2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                Total
                            </td>
                            <td id="damagetd1"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {P}
                            </td>
                            <td id="damagetd2"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {F}
                            </td>
                            <td id="damagetd3"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {T}
                            </td>
                            <td id="damagetd4"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Partial}
                            </td>
                            <td id="damagetd2"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Full}
                            </td>
                            <td id="damagetd3"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Total}
                            </td>
                            <td id="damagetd4"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Livestock}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default DamageTable;