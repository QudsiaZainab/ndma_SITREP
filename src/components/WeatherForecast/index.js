import React from "react";
import { useState } from "react";

export default function WeatherForecast() {
    return (
        <div>
            <form className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
                <h1 className="text-2xl font-semibold mb-5">Give data for weather/forecast for next 24 hours</h1>
                <div className="flex space-x-4 ">
                    <div className='w-1/3 '>
                        <label className="">Select River:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            // onChange={}
                            type="text"
                        />
                    </div>

                    <div className='w-1/3 grid row-span-2'>
                        <label className="">Upper Catchment:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            // value={selectedendDate}
                            // onChange={}
                            type="text"
                        />
                    </div>

                    <div className='w-1/3 grid row-span-2'>
                        <label className="">Lower Catchment:</label>
                        <input type="text" className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" />
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-0">Enter Reservoir level</h5>
                    <div className="flex space-x-4 ">
                        <div className='w-1/3 '>
                            <label className="">Select Dam:</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // onChange={}
                                type="text"
                            />
                        </div>

                        <div className='w-1/3 grid row-span-2'>
                            <label className="">Current:</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // value={selectedendDate}
                                // onChange={}
                                type="text"
                            />
                        </div>

                        <div className='w-1/3 grid row-span-2'>
                            <label className="">Max Conservation:</label>
                            <input type="text" className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" />
                        </div>
                    </div>
                </div>
                <h5 className="font-bold mb-0">Quantative Flood Forecast of Guaging Stations </h5>
                <div className="flex space-x-8">

                    <div className='w-1/2 '>
                        <label className="">Select River:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            // onChange={}
                            type="text"
                        />
                    </div>

                    <div className='w-1/2 grid row-span-2 '>
                        <label className="">Select Station:</label>
                        <input
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            // value={selectedendDate}
                            // onChange={}
                            type="text"
                        />
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-0">Actual Observations at 6:00 pst</h5>
                    <div className="flex space-x-8">

                        <div className='w-1/2 '>
                            <label className="">Inflow</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // onChange={}
                                type="number"
                            />
                        </div>

                        <div className='w-1/2 grid row-span-2'>
                            <label className="">Outflow</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // value={selectedendDate}
                                // onChange={}
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex space-x-8">

                        <div className='w-1/2 '>
                            <label className="">Quantitative Forecast for next 24 hours</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // onChange={}
                                type="number"
                            />
                        </div>

                        <div className='w-1/2 grid row-span-2'>
                            <label className="">Qualitative Forecasted Flood Level (Inflow)</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                // value={selectedendDate}
                                // onChange={}
                                type="text"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold mb-0">Max Flood Peaks (In thousand of cusecs)</h5>
                    <div className="flex space-x-8">

                        <div className='w-1/2 '>
                            <label className="">Historical</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                type="number"
                            />
                        </div>

                        <div className='w-1/2 grid row-span-2'>
                            <label className="">Flood Season (2023)</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" >Submit</button>
                </div>
            </form>
        </div>
    );
}