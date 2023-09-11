import React from 'react'
import { useState } from 'react'

export const Incident = () => {
    const [incidentdata, setIncidentdata] = useState([]);
    const IncidentData = [
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        {
            province: 'Islamabad',
            district: 'Sargodha',
            causeofincident: 'hgfh',
            detailsofincident: 'hfhyfuut',
            reponse: 'uytu',
            source: 'fytt'
        },
        // Add more data as needed
    ];
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Incident Details</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.5rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center'}}>Province/Region</th>
                        <th style = {{textAlign: 'center'}}>District</th>
                        <th style = {{textAlign: 'center'}} >Cause of Incident</th>
                        <th style = {{textAlign: 'center'}}>Details of Incident</th>
                        <th style = {{textAlign: 'center'}} >Response</th>
                        <th style = {{textAlign: 'center'}}>Source</th>
                    </tr>
                    <tbody id="incidtablbdy">
                    {IncidentData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.district}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.causeofincident}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.detailsofincident}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.reponse}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.source}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}