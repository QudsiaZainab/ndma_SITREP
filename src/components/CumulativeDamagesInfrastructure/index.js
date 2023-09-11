import React from 'react'
import { useState } from 'react'

const CumulativeDamagesInfrastructure = () => {
    const [cumdmginfradata, setCumdmginfradata] = useState([]);
    const CumDmgInfraData = [
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        {
            Province: 'Gilgit Baltistan',
            Roads: 7,
            Bridges: 1,
            Partial: 7,
            Full: 5,
            P: 9,
            F: 3,
            Livestock: 9,
        },
        // Add more data as needed
    ];

    CumDmgInfraData.forEach(item => {
        item.T = item.P + item.F;
        item.Total = item.Partial + item.Full;
    });

    const P = CumDmgInfraData.reduce((total, item) => total + item.P, 0);
    const F = CumDmgInfraData.reduce((total, item) => total + item.F, 0);
    const T = CumDmgInfraData.reduce((total, item) => total + item.T, 0);
    const Partial = CumDmgInfraData.reduce((total, item) => total + item.Partial, 0);
    const Full = CumDmgInfraData.reduce((total, item) => total + item.Full, 0);
    const Total = CumDmgInfraData.reduce((total, item) => total + item.Total, 0);
    const Livestock = CumDmgInfraData.reduce((total,item) => total + item.Livestock,0);
    const Roads = CumDmgInfraData.reduce((total,item) => total + item.Roads,0);
    const Bridges = CumDmgInfraData.reduce((total,item) => total + item.Bridges,0);
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Cumulative Damage Infrastructure </h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Province/Region</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} >Roads(km)</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} >Bridges</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan = "3">Houses</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan="3">Other Buildings Damage</th>
                        <th style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Livestock</th>
                    </tr>
                    <tr style = {{backgroundColor: '#F3F4F6', fontSize: '0.4rem'}}>
                        <th></th>
                        <th ></th>
                        <th></th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Partial</th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Full</th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Total</th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Partial</th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Full</th>
                        <th style = {{textAlign: 'center', padding: '2px 2px 10px 2px', paddingLeft: '2px', paddingRight: '2px'}}>Total</th>
                        <th></th>
                    </tr>
                    <tbody id="dmginfrabdy">
                    {CumDmgInfraData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Roads}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Bridges}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Partial}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Full}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold', paddingLeft: '2px', paddingRight: '2px'}}>{item.Total}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.P}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.F}</td>
                                <td style = {{textAlign: 'center', color: '#EF4444', fontWeight: 'bold', paddingLeft: '2px', paddingRight: '2px'}}>{item.T}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Livestock}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                        <tr id="tr2">
                            <td  style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                Total
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Roads}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Bridges}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Partial}
                            </td>
                            <td id="roadstd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Full}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Total}
                            </td>
                            <td id="roadstd3" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {P}
                            </td>
                            <td id="roadstd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {F}
                            </td>
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {T}
                            </td>
                            <td id="roadstd3" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {Livestock}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
  )
}

export default CumulativeDamagesInfrastructure