import React from 'react'

const CumulativeHumitarianAgencies = () => {
  return (
    <div className=' m-10'>
            <h2 className="text-2xl font-bold mt-12 underline  mb-2">Cumulative Relief by Humitarian Agencies</h2>
            <div className='  overflow-x-auto'>
                <table className="border-gray-400  table w-full table-auto  ">
                    <tr className="bg-gray-100">
                        <th className="text-center ">Relief Items</th>
                        <th className="text-center ">Total</th>
                    </tr>
                    <tbody id = "cumdmginfrabdy">

                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default CumulativeHumitarianAgencies
