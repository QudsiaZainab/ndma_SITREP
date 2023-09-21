import React from 'react'
import { earthquakeInput } from './earthquakeInput';
import { useState } from 'react';

export const EarthquakeInputSeverity = ({ data }) => {
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedTehsil, setSelectedTehsil] = useState('');
    const [selectedUC, setSelectedUC] = useState('');
    const [earthquakeInputSeverity, setEathquakeInputSeverity] = useState('');
    const [intensity, setIntensity] = useState('');

    const handleProvinceChange = (event) => {
        const provinceName = event.target.value;
        setSelectedProvince(provinceName);
        setSelectedDistrict('');
        setSelectedTehsil('');
        setSelectedUC('');
    };

    const handleDistrictChange = (event) => {
        const districtName = event.target.value;
        setSelectedDistrict(districtName);
        setSelectedTehsil('');
        setSelectedUC('');
    };

    const handleTehsilChange = (event) => {
        const tehsilName = event.target.value;
        setSelectedTehsil(tehsilName);
        setSelectedUC('');
    };

    function sendResponse(){
        alert('Submitted')
    }
    return (
        <div className="overflow-y-scroll h-screen pb-12">
            <form onSubmit={sendResponse} className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
            <h1 className="text-xl font-bold text-center">EARTHQUAKE SHAKE INTENSITY</h1>
                <div><label>Select Province:</label>
                    <select required value={selectedProvince} className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" onChange={handleProvinceChange}>
                        <option value="">Select Province</option>
                        {data.map(item => item.PROVINCE).filter((value, index, self) => self.indexOf(value) === index).map(province => (
                            <option key={province} value={province}>{province}</option>
                        ))}
                    </select></div>

                <div><label>Select District:</label>
                    <select required className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500' value={selectedDistrict} onChange={handleDistrictChange}>
                        <option value="">Select District</option>
                        {data.filter(item => item.PROVINCE === selectedProvince).map(item => item.DISTRICT).filter((value, index, self) => self.indexOf(value) === index).map(district => (
                            <option key={district} value={district}>{district}</option>
                        ))}
                    </select></div>
                <div><label>Select Tehsil:</label>
                    <select required className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500" value={selectedTehsil} onChange={handleTehsilChange}>
                        <option value="">Select Tehsil</option>
                        {data.filter(item => item.PROVINCE === selectedProvince && item.DISTRICT === selectedDistrict).map(item => item.TEHSIL).filter((value, index, self) => self.indexOf(value) === index).map(tehsil => (
                            <option key={tehsil} value={tehsil}>{tehsil}</option>
                        ))}
                    </select></div>

                <div><label>Select UC:</label>
                    <select className='border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500' value={selectedUC} onChange={event => setSelectedUC(event.target.value)}>
                        <option value="">Select UC</option>
                        {data.filter(item => item.PROVINCE === selectedProvince && item.DISTRICT === selectedDistrict && item.TEHSIL === selectedTehsil).map(item => (
                            <option key={item.UC} value={item.UC}>{item.UC}</option>
                        ))}
                    </select></div>

                    <div><label className="">Select Input Severity of Earthquake:</label>
                        <select
                            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                            value={earthquakeInputSeverity}
                            onChange={(e) => setEathquakeInputSeverity(e.target.value)}
                            required
                        >
                            <option value="">Select Input Severity of Earthquake:</option>
                            {earthquakeInput.map((inputSeverity, index) => (
                                <option key={index} value={inputSeverity}>
                                    {inputSeverity}
                                </option>
                            ))}
                        </select></div>
                        <div >
                                <label className="">Enter Earthquake Shake Intensity:</label>
                                <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" placeholder='Enter Earthquake Shake Intensity' type = "number" step = "any" onChange={(e) => {setIntensity(e.target.value) }} required/>
                            </div>
                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" >Submit</button>
                </div>
            </form>
        </div >

    )
}
