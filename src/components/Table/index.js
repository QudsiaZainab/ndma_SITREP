import './Style.css';
import { useState } from 'react';
import React from 'react';

function Table(props) {

    const [data, setData] = useState([]);
    const Data = [
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Muzaffar Garh',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        {
            Province: 'Punjab',
            District: 'Karachi',
            M: 7,
            F: 5,
            C: 8,
            Remarks: 'Good'
        },
        // Add more data as needed
    ];

    Data.forEach(item => {
        item.T = item.M + item.F + item.C;
    });

    const Male = Data.reduce((total, item) => total + item.M, 0);
    const Female = Data.reduce((total, item) => total + item.F, 0);
    const Child = Data.reduce((total, item) => total + item.C, 0);
    const Total = Data.reduce((total, item) => total + item.T, 0);
    return (
        <div style={{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', textDecoration: 'underline', fontWeight: 'bold', marginBottom: '0.5rem'}} >{props.category}</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{display: 'table', tableLayout: 'auto', width: '100%',  borderCollapse: 'collapse', borderColor: '#cbd5e0', fontSize: '0.6rem'}}>
                    <tr style = {{backgroundColor: '#f3f4f6'}}>
                        <th style = {{textAlign: 'center'}}>Province/Region</th>
                        <th style = {{textAlign: 'center'}}>Districts</th>
                        <th style = {{textAlign: 'center'}} colSpan="4">{props.category}</th>
                        <th style = {{textAlign: 'center'}}>Remarks</th>
                    </tr>
                    <tr style = {{backgroundColor: '#f3f4f6'}}>
                        <th ></th>
                        <th></th>
                        <th style = {{textAlign: 'center'}}>M</th>
                        <th style = {{textAlign: 'center'}}>F</th>
                        <th style = {{textAlign: 'center'}}>C</th>
                        <th style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>T</th>
                        <th></th>
                    </tr>
                    <tbody id={props.tablbdy}>
                    {Data.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center'}}>{item.District}</td>
                                <td style = {{textAlign: 'center'}}>{item.M}</td>
                                <td style = {{textAlign: 'center'}}>{item.F}</td>
                                <td style = {{textAlign: 'center'}}>{item.C}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold'}}>{item.T}</td>
                                <td style = {{textAlign: 'center'}}>{item.Remarks}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot id="tf" style = {{backgroundColor: '#f3f4f6'}}>
                        <tr id="tr2">
                            <td colSpan="2"  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                Total
                            </td>
                            <td id={props.td1}  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Male}
                            </td>
                            <td id={props.td2}  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Female}
                            </td>
                            <td id={props.td3}  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Child}
                            </td>
                            <td id={props.td4}  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                                {Total}
                            </td>
                            <td>

                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default Table;