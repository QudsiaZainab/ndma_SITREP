import React from 'react'
import { districtsByProvince } from '../districtsByProvince';
import { useState } from 'react';
import { Tehsilsbydistrict } from '../Tehsilsbydistrict';
import { useEffect } from 'react';

const provinceData = [
    "Punjab",
    "Sindh",
    "Balochistan",
    "Khyber Pakhtunkhwa",
    "Gilgit Baltistan",
    "Azad Kashmir",
    "Islamabad",
];



const damageNatureData = [
    "fully",
    "partially washed away",
    "water over flow",
];

const TrafficSituation = [
    "Alternate Route",
    "Diversion available",
]

const categoryData = [
    'Monsoon',
    'Earthquake',
    'Premonsoon',
];

const situationData = [
    'alternate route',
    'diversion available',
];



const InputForm = () => {

    const [province, setProvince] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [districts, setDistricts] = useState("");
    const [md, setMd] = useState(0);
    const [fd, setFd] = useState(0);
    const [cd, setCd] = useState(0);
    const [mi, setMi] = useState(0);
    const [fi, setFi] = useState(0);
    const [ci, setCi] = useState(0);
    const [fh, setFh] = useState(0);
    const [ph, setPh] = useState(0);
    const [livestock, setLivestock] = useState(0)
    const [deathRemarks, setDeathRemarks] = useState("");
    const [injuriesRemarks, setInjuriesRemarks] = useState("");
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [eventDate, setEventDate] = useState(new Date())
    const [eventcategory, setEventcategory] = useState("");
    const [selectedImages, setSelectedImages] = useState([]);
    const [selectedTehsil, setSelectedTehsil] = useState("");
    const [selectedRoadSituation, setSelectedRoadSituation] = useState("");
    const [selectedRoadNature, setSelectedRoadNature] = useState("");
    const [selectedBridgeSituation, setSelectedBridgeSituation] = useState("");
    const [selectedBridgeNature, setSelectedBridgeNature] = useState("");
    const [affectedPopulation, setAffectedPopulation] = useState(0);
    const [reliefItems, setReliefItems] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [organization, setOrganization] = useState("");
    const [ntent, setNtent] = useState(0);
    const [ntarpaulin, setNtarpaulin] = useState(0);
    const [nmosnet, setNmosnet] = useState(0);
    const [nblanket, setNblanket] = useState(0)
    const [nhygkit, setNhygkit] = useState(0);
    const [nkitset, setNkitset] = useState(0);
    const [nfoodpacks, setNfoodpacks] = useState(0);
    const [nsleepingbag, setNsleepingbag] = useState(0);
    const [nfirstkit, setNfirstkit] = useState(0);
    const [ngenerator, setNgenerator] = useState(0);
    const [ration, setNration] = useState(0);
    const [jerrycan, setNjerrycan] = useState(0);
    const [ndewatpumps, setNdwatpumps] = useState(0);
    const [nlifesavjack, setNlifesavjacket] = useState(0);
    const [nchemicalspmach, setNchemicalmach] = useState(0);
    const [campsno, setCampsno] = useState(0);
    const [campspop, setCampspop] = useState(0);
    const [damroadimg, setDamroadimg] = useState([]);

    const [bridgesno, setBridgesno] = useState(0)
    const [bridgestype, setBridgestype] = useState("");
    const [bridgeslength, setBridgeslength] = useState(0);
    const [daminfraimg, setDaminfraimg] = useState([]);
    const [dambrigimg, setDambrigimg] = useState([]);
    const [lengthroaddamage, setLengthroaddamage] = useState(0)
    const [damagedbuildimg, setDamagedbuilding] = useState(0)
    const [damageschools, setDmageschools] = useState(0)
    const [time, setTime] = useState("")
    const [rainfall, setRainfall] = useState(0)
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [epicenter, setEpicenter] = useState("")
    const [magnitude, setMagnitude] = useState(0)
    const [depth, setDepth] = useState(0)
    const [boatsemploy, setBoatsemploy] = useState(0)
    const [aviationEmploy, setAviationEmploy] = useState(0)
    const [totalbenefs, setTotalBenefs] = useState(0)
    const [totalCash, setTotalCash] = useState(0)
    const [benefscomp, setBenefscomp] = useState(0)
    const [cashcomp, setCashcomp] = useState(0)


    const [ptarpaulin, setPtarpaulin] = useState("")
    const [pplasticmat, setPplasticmat] = useState("")
    const [pjerrycan, setPjerrycan] = useState("")
    const [pwatertank, setPwatertank] = useState("")
    const [pwatercooler, setPwatercooler] = useState("")
    const [pfoodpacks, setPfoodpacks] = useState("")
    const [pcookedfood, setPcookedfood] = useState("")
    const [pgascylinder, setPgascylinder] = useState("")
    const [pkitchenset, setPkitchenkit] = useState("")
    const [pboat, setPboat] = useState("")
    const [phygienekit, setPhygienekit] = useState("")
    const [pfirstaidkit, setPfirstaidkit] = useState("")
    const [pdewateringpump, setPdewateringpump] = useState("")
    const [pbed, setPbed] = useState("")
    const [plifesavingjacket, setPlifesavingjacket] = useState("")
    const [pblanket, setPblanket] = useState("")
    const [pnetmosquito, setPnetmosquito] = useState("")

    const [roadsno, setRoadsno] = useState(0)
    const [restorationstatus, setRestorationstatus] = useState("")
    const [roadnetworkdetails, setRoadNetworkDetails] = useState("")
    const [machinerydeployed, setMachinerydeployed] = useState(0)
    const [blockagecause, setBloackagecause] = useState("")


    

    

    



    const handleBrigImg = (e) => {
        const files = Array.from(e.target.files);
        setDambrigimg(files);
    };

    const handleDamInfraImg = (e) => {
        const files = Array.from(e.target.files);
        setDaminfraimg(files);
    };

    const handleDamRoadImg = (e) => {
        const files = Array.from(e.target.files);
        setDamroadimg(files);
    };

    function sendResponse(){
        alert("submit");
    }


    return (
        <div className=" md:mt-0 mt-12 border-t-0 h-screen">
            <h1 className="text-2xl mt-12 mb-2 font-bold text-center">Give data for the impacts of any event</h1>
            <div className="flex">
                <form className="justify-center space-y-4 mt-12 p-10 mb-12 max-w-4xl pb-12 mx-auto bg-gray-100 border border-gray-400 py-6 rounded-lg " onSubmit={sendResponse}>

                    <div className="flex space-x-8">
                        <div className='w-1/3 grid row-span-2'>
                            <label className="">Select Date:</label>
                            <input
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                type="date"
                                required
                            />
                        </div>

                        <div className='w-1/3 grid row-span-2 '>
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

                        <div className="w-1/3">
                            <label className="">Affected Population:  </label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="AP" id="AP" onChange={(e) => { setAffectedPopulation(e.target.value) }} required/>
                        </div>

                    </div>

                    {(eventcategory === 'Monsoon' || eventcategory === 'Premonsoon') && (<div className="">
                        <label className="">Rainfall(mm):  </label>
                        <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="rainfall" id="rainfall" onChange={(e) => { setRainfall(e.target.value) }} required/>
                    </div>)}

                    {eventcategory === 'Earthquake' && (
                        <div>
                            <div className='flex space-x-8'>
                                <div className='w-1/4'>
                                    <label>Latitude:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="number"
                                        name="latitude"
                                        id="latitude"
                                        onChange={(e) => { setLatitude((e.target.value)) }}
                                        required
                                    />
                                </div>
                                <div className='w-1/4'>
                                    <label>Longitude:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="number"
                                        name="longitude"
                                        id="longitude"
                                        onChange={(e) => { setLongitude(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className='w-1/4'>
                                    <label>Epicenter:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="text"
                                        name="longitude"
                                        id="longitude"
                                        onChange={(e) => { setEpicenter(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className='w-1/4'>
                                    <label>Event Date:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="date"
                                        name="longitude"
                                        id="longitude"
                                        onChange={(e) => { setEventDate(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                            <div className='flex space-x-8'>
                                <div className="w-1/3">
                                    <label>Magnitude:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="number"
                                        name="magnitude"
                                        id="magnitude"
                                        onChange={(e) => { setMagnitude(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="w-1/3">
                                    <label>Depth:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="number"
                                        name="depth"
                                        id="depth"
                                        onChange={(e) => { setDepth(e.target.value) }}
                                        required
                                    />
                                </div>
                                <div className="w-1/3">
                                    <label>Time:</label>
                                    <input
                                        className="border border-gray-400 w-full block py-2 mt-0 px-4 rounded focus:outline-none focus:border-teal-500"
                                        type="time"
                                        name="time"
                                        id="time"
                                        onChange={(e) => { setTime(e.target.value) }}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}


                    <div className="flex space-x-8">


                        <div className='w-1/3 grid row-span-2'>
                            <label className="">Select Province:</label>
                            <select
                                className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                                required
                            >
                                <option value="">Select Province</option>
                                {provinceData.map((provinceName, index) => (
                                    <option key={index} value={provinceName}>
                                        {provinceName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="w-1/3 grid row-span-2">
                            <label className="">Select District:</label>
                            <select
                                className="border border-gray-400 py-2 px-4 w-full block rounded focus:outline-none focus:border-teal-500"
                                value={selectedDistrict}
                                onChange={(e) => setSelectedDistrict(e.target.value)}
                            >
                                <option value="" disabled={!province}>Select District</option>
                                {province && (
                                    districtsByProvince[province].map((district, index) => (
                                        <option key={index} value={district}>
                                            {district}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>

                        {/* {selectedDistrict && ( */}
                        <div className="w-1/3 grid row-span-2">
                            <label className="">Select Tehsil:</label>
                            <select
                                className="border border-gray-400 py-2 px-4 w-full block rounded focus:outline-none focus:border-teal-500"
                                value={selectedTehsil}
                                onChange={(e) => setSelectedTehsil(e.target.value)}
                                required
                            >
                                <option value="">Select Tehsil</option>
                                {selectedDistrict && (
                                    Tehsilsbydistrict[selectedDistrict].map((tehsil, index) => (
                                        <option key={index} value={tehsil}>
                                            {tehsil}
                                        </option>
                                    ))
                                )}
                            </select>
                        </div>
                        {/* )} */}



                    </div>


                    <div>
                        <h5 className="font-bold mb-0 mt-6">Enter number of deaths</h5>
                        <div className="flex space-x-8">
                            <div className="w-1/3">
                                <label className=''>Male:      </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="MD" id="MD" onChange={(e) => { setMd(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Female:     </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FD" id="FD" onChange={(e) => { setFd(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className="">Children:  </label>
                                <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="CD" id="CD" onChange={(e) => { setCd(e.target.value) }} required/>
                            </div>

                        </div>
                        <div className="">
                            <label>Give Remarks:</label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="remarks" id="remarks" onChange={(e) => { setDeathRemarks(e.target.value) }} required/>
                        </div>

                    </div>

                    <div>
                        <h5 className="font-bold mb-0 mt-8">Enter number of injuries</h5>
                        <div className="flex space-x-8">
                            <div className="w-1/3">
                                <label className=''>Male:      </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="MI" id="MI" onChange={(e) => { setMi(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Female:     </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FI" id="FI" onChange={(e) => { setFi(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className="">Children:  </label>
                                <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="CI" id="CI" onChange={(e) => { setCi(e.target.value) }} required/>
                            </div>

                        </div>
                        <div className="">
                            <label>Give Remarks:</label>
                            <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="remarks" id="remarks" onChange={(e) => { setInjuriesRemarks(e.target.value) }} required/>
                        </div>

                    </div>


                    <div>
                        <h5 className="font-bold mb-0 mt-6">Enter number of infrastructure damaged</h5>
                        <div className="flex space-x-8 ">
                            <div className="w-1/3 ">
                                <label className=''>Partial:      </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="PH" id="PH" onChange={(e) => { setPh(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Full:     </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="FH" id="FH" onChange={(e) => { setFh(e.target.value) }} required/>
                            </div>

                            <div className=" w-1/3">
                                <label>Number of livestock:</label>
                                <input className="border border-gray-400 w-full block py-2 mt-0 px-4 mr-4 ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="livestock" id="livestock" onChange={(e) => { setLivestock(e.target.value) }} required/>
                            </div>

                        </div>

                        <div className="flex mt-4 space-x-8 ">
                            <div className="w-1/2 ">
                                <label className=''>No of schools damaged:      </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="schoolsDamaged" id="schoolsDamaged" onChange={(e) => { setDmageschools(e.target.value) }} required/>
                            </div>

                            <div className="w-1/2">
                                <label className=' '>Other buildings damaged:     </label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="otherbuildings" id="otherbuildings" onChange={(e) => { setDamagedbuilding(e.target.value) }} required/>
                            </div>

                        </div>





                    </div>


                    <div>
                        <h5 className="font-bold mb-0 mt-6">Data for damaged roads/tracks</h5>
                        <div className="flex space-x-8 ">
                            <div className="w-1/3 ">
                                <label className=''>Length of road damage</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="LR" id="LR" onChange={(e) => { setLengthroaddamage(e.target.value) }} />
                            </div>

                            <div className="w-1/3 ">
                                <label className="">Nature/Extent of Damage:</label>
                                <select
                                    className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                    value={selectedRoadNature}
                                    onChange={(e) => setSelectedRoadNature(e.target.value)}
                                >
                                    <option value="">Select Nature/Extent of Damage:</option>
                                    {damageNatureData.map((natureName, index) => (
                                        <option key={index} value={natureName}>
                                            {natureName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="w-1/3 ">
                                <label className="">Traffic Situation:</label>
                                <select
                                    className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                    value={selectedRoadSituation}
                                    onChange={(e) => setSelectedRoadSituation(e.target.value)}
                                >
                                    <option value="">Select Traffic Situation</option>
                                    {situationData.map((situationName, index) => (
                                        <option key={index} value={situationName}>
                                            {situationName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h5 className="font-bold mb-0 mt-6">Data for damaged bridge</h5>
                        <div className="flex space-x-8 ">
                            <div className="w-1/3 ">
                                <label className=''>Number of bridges</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => { setBridgesno(e.target.value) }} />
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Types of bridges</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => { setBridgestype(e.target.value) }} />
                            </div>

                            <div className="w-1/3">
                                <label className="">Length of bridge</label>
                                <input className="border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="LB" id="LB" onChange={(e) => { setBridgeslength(e.target.value) }} />
                            </div>
                        </div>
                        <div className="flex space-x-8 ">

                            <div className="w-1/2">
                                <label className="">Nature/Extent of Damage:</label>
                                <select
                                    className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                    value={selectedBridgeNature}
                                    onChange={(e) => setSelectedBridgeNature(e.target.value)}
                                >
                                    <option value="">Select Nature/Extent of Damage:</option>
                                    {damageNatureData.map((natureName, index) => (
                                        <option key={index} value={natureName}>
                                            {natureName}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="w-1/2">
                                <label className="">Traffic Situation:</label>
                                <select
                                    className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-teal-500"
                                    value={selectedBridgeSituation}
                                    onChange={(e) => setSelectedBridgeSituation(e.target.value)}
                                >
                                    <option value="">Select Traffic Situation</option>
                                    {situationData.map((situationName, index) => (
                                        <option key={index} value={situationName}>
                                            {situationName}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <div className="w-full">
                            <label>Provide images of damaged buildings</label>
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                onChange={handleBrigImg}
                                className="border border-gray-400 w-full block py-2 mt-0 px-4 mr-4 ml-0 rounded focus:outline-none focus:border-teal-500"
                                required
                            />
                        </div>
                        <div>
                            <div className="">
                                <label className=' '>Images Detail</label>
                                <textarea className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " rows="3" name="camppopulation" id="camppopulation" onChange={(e) => { setCampspop(e.target.value) }} required/>
                            </div>
                        </div>
                    </div>

                    {eventcategory === 'Earthquake' && (<div>
                        <h5 className="font-bold mb-0 mt-6">Enter incident details</h5>
                        <div className="flex space-x-8">
                            <div className="w-1/2 ">
                                <label className=''>Cause of Incident</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="campsno" id="campsno" onChange={(e) => { setCampsno(e.target.value) }} required/>
                            </div>

                            <div className="w-1/2">
                                <label className=' '>Source</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="camppopulation" id="camppopulation" onChange={(e) => { setCampspop(e.target.value) }} required/>
                            </div>

                        </div>
                        <div>
                            <div className="">
                                <label className=' '>Detail of Incident</label>
                                <textarea className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " rows="3" name="camppopulation" id="camppopulation" onChange={(e) => { setCampspop(e.target.value) }} required/>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                <label className=' '>Response</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="camppopulation" id="camppopulation" onChange={(e) => { setCampspop(e.target.value) }} required/>
                            </div>
                        </div>
                    </div>)}

                    <div>
                        <h5 className="font-bold mb-0 mt-6">Enter data for relief camps established</h5>
                        <div className="flex space-x-8">
                            <div className="w-1/2 ">
                                <label className=''>Number of camps</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="campsno" id="campsno" onChange={(e) => { setCampsno(e.target.value) }} required/>
                            </div>

                            <div className="w-1/2">
                                <label className=' '>Camp population</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="camppopulation" id="camppopulation" onChange={(e) => { setCampspop(e.target.value) }} required/>
                            </div>

                        </div>
                    </div>
                    {(eventcategory === 'Monsoon' || eventcategory === 'Premonsoon') && (<div>
                        <h5 className="font-bold mb-0 mt-6">Enter data for rescue operations</h5>
                        <div className="flex space-x-8  ">
                            <div className="w-1/2">
                                <label className=' '>Employment of Boats</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="boatsemploy" id="boatsemploy" onChange={(e) => { setBoatsemploy(e.target.value) }} required/>
                            </div>

                            <div className="w-1/2">
                                <label className=' '>Employment of Aviation Assets</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="aviationemploy" id="aviationemploy" onChange={(e) => { setAviationEmploy(e.target.value) }} required/>
                            </div>
                        </div>
                    </div>)}

                    {(eventcategory === 'Monsoon' || eventcategory === 'Premonsoon') && (
                        <div>
                            <div>
                                <h5 className="font-bold mb-0 mt-6">Data for Flood Relief Assistance (BISP)</h5>
                                <div className="flex space-x-8 ">
                                    <div className="w-1/2 ">
                                        <label className=''>Total Benefs:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="totalbenefs" id="totalbenefs" onChange={(e) => { setTotalBenefs(e.target.value) }} />
                                    </div>

                                    <div className="w-1/2">
                                        <label className=' '>Total Cash Disbursement Planned:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="totalCash" id="totalCash" onChange={(e) => { setTotalCash(e.target.value) }} />
                                    </div>
                                </div>
                                <h5 className="font-bold mt-6 mb-0">Disbursement Completed:</h5>
                                <div className="flex space-x-8">

                                    <div className="w-1/2">
                                        <label className=' '>Benefs</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="benefs" id="benefs" onChange={(e) => { setBenefscomp(e.target.value) }} />
                                    </div>

                                    <div className="w-1/2">
                                        <label className=' '>Cash</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="cash" id="cash" onChange={(e) => { setCashcomp(e.target.value) }} />
                                    </div>
                                </div>
                                <h5 className="font-bold mb-0 mt-6">Disbursement Balance:</h5>
                                <div className="flex space-x-8">

                                    <div className="w-1/2">
                                        <label className=' '>Benefs</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                                    </div>

                                    <div className="w-1/2">
                                        <label className=' '>%age</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h5 className="font-bold mb-0 mt-6">Roads Blocked</h5>
                                <div className="flex space-x-6  ">
                                    <div className="w-1/3 ">
                                        <label className=''>No of Road:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => { setRoadsno(e.target.value)}} />
                                    </div>

                                    <div className="w-1/3">
                                        <label className=' '>Restoration Status:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="text" name="TYB" id="TYB" onChange={(e) => {setRestorationstatus(e.target.value)}} />
                                    </div>

                                    <div className="w-1/3 ">
                                        <label className=''>Details of Road Network:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="NUB" id="NUB" onChange={(e) => {setRoadNetworkDetails(e.target.value)}} />
                                    </div>
                                </div>
                                <div className="flex space-x-8">
                                    <div className="w-1/2 ">
                                        <label className=''>Machinery/Manpower Deployed:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => {setMachinerydeployed(e.target.value)}} />
                                    </div>

                                    <div className="w-1/2">
                                        <label className=' '>Cause of Blockage:</label>
                                        <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="blockage" id="blockage" onChange={(e) => { setBloackagecause(e.target.value)}} />
                                    </div>
                                </div>

                            </div>
                        </div>)}

                    <div>
                        <h5 className="font-bold mb-0 mt-6">Relief Provided by NDMA</h5>
                        <div className="flex space-x-8 ">
                            <div className="w-1/4 ">
                                <label className=''>Tent</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="ntent" id="ntent" onChange={(e) => { setNtent(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Tarpaulin</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNtarpaulin(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Mosquito Nets</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNmosnet(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Blankets</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNblanket(e.target.value) }} />
                            </div>
                        </div>
                        <div className="flex space-x-8 ">

                            <div className="w-1/4">
                                <label className=' '>Hygiene Kits</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNhygkit(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Kitchen Set</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="nkitchenset" id="nkitchenset" onChange={(e) => { setNkitset(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Food Packss</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="nfoodpacks" id="nfoodpacks" onChange={(e) => { setNfoodpacks(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Sleeping Bag</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="nsleepingbag" id="nsleepingbag" onChange={(e) => { setNsleepingbag(e.target.value) }} />
                            </div>
                        </div>

                        <div className="flex space-x-8 ">

                            <div className="w-1/4">
                                <label className=' '>First Aid Kit</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="nfirstaid" id="nfirstaid" onChange={(e) => { setNfirstkit(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Generator</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="generator" id="geenrator" onChange={(e) => { setNgenerator(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Ration (Tons)</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="nrationtons" id="nrationtons" onChange={(e) => { setNration(e.target.value) }} />
                            </div>

                            <div className="w-1/4">
                                <label className=' '>Jerry Can</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="jerrycan" id="jerrycan" onChange={(e) => { setNjerrycan(e.target.value) }} />
                            </div>
                        </div>

                        <div className="flex space-x-8 ">
                            <div className="w-1/3">
                                <label className=' '>De-watering Pumps</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="dewatering" id="dewatering" onChange={(e) => { setNdwatpumps(e.target.value) }} />
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Life Saving Jacket</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNlifesavjacket(e.target.value) }} />
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Chemical Spray Machine</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setNchemicalmach(e.target.value) }} />
                            </div>
                        </div>
                    </div>

                    {(province === 'Punjab' || province === 'Sindh' || province === 'Balochistan' || province === 'Khyber Pakhtunkhwa' || province === 'Gilgit Baltistan' || province === 'Azad Kashmir') &&
                        (<div>
                            <h5 className="font-bold mb-0 mt-6">Relief Provided by PDMA</h5>
                            <div className="flex space-x-8 ">
                                <div className="w-1/4 ">
                                    <label className=''>Tarpaulin</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => { setPtarpaulin(e.target.value) }} />
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Pkastic Mats</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPplasticmat(e.target.value) }} />
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Jerry Cane</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPjerrycan(e.target.value) }} />
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Water tank/ Bottle</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPwatertank(e.target.value) }} />
                                </div>
                            </div>
                            <div className="flex space-x-8  ">

                                <div className="w-1/4">
                                    <label className=' '>Water Cooler</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPwatercooler(e.target.value) }} />
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Food Packs</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPfoodpacks(e.target.value) }} required/>
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Cooked Food</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPcookedfood(e.target.value) }} required/>
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Gas Cylinders</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPgascylinder(e.target.value) }} required/>
                                </div>
                            </div>

                            <div className="flex space-x-8  ">

                                <div className="w-1/4">
                                    <label className=' '>Kitchen Set</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPkitchenkit(e.target.value) }} required/>
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>First aid kits</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPfirstaidkit(e.target.value) }} required/>
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Hygiene Kit</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPhygienekit(e.target.value) }} required/>
                                </div>

                                <div className="w-1/4">
                                    <label className=' '>Boats</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPboat(e.target.value) }} required/>
                                </div>
                            </div>

                            <div className="flex space-x-8">
                                <div className="w-1/3">
                                    <label className=' '>De-watering Pumps</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPdewateringpump(e.target.value) }}  required/>
                                </div>

                                <div className="w-1/3">
                                    <label className=' '>Beds/Chapai</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPbed(e.target.value) }} required/>
                                </div>

                                <div className="w-1/3">
                                    <label className=' '>Life Saving Jackets</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPlifesavingjacket(e.target.value) }} required/>
                                </div>
                            </div>

                            <div className="flex space-x-8">
                                <div className="w-1/3">
                                    <label className=' '>Blankets/ Sleeping Bags</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPblanket(e.target.value) }} required/>
                                </div>

                                <div className="w-1/3">
                                    <label className=' '>Net Mosquito/ animal</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPnetmosquito(e.target.value) }} required/>
                                </div>

                                <div className="w-1/3">
                                    <label className=' '>Water Tanks/filter</label>
                                    <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { setPwatertank(e.target.value) }} required/>
                                </div>
                            </div>
                        </div>)}

                    <div>
                        <h5 className="font-bold mb-0 mt-6">Relief provided by humitarian agencies</h5>
                        <div className="flex space-x-8 ">
                            <div className="w-1/3 ">
                                <label className=''>Relief items:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="reliefitems" id="reliefitems" onChange={(e) => { setReliefItems(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3">
                                <label className=' '>Quantity:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="quantity" id="quantity" onChange={(e) => { setQuantity(e.target.value) }} required/>
                            </div>

                            <div className="w-1/3 ">
                                <label className=''>Organization:</label>
                                <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="text" name="organization" id="organization" onChange={(e) => { setOrganization(e.target.value) }} required />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <button type="submit" className="bg-gray-300 mt-10 hover:bg-gray-400 font-bold py-2 px-4 rounded " >Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default InputForm;
