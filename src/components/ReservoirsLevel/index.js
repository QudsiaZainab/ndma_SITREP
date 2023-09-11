import React from 'react'

const ReservoirsLevel = () => {
    function sendResponse(){
            
    }
    return (
        
        <div>
            <form className="px-4 my-12 max-w-2xl mx-auto space-y-4 bg-gray-100 border border-gray-400 py-6 rounded-lg px-10">
                <div>
                    <h5 className="font-bold mb-0 mt-6">Dams and Reservoirs Levels (Today’s Level /Current Level & Storage)</h5>
                    <div className="flex space-x-6  ">
                        <div className="w-1/2 ">
                            <label className=''>Feet:</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus:outline-none focus:border-teal-500" type="number" name="NUB" id="NUB" onChange={(e) => { }} />
                        </div>

                        <div className="w-1/2">
                            <label className=' '>(MAF):</label>
                            <input className=" border border-gray-400 block py-2 mt-0 px-4 w-full ml-0 rounded focus outline-none focus:border-teal-500 " type="number" name="TYB" id="TYB" onChange={(e) => { }} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button type="button" className="bg-gray-300 hover:bg-gray-400 font-bold py-2 px-4 rounded m-6" onClick={sendResponse}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ReservoirsLevel
