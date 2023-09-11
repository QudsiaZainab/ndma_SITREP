import React from 'react'
import { useState } from 'react';

const DamsReserviorsLevels = () => {
    const [damsreserviorsData, setDamsreserviorsData] = useState([]);
    const DamsReserviorsData = [
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        {
            reservoir: 'mangla dam',
            f: 44,
            m: 67,
            fe: 89,
            ma: 678,
            feet: 789,
            maf: 6756,
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Dams and Reservoirs Level</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center', padding: '4px'}}>Reservoirs</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan = "2" >Max Conservation Level & Storage</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan="2">Today's Level</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan = "2" >Remaining Level & Storage</th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th></th>
                        <th className="text-center" colSpan = "2" >Current Level and Storage</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr className="bg-gray-100">
                        <th></th>
                        <th className="text-center">Feet</th>
                        <th className="text-center">(MAF)</th>
                        <th className="text-center">Feet</th>
                        <th className="text-center">(MAF)</th>
                        <th className="text-center">Feet</th>
                        <th className="text-center">(MAF)</th>
                    </tr>
                    <tbody id="damrsrvoirbdy">
                    {DamsReserviorsData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.reservoir}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.f}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.m}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.fe}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.me}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.feet}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.maf}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default DamsReserviorsLevels
