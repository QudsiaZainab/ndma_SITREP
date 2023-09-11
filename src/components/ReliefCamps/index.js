import React from 'react'
import { useState } from 'react'

const ReliefCamps = () => {
    const [reliefcampsdata, setReliefcampsdata] = useState([]);
    const ReliefCampsData = [
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        {
            Province: 'Gilgit Baltistan',
            noofcaamps: 7,
            noofpopulation: 876765687,
        },
        // Add more data as needed
    ];

    const noofcamps = ReliefCampsData.reduce((total, item) => total + item.noofcaamps, 0);
    const noofpopulation = ReliefCampsData.reduce((total, item) => total + item.noofpopulation, 0);
  return (
    <div style = {{marginBottom: '2.5rem'}}>
    <h2 style = {{fontSize: '0.7rem', fontWeight: 'bold', textDecoration: 'Underline', marginBottom: '0.5rem'}}>Relief Camps Established </h2>
    <div style = {{overflowX: 'auto'}}>
        <table style = {{fontSize: '0.6rem', borderCollapse: 'collapse', borderColor: '#cbd5e0', width: '100%', tableLayout: 'auto'}}>
            <tr style = {{backgroundColor: '#F3F4F6'}}>
                <th style={{textAlign: 'center'}}>Province/Region</th>
                <th style={{textAlign: 'center'}} >No of camps</th>
                <th style={{textAlign: 'center'}} >No of Population</th>
            </tr>
            <tbody id="relfcampsbdy">
            {ReliefCampsData.map((item, index) => (
                            <tr key={index}>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.Province}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.noofcaamps}</td>
                                <td style = {{textAlign: 'center', paddingLeft: '2px', paddingRight: '2px'}}>{item.noofpopulation}</td>
                            </tr>
                        ))}
            </tbody>
            <tfoot style = {{backgroundColor: '#F3F4F6'}}>
                <tr id="tr2">
                    <td   style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                        Total
                    </td>
                    <td id="roadstd1" style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                        {noofcamps}
                    </td>
                    <td style = {{textAlign: 'center', fontWeight: 'bold', color: '#EF4444'}}>
                        {noofpopulation}
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</div>
  )
}

export default ReliefCamps
