import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Earthquake from '../Earthquake';
// import { handleGeneratePdf } from '../Earthquake';
import Monsoon from '../Monsoon';
import Premonsoon from '../Premonsoon';

const GenerateReport = () => {
    const [selectedstartDate, setSelectedstartDate] = useState("");
    const [selectedendDate, setSelectedendDate] = useState("");
    const [eventcategory, setEventcategory] = useState("");
    const [route, setRoute] = useState("");

    useEffect = () =>{
        if (eventcategory === 'Monsoon')
        {
            setRoute('/monsoon')
        }
        if (eventcategory === 'Premonsoon')
        {
            setRoute('/premonsoon')
        }
        if (eventcategory === 'Earthquake')
        {
            setRoute('/earthquake')
        }
    }
    

    const categoryData = [
        'Monsoon',
        'Earthquake',
        'Premonsoon',
    ]

    return (
        <div>
            <h1 className="text-2xl text-center font-semibold mb-5">Generate report for any event</h1>
            <form onSubmit={<Link to = "route"></Link>} className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">

                <div className='grid row-span-2'>
                    <label className="">Select Event:</label>
                    <select
                        className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                        value={eventcategory}
                        onChange={(e) => setEventcategory(e.target.value)}
                        
                    >
                        <option value="">Select Event Category</option>
                        {categoryData.map((categoryName, index) => (
                            <option key={index} value={categoryName}>
                                {categoryName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex space-x-4 ">
                    <div className='w-1/2 grid row-span-2'>
                        <label className="">Start Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedstartDate}
                            onChange={(e) => setSelectedstartDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>

                    <div className='w-1/2 grid row-span-2'>
                        <label className="">End Date:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={selectedendDate}
                            onChange={(e) => setSelectedendDate(e.target.value)}
                            type="date"
                            required
                        />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Link to = {route}>
                    <button
                        type="button"
                        className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6"
                    >
                        Generate Report
                    </button>
                    </Link>
                </div>
            </form>
            <div style = {{display: 'none'}}><Earthquake/></div>
            <div style = {{display: 'none'}}><Monsoon/></div>
            <div style = {{display: 'none'}}><Premonsoon/></div>
            
        </div>
    )
}

export default GenerateReport;