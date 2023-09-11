import React from 'react';
import './style.css';
import { useState } from 'react';

function RoadsTable() {

    const [roadstabledata, setRoadstabledata] = useState([]);
    const roadsTableData = [
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Mandi Bahawadin',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        {
            province: 'Khyber Pakhtunkhwa',
            district: 'Islamabad',
            lengthRoadDamage: 6,
            natureDamageRoad: 'Fully',
            traficSituationRoad: 'alternate route available',
            numberBridges: 5,
            typeBridge: 'Good',
            lengthBridge: 8,
            natureDamageBridge: 'Fully',
            trafficSituationBridge: 'diversion available'
        },
        // Add more data as needed
    ];

    const lengthRoadDamage = roadsTableData.reduce((total, item) => total + item.lengthRoadDamage, 0);
    const numberBridges = roadsTableData.reduce((total, item) => total + item.numberBridges, 0);
    const lengthBridge = roadsTableData.reduce((total, item) => total + item.lengthBridge, 0);
    return (
        <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Roads, Bridges and Other Infrastructure Damaged in Last 24 hours</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Province/Region</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Districts</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan="3">Roads/Tracks</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan = "5">Bridge</th>
                    </tr>
                    <tr style = {{backgroundColor: '#F3F4F6', fontSize: '0.5rem'}}>
                        <th ></th>
                        <th></th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Length of road damage</th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Nature/ extent of damage </th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Traffic situation </th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Number of Bridges</th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Type of bridge</th>
                        <th style={{padding:  '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} >Length of bridge</th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Nature/ Extent of Damage </th>
                        <th  style={{padding: '2px 2px 10px 2px', textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Traffic situation </th>
                    </tr>
                    <tbody id="roadstablbdy">
                    {roadsTableData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.district}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.lengthRoadDamage}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.natureDamageRoad}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.traficSituationRoad}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.numberBridges}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.typeBridge}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.lengthBridge}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.natureDamageBridge}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.trafficSituationBridge}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot  style = {{backgroundColor: '#F3F4F6'}}>
                        <tr id="tr2">
                            <td colSpan="2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                Total
                            </td>
                            <td id = "roadstd1" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {lengthRoadDamage}
                            </td>
                            <td  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>

                            </td>
                            <td  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>

                            </td>
                            <td id="roadstd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {numberBridges}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>

                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {lengthBridge}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}></td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

    );
}

export default RoadsTable;