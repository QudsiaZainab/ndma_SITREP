import React from 'react'
import { useState } from 'react';

export const BISP = () => {
    const [bispdata, setBispdata] = useState([]);
    const BISPData = [
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        {
            Province: 'Gilgit Baltistan',
            totben: 798776,
            displan: 1763325432,
            ben: 765467,
            csh: 5785756589,
            benefs: 987654,
            cash: 3789764326,
        },
        // Add more data as needed
    ];

    const totben = BISPData.reduce((total, item) => total + item.totben, 0);
    const displan = BISPData.reduce((total, item) => total + item.displan, 0);
    const ben = BISPData.reduce((total, item) => total + item.ben, 0);
    const csh = BISPData.reduce((total, item) => total + item.csh, 0);
    const benefs = BISPData.reduce((total, item) => total + item.benefs, 0);
    const cash = BISPData.reduce((total, item) => total + item.cash, 0);
  return (
    <div style = {{marginBottom: '2.5rem'}}>
            <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Flood Relief Assistance (BISP)</h2>
            <div style = {{overflowX: 'auto'}}>
                <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
                    <tr style = {{backgroundColor: '#F3F4F6'}}>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}  >Province/Region</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} >Total Benefs</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} >Total Cash Disbursement Planned</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan="2">Disbursement Completed</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}} colSpan="2">Disbursement Balance</th>
                    </tr>
                    <tr style = {{backgroundColor: '#F3F4F6', paddingLeft: '2px', paddingRight: '2px'}}>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Benefs</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Cash</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>Benefs</th>
                        <th style={{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>%age</th>
                        
                    </tr>
                    <tbody id="bispbdy">
                    {BISPData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.totben}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.displan}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.ben}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.csh}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.benefs}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.cash}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                        <tr >
                            <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                Total
                            </td>
                            <td id="damagetd1" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {totben}
                            </td>
                            <td id="damagetd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {displan}
                            </td>
                            <td id="damagetd3" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {ben}
                            </td>
                            <td id="damagetd4" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {csh}
                            </td>
                            <td id="damagetd2" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                                {benefs}
                            </td>
                           <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444', paddingLeft: '2px', paddingRight: '2px'}}>
                            {cash}
                           </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>

  )
}
