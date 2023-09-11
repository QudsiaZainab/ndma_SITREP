import React from 'react'
import { useState } from 'react';
import GOP from '../../assets/images/GOP.png'

export const PictorialView = () => {
    const [pictorialviewData, setPictorialviewData] = useState([]);
    const PictorialViewData = [
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'jjkhj',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'yryt',
        },
        {
            province: 'GB',
            image: {GOP},
            detail: 'ytyrt',
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Pictorial View of Damages</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}}>Province/Region</th>
                        <th style = {{textAlign: 'center'}}>Image</th>
                        <th style = {{textAlign: 'center'}} >Detail</th>
                    </tr>
                    <tbody id="rainfallmsrbdy">
                    {PictorialViewData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px', display: 'flex', justifyContent: 'center'}}><img src = {GOP} style = {{width: '50px', height: '50px'}}/></td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.detail}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
