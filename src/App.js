
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import InputForm from './components/InputForm';
import GenerateReport from './components/GenerateReport';
import Premonsoon from './components/Premonsoon';
import Threshold from './components/Threshold';
import { Ucsbytehsil } from './components/Ucsbytehsil';
import WeatherForecast from './components/WeatherForecast';
import Monsoon from './components/Monsoon';
import Earthquake from './components/Earthquake'
import FloodAlertInput from './components/FloodAlertInput';
import FloodBaseFlowIndia from './components/FloodBaseFlowIndia';
import ReservoirsLevel from './components/ReservoirsLevel';
import { NGO_FORM } from './components/NGO_FORM';


function App() {
    
    return (
        <BrowserRouter>
                <Routes>
                    {/* NGO Form */}
                    <Route path = '/ngoform' element = {<NGO_FORM/>}/>   
                    {/* Main input form  for SITREP              */}
                    <Route path='/inputform' element={<InputForm />} />
                    {/* premonsoon report  */}
                    <Route path='/premonsoon' element={<Premonsoon />} />
                    {/* generate report form */}
                    <Route path='/generatereport' element={<GenerateReport />} />
                    {/* monsoon repot  */}
                    <Route path = '/monsoon' element = {<Monsoon/>}/>
                    {/* input for weather forecast  */}
                    <Route path='/weatherforecast' element={<WeatherForecast />} />
                    {/* input form for flood threshold */}
                    <Route path='/threshold' element={<Threshold data = {Ucsbytehsil}/>} />
                    {/* earthquake report  */}
                    <Route path = '/earthquake' element = {<Earthquake/>}/>
                    {/* flood alert input  */}
                    <Route path = '/floodalertinput' element = {<FloodAlertInput/>}/>
                    {/* Daily Flood/ Base Flow Data Obtained From India input form  */}
                    <Route path = '/floodbaseflowindia' element = {<FloodBaseFlowIndia/>}/>
                    {/* Dams and Reservoirs Levels (Today’s Level /Current Level & Storage) */}
                    <Route path = '/reservoirslevel' element = {<ReservoirsLevel/>}/>
                </Routes>
        </BrowserRouter>
    )
}

export default App