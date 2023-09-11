import React from 'react'
import { useState, useEffect } from 'react';
import { Ucsbytehsil } from '../Ucsbytehsil';

export const NGO_FORM = () => {
    function sendResponse() {
        alert("sent")
    }
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
    const maxAllowedCheckboxes = 3;

    const [otherChecked, setOtherChecked] = useState(false);
    const [otherActivity, setOtherActivity] = useState('');

    const handleOtherboxChange = (e) => {
        const { name, checked } = e.target;

        if (name === 'Other') {
            setOtherChecked(checked);
            if (!checked) {
                // Clear the input field when unchecking "Other"
                setOtherActivity('');
            }
        } else {
            // Handle other checkboxes here
        }
    };

    // Function to handle checkbox change
    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        if (checked) {
            // Check if the maximum limit is reached
            if (selectedCheckboxes.length < maxAllowedCheckboxes) {
                setSelectedCheckboxes([...selectedCheckboxes, name]);
            }
        } else {
            setSelectedCheckboxes(selectedCheckboxes.filter((checkbox) => checkbox !== name));
        }
    };

    const handleChange = (event) => {
        handleCheckboxChange(event);
        handleOtherboxChange(event);
    }

    // Function to determine if a checkbox should be disabled
    const isCheckboxDisabled = (name) => {
        return selectedCheckboxes.length >= maxAllowedCheckboxes && !selectedCheckboxes.includes(name);
    };

    const [tehsils, setTehsils] = useState([]);
    const [selectedTehsil, setSelectedTehsil] = useState('');

    useEffect(() => {
        // Fetch or set your tehsils data here
        const uniqueTehsils = [...new Set(Ucsbytehsil.map(item => item.TEHSIL))];
        const sortedTehsils = uniqueTehsils.sort(); // Sort the tehsils in ascending order
        setTehsils(sortedTehsils);
    }, []);

    return (
        <div>
            <form className="px-4 my-12 max-w-4xl mx-auto space-y-4 bg-gray-100 border border-gray-400  rounded-lg px-10" onSubmit={sendResponse}>
                <h1 className="text-2xl mt-12 mb-2 font-bold text-center">Organization Information</h1>
                <div>
                    {/* <h5 className="font-bold mb-0 mt-6">Flood Alert/River Flow</h5> */}
                    <div className="flex space-x-6  ">
                        <div className="w-full ">
                            <label className=''>Full Name of Organization:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="NUB" id="NUB" onChange={(e) => { }} required />
                        </div>
                    </div>
                    <div className="flex space-x-6  mt-4">
                        <div className="w-2/3 ">
                            <label className=''>Operation Zone</label>
                            {/* <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="NUB" id="NUB" onChange={(e) => { }} /> */}
                            <select id="tehsilSelect" className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" value={selectedTehsil} onChange={(e) => setSelectedTehsil(e.target.value)}>
                                <option value="">Select Tehsil</option>
                                {tehsils.map(tehsil => (
                                    <option key={tehsil} value={tehsil}>{tehsil}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-1/3">
                            <label className=' '>Year founded:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" min="1000" max="2023" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                    </div>
                    <div className="mt-4">
                        <h5 className="font-bold mb-0 ">Address</h5>
                        <div className='flex space-x-6'>
                            <div className="w-1/2">
                                <label className=' '>Street:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                            </div>
                            <div className="w-1/2">
                                <label className=' '>City:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} required />
                            </div>
                        </div>
                        <div className='flex space-x-6'>
                            <div className="w-1/3">
                                <label className=' '>State or Province:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                            </div>
                            <div className="w-1/3">
                                <label className=' '>Zip Code:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                            </div>
                            <div className="w-1/3">
                                <label className=' '>Country:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className="w-full">
                        <label className=' '>Mailing Address (if different from above):</label>
                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex space-x-6'>
                        <div className="w-1/3">
                            <label className=' '>Tel:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                        <div className="w-1/3">
                            <label className=' '>Fax:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                        <div className="w-1/3">
                            <label className=' '>Website:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex space-x-6'>
                        <div className="w-1/3">
                            <label className=' '>Email:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>


                        <div className="w-1/3">
                            <label className=' '>Current Annual Budget:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                        <div className="w-1/3">
                            <label className=' '>Year:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex space-x-6'>
                        <div className="w-1/3">
                            <label className=' '>Executive Director:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>


                        <div className="w-1/3">
                            <label className=' '>Title (If different):</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                        <div className="w-1/3">
                            <label className=' '># of Full Time Staff:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className="w-full">
                        <label className=' '>Mission Statement:</label>
                        <textarea className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                    </div>
                </div>

                <div className='mt-4 space-y-4'>
                    <h5 className="font-bold mb-0 ">AREA(S) OF ACTIVITY (please check up to three only)</h5>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Ageing"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Ageing")}
                            />
                            Ageing
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Education"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Education")}
                            />
                            Education
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Labor"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Labor")}
                            />
                            Labor
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Religion, Belief & Ethics"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Religion, Belief & Ethics")}
                            />
                            Religion, Belief & Ethics
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Agriculture & Food"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Agriculture & Food")}
                            />
                            Agriculture & Food
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Environment"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Environment")}
                            />
                            Environment
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Law & Legal Affairs"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Law & Legal Affairs")}
                            />
                            Law & Legal Affairs
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Science & Technology"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Science & Technology")}
                            />
                            Science & Technology
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Business & Economic Policy"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Business & Economic Policy")}
                            />
                            Business & Economic Policy
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Family"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Family")}
                            />
                            Family
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Narcotics, Drugs & Crime"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Narcotics, Drugs & Crime")}
                            />
                            Narcotics, Drugs & Crime
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Social & Cultural Development"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Social & Cultural Development")}
                            />
                            Social & Cultural Development
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Children & Youth"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Children & Youth")}
                            />
                            Children & Youth
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Human Rights"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Human Rights")}
                            />
                            Human Rights
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Peace & Security"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Peace & Security")}
                            />
                            Peace & Security
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Sports & Recreation"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Sports & Recreation")}
                            />
                            Sports & Recreation
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Communications & Media"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Communications & Media")}
                            />
                            Communications & Media
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Health & Nutrition"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Health & Nutrition")}
                            />
                            Health & Nutrition
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Population/ Human Settlements"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Population/ Human Settlements")}
                            />
                            Population/ Human Settlements
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Trade & International Finance"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Trade & International Finance")}
                            />
                            Trade & International Finance
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Conflict Resolution"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Conflict Resolution")}
                            />
                            Conflict Resolution
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Indigenous People"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Indigenous People")}
                            />
                            Indigenous People
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Refugees"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Refugees")}
                            />
                            Refugees
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Women’s Status & Issues"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Women’s Status & Issues")}
                            />
                            Women’s Status & Issues
                        </label>
                    </div>
                    <div className='flex '>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Development"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Development")}
                            />
                            Development
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="International Organization"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("International Organization")}
                            />
                            International Organization
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Relief Services"
                                onChange={handleCheckboxChange}
                                disabled={isCheckboxDisabled("Relief Services")}
                            />
                            Relief Services
                        </label>
                        <label className='w-1/4'>
                            <input
                                className='mr-4'
                                type="checkbox"
                                name="Other"
                                onChange={handleChange}
                                disabled={isCheckboxDisabled("Other")}
                            />
                            Other
                            {otherChecked && (
                                <div className='mt-4'>
                                    <div className='w-full'>
                                        <label className=''>Other Activity:</label>
                                        <input
                                            className='border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500'
                                            type="text"
                                            value={otherActivity}
                                            onChange={(e) => setOtherActivity(e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}
                        </label>

                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <button type="submit" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" >Submit</button>
                </div>
            </form>

        </div>
    )
}