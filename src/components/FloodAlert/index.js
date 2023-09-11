import React from 'react'
import { useState } from 'react'

const FloodAlert = () => {
    const [floodalertdata, setFloodalertdata] = useState([]);
    const FloodAlertData = [
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        {
            structure: 'mangla dam',
            designedCapacity: 7657657,
            discharge: 76788,
            date: '23/09/2023',
            inflowl: 89,
            outflowl: 776,
            inflowt:67777,
            outflowt:76878,
            foodClassification: 'normal',
            dangerClassification: '450000',
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Flood Alert/ River Flows</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center', padding: '4px'}}>Structures</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>Designed Capacity</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan = "2" >Historic Peak Floods experienced todate*</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan = "2">Last Year Flow</th>
                        <th style={{textAlign: 'center', padding: '4px'}} colSpan = "3">Today Actual Flow with Flood Classification</th>
                        <th style={{textAlign: 'center', padding: '4px'}}>ComparativeDanger (VHF) Classification</th>
                    </tr>
                    <tr style = {{marginBottom: '2.5rem'}}>
                        <th></th>
                        <th></th>
                        <th style={{textAlign: 'center', padding : '4px', paddingLeft: '2px', paddingRight: '2px'}}>Discharge</th>
                        <th style={{textAlign: 'center', padding : '4px', paddingLeft: '2px', paddingRight: '2px'}}>Date</th>
                        <th style={{textAlign: 'center', padding : '4px', paddingLeft: '2px', paddingRight: '2px'}}>Inflow</th>
                        <th style={{textAlign: 'center', padding : '4px', paddingLeft: '2px', paddingRight: '2px'}}>Outflow</th>
                        <th style={{textAlign: 'center', padding: '4px', paddingLeft: '2px', paddingRight: '2px'}}>Inflow</th>
                        <th style={{textAlign: 'center', padding: '4px', paddingLeft: '2px', paddingRight: '2px'}}>Outflow</th>
                        <th style={{textAlign: 'center', padding : '4px', paddingLeft: '2px', paddingRight: '2px'}}>Food Classification</th>
                        <th></th>
                    </tr>
                    <tbody id="fldalertbdy">
                    {FloodAlertData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.structure}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.designedCapacity}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.discharge}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.date}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.inflowl}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.outflowl}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.inflowt}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.outflowt}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.foodClassification}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.dangerClassification}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

  )
}

export default FloodAlert